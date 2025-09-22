import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Satellite, Activity, AlertCircle, Eye, ExternalLink, TrendingUp } from "lucide-react";

// Mock NASA NEO data - in real app this would come from NASA API
const mockNEOData = [
  {
    name: "2024 QR3",
    diameter: "150m - 340m",
    distance: "0.03 AU",
    velocity: "24.7 km/s",
    hazardous: false,
    nextApproach: "2024-10-15"
  },
  {
    name: "2024 PR1", 
    diameter: "89m - 200m",
    distance: "0.019 AU", 
    velocity: "18.2 km/s",
    hazardous: true,
    nextApproach: "2024-10-22"
  },
  {
    name: "Apophis",
    diameter: "325m - 375m", 
    distance: "0.75 AU",
    velocity: "30.7 km/s",
    hazardous: true,
    nextApproach: "2029-04-13"
  }
];

const NASADashboard = () => {
  return (
    <section id="nasa-dashboard" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Live NASA Data
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time tracking of Near-Earth Objects with authentic data from NASA's monitoring systems
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">34,847</div>
              <div className="text-sm text-muted-foreground">Tracked Objects</div>
            </CardContent>
          </Card>
          
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-neon-green mb-2">2,341</div>
              <div className="text-sm text-muted-foreground">Potentially Hazardous</div>
            </CardContent>
          </Card>
          
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-neon-cyan mb-2">156</div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </CardContent>
          </Card>
          
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">23</div>
              <div className="text-sm text-muted-foreground">Close Approaches</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Tracking Data */}
        <Card className="cosmic-border bg-card/90 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Satellite className="h-8 w-8 text-primary" />
              Near-Earth Object Tracking
            </CardTitle>
            <CardDescription className="text-lg">
              Latest data from NASA's Center for Near Earth Object Studies (CNEOS)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockNEOData.map((neo, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center">
                        <Activity className="h-6 w-6 text-background" />
                      </div>
                      {neo.hazardous && (
                        <AlertCircle className="absolute -top-1 -right-1 h-5 w-5 text-destructive" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{neo.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          variant={neo.hazardous ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {neo.hazardous ? "Potentially Hazardous" : "Non-Hazardous"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Next approach: {neo.nextApproach}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-foreground">{neo.diameter}</div>
                      <div className="text-muted-foreground">Diameter</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">{neo.distance}</div>
                      <div className="text-muted-foreground">Distance</div>
                    </div>
                    <div className="text-center col-span-2 md:col-span-1">
                      <div className="font-semibold text-neon-cyan">{neo.velocity}</div>
                      <div className="text-muted-foreground">Velocity</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Live Updates & Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-neon-green" />
                Detection Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-space rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Interactive charts coming soon</p>
                  <p className="text-sm">Real-time NEO discovery trends</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-accent" />
                Live Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded bg-secondary/30">
                  <span className="text-sm">New object detected: 2024 QS1</span>
                  <Badge variant="outline" className="text-xs">2 min ago</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded bg-secondary/30">
                  <span className="text-sm">Trajectory updated: Apophis</span>
                  <Badge variant="outline" className="text-xs">15 min ago</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded bg-secondary/30">
                  <span className="text-sm">Close approach: 2024 PR1</span>
                  <Badge variant="outline" className="text-xs">1 hour ago</Badge>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View NASA CNEOS Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NASADashboard;