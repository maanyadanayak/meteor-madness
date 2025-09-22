import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Zap, Globe, Target } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 starfield opacity-30"></div>
      
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80"></div>
      
      {/* Floating Meteors */}
      <div className="absolute top-20 left-10 w-32 h-0.5 meteor-trail opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-0.5 meteor-trail opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 left-1/3 w-20 h-0.5 meteor-trail opacity-50" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text leading-tight">
            Meteor Madness
          </h1>
          <div className="text-2xl md:text-3xl text-muted-foreground font-light">
            Unveiling <span className="text-neon-cyan">Cosmic</span> Impact
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Simplifying complex space data, making cosmic risks 
          <span className="text-neon-green font-semibold"> fun and engaging </span> 
          for everyone
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="cosmic-glow px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 border border-primary/50"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Explore Impact Zones
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold border-accent/50 text-accent hover:bg-accent/10 hover:border-accent"
          >
            <Globe className="mr-2 h-5 w-5" />
            View NASA Data
          </Button>
        </div>
        
        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6 hover:bg-card/90 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg mb-2 text-foreground">The Cosmic Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The frequent passage of meteors and asteroids near Earth poses potential risks, 
                  but public awareness remains critically low.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="cosmic-border bg-card/80 backdrop-blur-sm p-6 hover:bg-card/90 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-accent/20 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg mb-2 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform complex space data into interactive experiences that educate 
                  and engage people about cosmic impact scenarios.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;