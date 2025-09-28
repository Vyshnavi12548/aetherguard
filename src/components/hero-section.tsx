import { Button } from "@/components/ui/button";
import heroImage from "@/assets/aetherguard-hero.jpg";
import { Shield, Zap, Eye } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-primary animate-glow" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AetherGuard
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-Powered Bird Strike Prevention System for Aviation Safety
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-border">
              <Eye className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Real-time Detection</h3>
              <p className="text-sm text-muted-foreground">Advanced AI monitors flight paths 24/7</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-border">
              <Zap className="w-8 h-8 text-secondary" />
              <h3 className="font-semibold">Autonomous Response</h3>
              <p className="text-sm text-muted-foreground">Instant drone deployment for threat mitigation</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-border">
              <Shield className="w-8 h-8 text-accent" />
              <h3 className="font-semibold">Zero Collisions</h3>
              <p className="text-sm text-muted-foreground">Protecting aircraft and wildlife</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Live Dashboard
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('technical')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Technical Overview
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
    </section>
  );
}