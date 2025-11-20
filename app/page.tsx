import Link from "next/link";
import { Camera, Sparkles, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export default function Home() {
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
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
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
