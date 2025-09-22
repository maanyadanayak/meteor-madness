import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Eye, 
  School, 
  TrendingUp, 
  Users, 
  Globe,
  Rocket,
  CheckCircle2,
  Clock,
  Calendar
} from "lucide-react";

const outcomes = [
  {
    icon: Users,
    title: "Enhanced Public Awareness",
    description: "Users will gain a clear understanding of meteor risks and cosmic impact scenarios"
  },
  {
    icon: TrendingUp,
    title: "Increased Engagement", 
    description: "Interactive simulations make complex space science accessible and engaging"
  },
  {
    icon: Globe,
    title: "NASA Data Accessibility",
    description: "Higher awareness of real NASA data and ongoing space monitoring efforts"
  },
  {
    icon: Rocket,
    title: "Educational Impact",
    description: "Improved scientific literacy through hands-on exploration of space phenomena"
  }
];

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "AR/VR Simulations",
    description: "Immersive experiences that let users witness meteor impacts in virtual reality",
    timeline: "Q2 2025",
    status: "planning",
    features: ["VR headset support", "360° impact visualization", "Haptic feedback"]
  },
  {
    phase: "Phase 2", 
    title: "Mobile Application",
    description: "Native iOS and Android apps with offline capabilities and AR features",
    timeline: "Q3 2025",
    status: "planning",
    features: ["Offline simulations", "AR overlay", "Push notifications"]
  },
  {
    phase: "Phase 3",
    title: "Educational Partnerships",
    description: "Collaboration with schools and institutions for curriculum integration",
    timeline: "Q4 2025",
    status: "planning",
    features: ["Curriculum materials", "Teacher tools", "Student tracking"]
  }
];

const FutureFrontiers = () => {
  return (
    <section id="future" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Outcomes & Future Frontiers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our vision for transforming space education and expanding cosmic awareness globally
          </p>
        </div>
        
        {/* Project Outcomes */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Expected Project Outcomes
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              
              return (
                <Card key={index} className="cosmic-border bg-card/90 backdrop-blur-sm text-center group hover:bg-card/95 transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">{outcome.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{outcome.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Development Roadmap */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Development Roadmap
          </h3>
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <Card key={index} className="cosmic-border bg-card/90 backdrop-blur-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Timeline Sidebar */}
                  <div className="lg:w-48 bg-gradient-cosmic p-6 text-background">
                    <div className="text-center">
                      <Badge className="bg-background/20 text-background border-background/30 mb-3">
                        {item.phase}
                      </Badge>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-semibold">{item.timeline}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm capitalize">{item.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-2">
                          <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-neon-green flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="hidden md:block">
                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                          {index === 0 && <Eye className="h-10 w-10 text-accent" />}
                          {index === 1 && <Smartphone className="h-10 w-10 text-accent" />}
                          {index === 2 && <School className="h-10 w-10 text-accent" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <Card className="cosmic-border bg-gradient-space mt-16 text-center">
          <CardHeader>
            <CardTitle className="text-3xl text-foreground">Join the Cosmic Journey</CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              Be part of the future of space education and cosmic awareness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="cosmic-glow">
                <Rocket className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
              <Button variant="outline" size="lg" className="border-foreground/30 text-foreground hover:bg-foreground/10">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FutureFrontiers;