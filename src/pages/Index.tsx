import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Heart, TrendingUp, FileCheck, Percent, ArrowRight } from "lucide-react";

const Index = () => {
  const calculatorTools = [
    {
      title: "EMI Calculator",
      description: "Calculate your Equated Monthly Installment for loans with detailed breakdown and payment schedule.",
      icon: Calculator,
      href: "/emi-calculator",
      category: "Finance"
    },
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and get personalized health insights based on WHO standards.",
      icon: Heart,
      href: "/bmi-calculator",
      category: "Health"
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages, percentage increase, decrease, and find what percentage one number is of another.",
      icon: Percent,
      href: "/percentage-calculator",
      category: "Math"
    },
  ];

  const pdfTools = [
    {
      title: "PDF to Text",
      description: "Extract text content from PDF documents quickly and accurately. Perfect for data extraction and analysis.",
      icon: FileText,
      href: "/pdf-to-text",
      category: "PDF"
    },
    {
      title: "PDF Merger",
      description: "Combine multiple PDF files into a single document. Simple, fast, and secure.",
      icon: FileCheck,
      href: "/pdf-merger",
      category: "PDF"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Professional Digital Tools for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Everyone
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Access powerful calculators, PDF tools, and utilities designed to make your work easier. 
                Free, fast, and professional-grade tools at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                  Explore Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </section>

        {/* Calculators Section */}
        <section id="calculators" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Calculators
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Accurate calculations for finance, health, and everyday math problems. 
                Get instant results with detailed explanations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculatorTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* PDF Tools Section */}
        <section id="pdf-tools" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                PDF Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional PDF utilities for all your document needs. 
                Convert, merge, split, and edit PDFs with ease.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose ToolBox Pro?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">100% Free</h3>
                <p className="text-muted-foreground">
                  All tools are completely free to use with no hidden charges or subscriptions required.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Accurate Results</h3>
                <p className="text-muted-foreground">
                  Get precise calculations and conversions backed by tested algorithms and formulas.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Easy to Use</h3>
                <p className="text-muted-foreground">
                  Intuitive interface designed for both beginners and professionals. No learning curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who trust ToolBox Pro for their daily calculations and conversions.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Browse All Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
