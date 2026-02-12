import { NextRequest, NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validators/inquiry";
import { sendInquiryEmail } from "@/lib/email/send";

// In-memory rate limiting (per IP, resets on restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10_000) {
      return NextResponse.json(
        { error: "Request too large." },
        { status: 413 }
      );
    }

    const body = await request.json();
    const result = inquirySchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((i) => i.message);
      return NextResponse.json({ error: errors[0] }, { status: 400 });
    }

    await sendInquiryEmail(result.data);

    return NextResponse.json({ success: true });
  } catch {
    console.error("[API /inquiry] Error processing inquiry");
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
