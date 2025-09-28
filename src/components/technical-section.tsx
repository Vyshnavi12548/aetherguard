import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Radar, Cpu, Shield, Play, Pause } from "lucide-react";

export function TechnicalSection() {
  const [isSystemActive, setIsSystemActive] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const technicalFeatures = [
    {
      icon: Brain,
      title: "AI Detection Engine",
      description: "Machine learning algorithms trained on thousands of bird behavior patterns",
      status: "Active",
      accuracy: "99.2%",
      responseTime: "<100ms"
    },
    {
      icon: Radar,
      title: "Multi-Sensor Fusion",
      description: "Combines radar, thermal cameras, and audio sensors for comprehensive coverage",
      status: "Operational", 
      coverage: "360°",
      range: "5km"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Low-latency processing at the airport perimeter for instant response",
      status: "Online",
      processing: "Real-time",
      latency: "5ms"
    },
    {
      icon: Shield,
      title: "Guardian Fleet",
      description: "Autonomous drone swarm coordinates threat response and wildlife deterrence",
      status: "Ready",
      fleet: "8 Drones",
      coverage: "100%"
    }
  ];

  return (
    <section id="technical" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">System Control Center</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor and control all AetherGuard subsystems in real-time
          </p>
        </div>

        {/* System Status Control */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isSystemActive ? 'bg-accent animate-pulse' : 'bg-muted'}`} />
              <span className="font-medium">System Status:</span>
              <Badge variant={isSystemActive ? "default" : "secondary"}>
                {isSystemActive ? "OPERATIONAL" : "STANDBY"}
              </Badge>
            </div>
            <Button
              variant={isSystemActive ? "destructive" : "default"}
              size="sm"
              onClick={() => setIsSystemActive(!isSystemActive)}
              className="flex items-center gap-2"
            >
              {isSystemActive ? (
                <>
                  <Pause className="w-4 h-4" />
                  Emergency Stop
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Activate System
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Interactive Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technicalFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300 cursor-pointer ${
                selectedFeature === index ? 'ring-2 ring-primary shadow-glow-primary' : ''
              }`}
              onClick={() => setSelectedFeature(index)}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className={`w-6 h-6 ${isSystemActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="text-sm">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3">{feature.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Status:</span>
                    <Badge variant={isSystemActive ? "default" : "secondary"} className="text-xs">
                      {isSystemActive ? feature.status : "Offline"}
                    </Badge>
                  </div>
                  {feature.accuracy && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Accuracy:</span>
                      <span className="text-xs font-mono">{feature.accuracy}</span>
                    </div>
                  )}
                  {feature.coverage && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Coverage:</span>
                      <span className="text-xs font-mono">{feature.coverage}</span>
                    </div>
                  )}
                  {feature.fleet && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Fleet:</span>
                      <span className="text-xs font-mono">{feature.fleet}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Feature Details */}
        <Card className="bg-muted/20 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {(() => {
                const Icon = technicalFeatures[selectedFeature].icon;
                return <Icon className="w-6 h-6 text-primary" />;
              })()}
              {technicalFeatures[selectedFeature].title} - Detailed View
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">System Health</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>CPU Usage:</span>
                    <span className="font-mono">{Math.floor(Math.random() * 30 + 15)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Memory:</span>
                    <span className="font-mono">{Math.floor(Math.random() * 40 + 30)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network:</span>
                    <span className="font-mono text-accent">Optimal</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Performance Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Uptime:</span>
                    <span className="font-mono">23d 14h 32m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Threats Detected:</span>
                    <span className="font-mono">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-mono text-accent">99.8%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Run Diagnostics
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    View Logs
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Export Data
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}