import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { MapPin, Target, Zap, AlertTriangle, Play, RotateCcw } from "lucide-react";

const ImpactExplorer = () => {
  const [city, setCity] = useState("");
  const [meteorSize, setMeteorSize] = useState([50]);
  const [meteorSpeed, setMeteorSpeed] = useState([20]);
  const [meteorAngle, setMeteorAngle] = useState([45]);
  const [simulationActive, setSimulationActive] = useState(false);
  
  const handleSimulation = () => {
    if (city.trim()) {
      setSimulationActive(true);
      // Mock simulation - in real app this would trigger map visualization
      setTimeout(() => setSimulationActive(false), 3000);
    }
  };
  
  const resetSimulation = () => {
    setCity("");
    setMeteorSize([50]);
    setMeteorSpeed([20]);
    setMeteorAngle([45]);
    setSimulationActive(false);
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
          
          {/* Map Visualization */}
          <Card className="cosmic-border bg-card/90 backdrop-blur-sm h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <MapPin className="h-8 w-8 text-neon-green" />
                Impact Visualization
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <div className="relative w-full h-full bg-gradient-space rounded-lg overflow-hidden flex items-center justify-center">
                {simulationActive && (
                  <div className="absolute inset-0 starfield opacity-40"></div>
                )}
                
                {!city.trim() ? (
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Enter a city name to begin simulation</p>
                  </div>
                ) : simulationActive ? (
                  <div className="text-center animate-pulse">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-cosmic mx-auto mb-6 animate-pulse-neon"></div>
                      <AlertTriangle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-background" />
                    </div>
                    <p className="text-2xl font-bold gradient-text mb-2">Impact Detected!</p>
                    <p className="text-lg text-foreground/80">
                      Simulating {meteorSize[0]}m meteor at {meteorSpeed[0]} km/s
                    </p>
                    <p className="text-muted-foreground">Target: {city}</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <Target className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-xl font-semibold mb-2">Ready to Simulate</p>
                    <p className="text-muted-foreground">Target: {city}</p>
                    <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-primary">{meteorSize[0]}m</div>
                        <div className="text-muted-foreground">Size</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-neon-cyan">{meteorSpeed[0]} km/s</div>
                        <div className="text-muted-foreground">Speed</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-accent">{meteorAngle[0]}°</div>
                        <div className="text-muted-foreground">Angle</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactExplorer;