// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-4">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
}
