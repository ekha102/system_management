"use client";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-gray-500/60 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}