"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ImageUpload } from "@/components/ImageUpload";
import { Button } from "@/components/Button";
import { LoadingOverlay } from "@/components/Loading";

export default function ScanPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageSelect = (file: File, previewUrl: string) => {
    setSelectedImage(file);
    setPreview(previewUrl);
  };

  const handleClear = () => {
    setSelectedImage(null);
    setPreview("");
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);

    // Simulate API call with mock data
    setTimeout(() => {
      // Navigate to results page
      router.push("/results");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-muted">
      {isAnalyzing && <LoadingOverlay message="Analyzing your food..." />}

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={24} />
            <span className="font-semibold">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="text-foreground" size={24} />
            </div>
            <h1 className="text-2xl font-bold">FoodVision</h1>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scan Nigerian Food
          </h2>
          <p className="text-lg text-foreground/70">
            Upload or capture an image of a Nigerian dish to get started
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <ImageUpload
            onImageSelect={handleImageSelect}
            preview={preview}
            onClear={handleClear}
          />
        </div>

        {selectedImage && (
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Food"}
            </Button>
            <p className="text-center text-sm text-foreground/60">
              Our AI will identify the dish and provide nutritional information
            </p>
          </div>
        )}

        {/* Tips */}
        {!selectedImage && (
          <div className="mt-8 p-6 bg-secondary/10 rounded-xl">
            <h3 className="font-semibold mb-3">📸 Tips for best results:</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Ensure good lighting</li>
              <li>• Capture the entire dish</li>
              <li>• Avoid excessive shadows</li>
              <li>• Get a clear, focused shot</li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
