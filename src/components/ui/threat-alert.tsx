import { AlertTriangle, Bird, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThreatAlertProps {
  type: "bird" | "drone" | "weather";
  severity: "low" | "medium" | "high";
  message: string;
  timestamp: string;
  className?: string;
}

export function ThreatAlert({ type, severity, message, timestamp, className }: ThreatAlertProps) {
  const icons = {
    bird: Bird,
    drone: Zap,
    weather: AlertTriangle
  };

  const severityClasses = {
    low: "border-accent bg-accent/10",
    medium: "border-primary bg-primary/10",
    high: "border-destructive bg-destructive/10 animate-pulse-slow"
  };

  const Icon = icons[type];

  return (
    <div className={cn(
      "p-3 rounded-lg border backdrop-blur-sm transition-all duration-300",
      severityClasses[severity],
      className
    )}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">{message}</p>
          <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
        </div>
      </div>
    </div>
  );
}