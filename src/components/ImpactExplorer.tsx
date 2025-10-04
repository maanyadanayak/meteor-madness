import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { MapPin, Target, Zap, AlertTriangle, Play, RotateCcw, Flame } from "lucide-react";

interface MeteorData {
  id: number;
  name: string;
  size: number;
  speed: number;
  angle: number;
  impactTime: string;
  damage: string;
}

const ImpactExplorer = () => {
  const [city, setCity] = useState("");
  const [meteorSize, setMeteorSize] = useState([50]);
  const [meteorSpeed, setMeteorSpeed] = useState([20]);
  const [meteorAngle, setMeteorAngle] = useState([45]);
  const [simulationActive, setSimulationActive] = useState(false);
  const [meteorList, setMeteorList] = useState<MeteorData[]>([]);
  
  const handleSimulation = () => {
    if (city.trim()) {
      setSimulationActive(true);
      
      // Generate placeholder meteor data based on parameters
      setTimeout(() => {
        const mockMeteors: MeteorData[] = [
          {
            id: 1,
            name: `Meteor Alpha`,
            size: meteorSize[0],
            speed: meteorSpeed[0],
            angle: meteorAngle[0],
            impactTime: new Date().toLocaleTimeString(),
            damage: meteorSize[0] > 100 ? "Critical" : meteorSize[0] > 50 ? "High" : "Moderate"
          },
          {
            id: 2,
            name: `Meteor Beta`,
            size: Math.floor(meteorSize[0] * 0.7),
            speed: meteorSpeed[0] + 5,
            angle: meteorAngle[0] - 10,
            impactTime: new Date(Date.now() + 120000).toLocaleTimeString(),
            damage: meteorSize[0] > 80 ? "High" : "Moderate"
          },
          {
            id: 3,
            name: `Meteor Gamma`,
            size: Math.floor(meteorSize[0] * 0.5),
            speed: meteorSpeed[0] - 3,
            angle: meteorAngle[0] + 15,
            impactTime: new Date(Date.now() + 240000).toLocaleTimeString(),
            damage: "Moderate"
          }
        ];
        
        setMeteorList(mockMeteors);
        setSimulationActive(false);
      }, 2000);
    }
  };
  
  const resetSimulation = () => {
    setCity("");
    setMeteorSize([50]);
    setMeteorSpeed([20]);
    setMeteorAngle([45]);
    setSimulationActive(false);
    setMeteorList([]);
  };
  
  return (
    <section id="impact-explorer" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Impact Explorer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simulate meteor strikes on an interactive global map and visualize the devastating effects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Control Panel */}
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-8 w-8 text-primary" />
                Simulation Controls
              </CardTitle>
              <CardDescription className="text-lg">
                Customize your meteor impact scenario
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* City Input */}
              <div className="space-y-3">
                <Label htmlFor="city" className="text-base font-semibold">
                  Target Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="city"
                    placeholder="Enter city name (e.g., New York, London, Tokyo)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="pl-10 text-base py-3"
                  />
                </div>
              </div>
              
              {/* Meteor Size */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Meteor Size</Label>
                  <Badge variant="outline" className="text-primary">
                    {meteorSize[0]}m diameter
                  </Badge>
                </div>
                <Slider
                  value={meteorSize}
                  onValueChange={setMeteorSize}
                  max={200}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Small (10m)</span>
                  <span>Massive (200m)</span>
                </div>
              </div>
              
              {/* Meteor Speed */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Impact Speed</Label>
                  <Badge variant="outline" className="text-neon-cyan">
                    {meteorSpeed[0]} km/s
                  </Badge>
                </div>
                <Slider
                  value={meteorSpeed}
                  onValueChange={setMeteorSpeed}
                  max={70}
                  min={11}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Slow (11 km/s)</span>
                  <span>Extreme (70 km/s)</span>
                </div>
              </div>
              
              {/* Impact Angle */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Impact Angle</Label>
                  <Badge variant="outline" className="text-accent">
                    {meteorAngle[0]}°
                  </Badge>
                </div>
                <Slider
                  value={meteorAngle}
                  onValueChange={setMeteorAngle}
                  max={90}
                  min={15}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shallow (15°)</span>
                  <span>Vertical (90°)</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={handleSimulation}
                  disabled={!city.trim() || simulationActive}
                  className="flex-1 cosmic-glow"
                  size="lg"
                >
                  {simulationActive ? (
                    <>
                      <Zap className="mr-2 h-5 w-5 animate-pulse" />
                      Simulating...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-5 w-5" />
                      Run Simulation
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetSimulation}
                  size="lg"
                  className="border-destructive/50 text-destructive hover:bg-destructive/10"
                >
                  <RotateCcw className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Meteor Impact Results */}
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Flame className="h-8 w-8 text-neon-orange" />
                Meteor Impact Results
              </CardTitle>
              <CardDescription className="text-lg">
                {city ? `Meteors detected near ${city}` : "Run simulation to see results"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!meteorList.length && !simulationActive && (
                <div className="text-center py-12 text-muted-foreground">
                  <Target className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Enter a location and run the simulation to see meteor impacts</p>
                </div>
              )}
              
              {simulationActive && (
                <div className="text-center py-12">
                  <Zap className="h-16 w-16 mx-auto mb-4 text-primary animate-pulse" />
                  <p className="text-xl font-semibold gradient-text">Calculating meteor trajectories...</p>
                </div>
              )}
              
              {meteorList.length > 0 && !simulationActive && (
                <div className="space-y-4">
                  {meteorList.map((meteor) => (
                    <Card key={meteor.id} className="bg-background/50 border-primary/20">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-primary">{meteor.name}</h3>
                            <p className="text-sm text-muted-foreground">Impact Time: {meteor.impactTime}</p>
                          </div>
                          <Badge 
                            variant={meteor.damage === "Critical" ? "destructive" : "outline"}
                            className="text-base"
                          >
                            {meteor.damage}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Size</p>
                            <p className="text-lg font-semibold text-primary">{meteor.size}m</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Speed</p>
                            <p className="text-lg font-semibold text-neon-cyan">{meteor.speed} km/s</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Angle</p>
                            <p className="text-lg font-semibold text-accent">{meteor.angle}°</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactExplorer;