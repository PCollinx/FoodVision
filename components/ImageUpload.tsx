"use client";

import React, { useRef, useState } from "react";
import { Camera as CameraIcon, X } from "lucide-react";
import { Button } from "./Button";

interface ImageUploadProps {
  onImageSelect: (file: File, preview: string) => void;
  preview?: string;
  onClear?: () => void;
}

export function ImageUpload({ onImageSelect, preview, onClear }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(file, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(file, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {preview ? (
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          {onClear && (
            <button
              onClick={onClear}
              className="absolute top-2 right-2 bg-foreground text-primary rounded-full p-2 hover:opacity-90 transition-opacity"
              aria-label="Clear image"
            >
              <X size={20} />
            </button>
          )}
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`
            border-3 border-dashed rounded-xl p-8 text-center cursor-pointer
            transition-all duration-200
            ${dragActive ? "border-secondary bg-secondary/10" : "border-border hover:border-secondary"}
          `}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
              <CameraIcon size={32} className="text-secondary-dark" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">Upload Food Image</p>
              <p className="text-sm text-foreground/60">
                Click to browse or drag and drop
              </p>
            </div>
            <Button variant="secondary" size="sm" onClick={(e) => e.stopPropagation()}>
              Choose File
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
