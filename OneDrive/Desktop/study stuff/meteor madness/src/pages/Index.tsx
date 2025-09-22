import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ImpactExplorer from "@/components/ImpactExplorer";
import NASADashboard from "@/components/NASADashboard";
import FeaturesSection from "@/components/FeaturesSection";
import FutureFrontiers from "@/components/FutureFrontiers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ImpactExplorer />
      <NASADashboard />
      <FeaturesSection />
      <FutureFrontiers />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Meteor Madness</h3>
            <p className="text-muted-foreground">Unveiling Cosmic Impact</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Built with ❤️ by Tech Titans</p>
            <p className="mt-2">© 2025 Meteor Madness. Educational project for space awareness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
