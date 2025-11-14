"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Camera, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { getMockFoodResult } from "@/lib/mock-data";
import { formatConfidence } from "@/lib/utils";
import { useState } from "react";

export default function ResultsPage() {
  const router = useRouter();
  const result = getMockFoodResult();
  const [showFullHistory, setShowFullHistory] = useState(false);

  const historyPreview = result.history.slice(0, 200) + "...";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted pb-12">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/scan" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
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
      <main className="container mx-auto px-4 max-w-3xl">
        {/* Success Banner */}
        <div className="bg-accent text-white rounded-xl p-4 mb-6 text-center">
          <p className="font-semibold">✓ Food Successfully Identified!</p>
        </div>

        {/* Food Name & Confidence */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{result.name}</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
            <span className="text-sm font-semibold">Confidence:</span>
            <span className="text-lg font-bold text-secondary-dark">
              {formatConfidence(result.confidence)}
            </span>
          </div>
        </div>

        {/* Nutritional Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Nutritional Information</CardTitle>
            <p className="text-sm text-foreground/60 mt-1">Per serving (approx.)</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-secondary-dark">
                  {result.nutritionalInfo.calories}
                </p>
                <p className="text-sm text-foreground/70 mt-1">Calories</p>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-secondary-dark">
                  {result.nutritionalInfo.protein}
                </p>
                <p className="text-sm text-foreground/70 mt-1">Protein</p>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-secondary-dark">
                  {result.nutritionalInfo.carbs}
                </p>
                <p className="text-sm text-foreground/70 mt-1">Carbs</p>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-secondary-dark">
                  {result.nutritionalInfo.fat}
                </p>
                <p className="text-sm text-foreground/70 mt-1">Fat</p>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-secondary-dark">
                  {result.nutritionalInfo.fiber}
                </p>
                <p className="text-sm text-foreground/70 mt-1">Fiber</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ingredients */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Key Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {result.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Food History */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Cultural History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 leading-relaxed">
              {showFullHistory ? result.history : historyPreview}
            </p>
            {result.history.length > 200 && (
              <button
                onClick={() => setShowFullHistory(!showFullHistory)}
                className="mt-4 flex items-center gap-2 text-secondary-dark font-semibold hover:opacity-80 transition-opacity"
              >
                {showFullHistory ? (
                  <>
                    Show Less <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown size={20} />
                  </>
                )}
              </button>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="flex-1 flex items-center justify-center gap-2"
            onClick={() => router.push("/scan")}
          >
            <Camera size={20} />
            Scan Another Food
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => router.push("/")}
          >
            Back to Home
          </Button>
        </div>
      </main>
    </div>
  );
}
