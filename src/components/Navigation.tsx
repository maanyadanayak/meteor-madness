import { Button } from "@/components/ui/button";
import { Rocket, Satellite, Star, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Impact Explorer", href: "#impact-explorer", icon: Rocket },
    { label: "NASA Data", href: "#nasa-dashboard", icon: Satellite },
    { label: "Features", href: "#features", icon: Star },
    { label: "Future", href: "#future", icon: Rocket },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center">
              <Rocket className="h-6 w-6 text-background" />
            </div>
            <span className="text-xl font-bold gradient-text">Meteor Madness</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <Button 
              className="cosmic-glow"
              onClick={() => scrollToSection("#impact-explorer")}
            >
              Start Exploring
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="space-y-3">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-3 w-full px-3 py-2 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <Button 
                className="w-full mt-4"
                onClick={() => scrollToSection("#impact-explorer")}
              >
                Start Exploring
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;