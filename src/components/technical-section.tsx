import { Code2, Brain, Radar, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TechnicalSection() {
  const technicalFeatures = [
    {
      icon: Brain,
      title: "AI Detection Engine",
      description: "Machine learning algorithms trained on thousands of bird behavior patterns",
      specs: ["YOLOv8 object detection", "Real-time inference <100ms", "99.2% accuracy rate"]
    },
    {
      icon: Radar,
      title: "Multi-Sensor Fusion",
      description: "Combines radar, thermal cameras, and audio sensors for comprehensive coverage",
      specs: ["360° radar coverage", "Thermal imaging array", "Acoustic pattern recognition"]
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Low-latency processing at the airport perimeter for instant response",
      specs: ["NVIDIA Jetson AGX Orin", "5G connectivity", "Local data processing"]
    },
    {
      icon: Code2,
      title: "Autonomous Control",
      description: "Swarm intelligence coordinates multiple guardian drones simultaneously",
      specs: ["Fleet management system", "Collision avoidance", "Predictive deployment"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI and robotics working together to create the safest airspace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technicalFeatures.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Preview */}
        <div className="bg-muted/20 rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            Core Detection Algorithm
          </h3>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
            <code>{`def detect_threat(camera_feed, radar_data):
    """AI-powered threat detection with multi-sensor fusion"""
    
    # Object detection using YOLOv8
    detections = yolo_model.predict(camera_feed)
    birds = filter_birds(detections)
    
    # Trajectory prediction
    for bird in birds:
        trajectory = predict_flight_path(bird, radar_data)
        risk_score = calculate_collision_risk(trajectory)
        
        if risk_score > THREAT_THRESHOLD:
            deploy_guardian_drone(bird.location)
            log_threat_event(bird, risk_score)
    
    return threat_assessment`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}