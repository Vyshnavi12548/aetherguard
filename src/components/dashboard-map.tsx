import { useState, useEffect } from "react";
import { Plane, Circle, Zap } from "lucide-react";

interface MapEntity {
  id: string;
  type: "drone" | "bird" | "aircraft";
  x: number;
  y: number;
  status: "active" | "warning" | "threat";
}

export function DashboardMap() {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);
  const [entities, setEntities] = useState<MapEntity[]>([
    { id: "d1", type: "drone", x: 20, y: 30, status: "active" },
    { id: "d2", type: "drone", x: 80, y: 60, status: "active" },
    { id: "b1", type: "bird", x: 45, y: 25, status: "warning" },
    { id: "b2", type: "bird", x: 65, y: 40, status: "threat" },
    { id: "a1", type: "aircraft", x: 50, y: 70, status: "active" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntities(prev => prev.map(entity => ({
        ...entity,
        x: Math.max(5, Math.min(95, entity.x + (Math.random() - 0.5) * 4)),
        y: Math.max(5, Math.min(95, entity.y + (Math.random() - 0.5) * 4))
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getEntityIcon = (type: string) => {
    switch (type) {
      case "drone": return Zap;
      case "aircraft": return Plane;
      default: return Circle;
    }
  };

  const getEntityColor = (type: string, status: string) => {
    if (status === "threat") return "text-destructive";
    if (status === "warning") return "text-primary";
    switch (type) {
      case "drone": return "text-secondary";
      case "aircraft": return "text-foreground";
      default: return "text-accent";
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-cyber rounded-lg border border-border overflow-hidden">
      {/* Runway Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Runway */}
      <div className="absolute top-1/2 left-1/4 right-1/4 h-2 bg-primary/30 transform -translate-y-1/2 rounded-full" />
      
      {/* Control Zone Circles */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-primary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-secondary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

      {/* Entities */}
      {entities.map((entity) => {
        const Icon = getEntityIcon(entity.type);
        const isSelected = selectedEntity === entity.id;
        return (
          <div
            key={entity.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-2000 ease-in-out cursor-pointer ${
              isSelected ? 'scale-150 z-10' : 'hover:scale-125'
            }`}
            style={{ left: `${entity.x}%`, top: `${entity.y}%` }}
            onClick={() => setSelectedEntity(selectedEntity === entity.id ? null : entity.id)}
          >
            <Icon 
              className={`w-4 h-4 ${getEntityColor(entity.type, entity.status)} ${
                entity.status === "threat" ? "animate-pulse" : ""
              } ${isSelected ? "shadow-glow-primary" : ""}`} 
            />
            {entity.status === "active" && entity.type === "drone" && (
              <div className="absolute inset-0 w-8 h-8 border border-secondary/50 rounded-full animate-ping" />
            )}
            {isSelected && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-lg p-2 border border-border whitespace-nowrap text-xs">
                {entity.type.charAt(0).toUpperCase() + entity.type.slice(1)} {entity.id.toUpperCase()}
                <br />
                Status: {entity.status}
              </div>
            )}
          </div>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border">
        <div className="text-xs font-medium mb-2">LEGEND</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-secondary" />
            <span>Guardian Drones</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-3 h-3 text-accent" />
            <span>Bird Flocks</span>
          </div>
          <div className="flex items-center gap-2">
            <Plane className="w-3 h-3 text-foreground" />
            <span>Aircraft</span>
          </div>
        </div>
      </div>
    </div>
  );
}