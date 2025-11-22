"use client";

import Link from "next/link";
import { Camera, Sparkles, BookOpen, TrendingUp, Brain, Zap, Target } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export default function Home() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="text-foreground" size={24} />
            </div>
            <h1 className="text-2xl font-bold">FoodVision</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full text-sm font-semibold text-foreground">
            🇳🇬 Nigerian Food Recognition
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Nigerian Cuisine with{" "}
            <span className="text-secondary-dark">Artificial Intelligence</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Snap a photo of any Nigerian dish and instantly get detailed
            information about its name, nutritional value, and rich cultural
            history.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/scan">
              <Button
                size="lg"
                className="w-full sm:w-auto flex items-center gap-2"
              >
                <Camera size={20} />
                Start Scanning
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                <Camera className="text-secondary-dark" size={24} />
              </div>
              <CardTitle>Instant Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                Upload or capture an image and our AI will identify the Nigerian
                dish in seconds
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="text-secondary-dark" size={24} />
              </div>
              <CardTitle>Nutritional Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                Get detailed nutritional breakdown including calories, protein,
                carbs, and more
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                <BookOpen className="text-secondary-dark" size={24} />
              </div>
              <CardTitle>Cultural History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                Learn about the origins, traditions, and stories behind each
                dish
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto mb-16 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Powered by cutting-edge AI technology to bring you accurate food recognition
            </p>
          </div>

          {/* Model Information */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Brain className="text-secondary-dark" size={24} />
                </div>
                <div>
                  <CardTitle className="text-2xl">EfficientNet-B4 Model</CardTitle>
                  <p className="text-sm text-foreground/60">State-of-the-art image classification</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Our Nigerian food recognition system uses <strong>EfficientNet-B4</strong>, a powerful 
                convolutional neural network architecture that achieves excellent accuracy while remaining 
                computationally efficient. The model has been specifically trained on Nigerian cuisine.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary-dark">72.2%</p>
                  <p className="text-sm text-foreground/70 mt-1">Validation Accuracy</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary-dark">18</p>
                  <p className="text-sm text-foreground/70 mt-1">Food Classes</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary-dark">Top 6</p>
                  <p className="text-sm text-foreground/70 mt-1">Predictions Returned</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                  <Camera className="text-secondary-dark" size={24} />
                </div>
                <CardTitle>1. Upload Image</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Take a photo or upload an image of any Nigerian dish. Our system 
                  accepts various image formats and automatically preprocesses them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="text-secondary-dark" size={24} />
                </div>
                <CardTitle>2. AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  The EfficientNet-B4 model processes your image through multiple neural 
                  network layers to extract features and identify the dish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                  <Target className="text-secondary-dark" size={24} />
                </div>
                <CardTitle>3. Get Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Receive detailed information including the dish name, confidence score, 
                  nutritional facts, ingredients, and cultural history.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Supported Foods */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Supported Nigerian Dishes</CardTitle>
              <p className="text-sm text-foreground/60 mt-1">Our model can identify these 18 popular Nigerian foods</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  "Jollof Rice", "Egusi Soup", "Moi Moi", "Akara",
                  "Suya", "Efo Riro", "Okra Soup", "Ofada Rice",
                  "Pounded Yam", "Banga Soup", "Pepper Soup", "Nkwobi",
                  "Amala", "Ewedu Soup", "Ogbono Soup", "Yam Porridge",
                  "Puff Puff", "Chin Chin"
                ].map((food) => (
                  <div 
                    key={food}
                    className="px-3 py-2 bg-secondary/10 rounded-lg text-sm font-medium text-center"
                  >
                    {food}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Technical Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-dark font-bold mt-1">•</span>
                  <span><strong>Transfer Learning:</strong> Pre-trained on ImageNet, fine-tuned specifically for Nigerian cuisine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-dark font-bold mt-1">•</span>
                  <span><strong>High Performance:</strong> Strong accuracy on dishes like Jollof Rice, Akara, Moi Moi, Puff Puff, and Suya</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-dark font-bold mt-1">•</span>
                  <span><strong>Real-time Processing:</strong> Results returned in seconds with confidence scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-dark font-bold mt-1">•</span>
                  <span><strong>Continuous Improvement:</strong> Model can be updated with more training data to improve accuracy</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-foreground/70">
                  <strong>Note:</strong> While our model performs well, it may face challenges with poor 
                  lighting, unusual angles, or visually similar dishes (e.g., viscous soups like Okra, 
                  Ogbono, and Banga). For best results, ensure good lighting and clear shots.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="bg-linear-to-r from-secondary to-secondary-dark rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to explore Nigerian cuisine?
          </h3>
          <p className="text-foreground/80 mb-6 text-lg">
            Join thousands discovering the rich flavors and history of Nigerian
            food
          </p>
          <Link href="/scan">
            <Button
              variant="primary"
              size="lg"
              className="bg-white hover:bg-white/90"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20 border-t border-border">
        <div className="text-center text-foreground/60 text-sm">
          <p>
            © 2025 FoodVision. Designed and Powered by Collins to celebrate
            Nigerian cuisine.
          </p>
        </div>
      </footer>
    </div>
  );
}
