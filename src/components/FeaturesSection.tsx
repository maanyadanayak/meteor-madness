import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Settings, 
  Satellite, 
  Gamepad2, 
  GraduationCap, 
  Zap, 
  Globe,
  Target,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Interactive Map",
    description: "Visualize meteor strikes on a global scale with real-time impact zones and damage calculations",
    highlights: ["Global coverage", "Real-time rendering", "3D visualization"],
    color: "primary",
    comingSoon: false
  },
  {
    icon: Settings,
    title: "Meteor Customization",
    description: "Adjust size, speed, angle, and composition for realistic impact simulations",
    highlights: ["Size: 10m - 200m", "Speed: 11-70 km/s", "Variable angles"],
    color: "neon-cyan",
    comingSoon: false
  },
  {
    icon: Satellite,
    title: "NASA Data Dashboard",
    description: "Get real-time insights from tracked meteors and Near-Earth Objects",
    highlights: ["Live NEO tracking", "Hazard assessment", "Historical data"],
    color: "neon-green",
    comingSoon: true
  },
  {
    icon: Gamepad2,
    title: "Fun Mode (Game)",
    description: "Defend Earth using virtual rockets and shields in an engaging arcade experience",
    highlights: ["Rocket defense", "Shield systems", "Score tracking"],
    color: "accent",
    comingSoon: true
  },
  {
    icon: GraduationCap,
    title: "Education Corner",
    description: "Learn fascinating facts about asteroids and explore NASA missions",
    highlights: ["Mission profiles", "Scientific facts", "Interactive learning"],
    color: "destructive",
    comingSoon: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Stellar Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge tools and experiences that make space science accessible and engaging
          </p>
        </div>
        
        {/* Featured Highlight */}
        <Card className="cosmic-border bg-gradient-cosmic mb-12 text-background overflow-hidden">
          <div className="relative">
            <div className="absolute top-4 right-4">
              <Badge className="bg-background/20 text-background border-background/30">
                Available Now
              </Badge>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-4 text-3xl">
                <div className="p-3 rounded-lg bg-background/20">
                  <Target className="h-8 w-8" />
                </div>
                Impact Explorer - Main Feature
              </CardTitle>
              <CardDescription className="text-background/80 text-lg">
                Our flagship simulation tool brings cosmic impact scenarios to life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-background/90" />
                  <h4 className="font-semibold mb-1">Real Physics</h4>
                  <p className="text-sm text-background/70">Accurate impact calculations</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-background/90" />
                  <h4 className="font-semibold mb-1">Global Scale</h4>
                  <p className="text-sm text-background/70">Any location on Earth</p>
                </div>
                <div className="text-center">
                  <Rocket className="h-8 w-8 mx-auto mb-2 text-background/90" />
                  <h4 className="font-semibold mb-1">Interactive</h4>
                  <p className="text-sm text-background/70">Customize every parameter</p>
                </div>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full md:w-auto bg-background text-primary hover:bg-background/90"
              >
                Try Impact Explorer
              </Button>
            </CardContent>
          </div>
        </Card>
        
        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <Card 
                key={index}
                className="cosmic-border bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 group relative overflow-hidden"
              >
                {feature.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="outline" className="text-xs">
                      Coming Soon
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 rounded-lg bg-${feature.color}/20 text-${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}`}></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled={feature.comingSoon}
                  >
                    {feature.comingSoon ? "Coming Soon" : "Learn More"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Technology Stack */}
        <Card className="cosmic-border bg-card/90 backdrop-blur-sm mt-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Powered by Advanced Technology</CardTitle>
            <CardDescription className="text-lg">
              Built with cutting-edge tools for accuracy and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Satellite className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">NASA APIs</h4>
                <p className="text-sm text-muted-foreground">Authentic space data</p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-neon-green" />
                </div>
                <h4 className="font-semibold mb-1">Mapbox GL</h4>
                <p className="text-sm text-muted-foreground">Interactive mapping</p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Physics Engine</h4>
                <p className="text-sm text-muted-foreground">Real calculations</p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-8 w-8 text-neon-cyan" />
                </div>
                <h4 className="font-semibold mb-1">Real-time Data</h4>
                <p className="text-sm text-muted-foreground">Live updates</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesSection;