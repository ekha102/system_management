"use client";

import { useState } from "react";

export default function MaintenanceBanner() {
  const [visible, setVisible] = useState(true);

  const showBanner =
    process.env.NEXT_PUBLIC_SHOW_MAINTENANCE_BANNER === "true";

  const message = process.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE;

  if (!showBanner || !visible) return null;

  return (
    <div className="relative bg-yellow-500 text-black px-4 py-2 text-sm flex items-center justify-center">
      <span className="text-center w-full">
        {message}
      </span>

      <button
        className="absolute right-4 font-bold hover:opacity-70 transition"
        onClick={() => setVisible(false)}
      >
        ✕
      </button>
    </div>
  );
}
