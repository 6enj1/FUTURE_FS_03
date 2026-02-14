import nodemailer from "nodemailer";
import type { InquiryData } from "@/lib/validators/inquiry";

export async function sendInquiryEmail(data: InquiryData): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
    console.log("[Email] SMTP not configured — inquiry logged:", {
      name: data.name,
      phone: data.phone,
      service: data.service,
    });
    return true;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const html = `
    <h2>New Inquiry — Noel's Barbershop & Lifestyle</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    ${data.email ? `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>` : ""}
    ${data.service ? `<p><strong>Service:</strong> ${escapeHtml(data.service)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message)}</p>
  `;

  await transporter.sendMail({
    from: FROM_EMAIL || SMTP_USER,
    to: TO_EMAIL,
    replyTo: data.email || undefined,
    subject: `New inquiry from ${data.name} — Noel's Barbershop & Lifestyle`,
    html,
  });

  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
