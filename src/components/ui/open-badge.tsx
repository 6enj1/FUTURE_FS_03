"use client";

import { useSyncExternalStore } from "react";
import { isOpenNow } from "@/lib/seo/config";

function subscribe(callback: () => void) {
  const id = setInterval(callback, 60_000);
  return () => clearInterval(id);
}

function getSnapshot() {
  return isOpenNow();
}

function getServerSnapshot() {
  return false;
}

export function OpenBadge() {
  const open = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <span className="flex items-center gap-1.5">
      <span
        className={`h-2 w-2 rounded-full ${
          open ? "bg-green-400 animate-pulse" : "bg-steel"
        }`}
      />
      {open ? "Open now" : "Currently closed"}
    </span>
  );
}
