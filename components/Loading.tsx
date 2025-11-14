"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export function LoadingSpinner({ size = 24 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 size={size} className="animate-spin text-secondary-dark" />
    </div>
  );
}

export function LoadingOverlay({ message = "Processing..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col items-center gap-4">
        <Loader2 size={48} className="animate-spin text-secondary-dark" />
        <p className="text-lg font-semibold">{message}</p>
      </div>
    </div>
  );
}
