import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "safe" | "warning" | "threat";
  label: string;
  value: string | number;
  className?: string;
}

export function StatusIndicator({ status, label, value, className }: StatusIndicatorProps) {
  const statusClasses = {
    safe: "bg-gradient-safe text-accent-foreground shadow-glow-safe",
    warning: "bg-gradient-primary text-primary-foreground shadow-glow-primary",
    threat: "bg-gradient-threat text-destructive-foreground shadow-glow-threat"
  };

  return (
    <div 
      className={cn(
        "p-4 rounded-lg border border-border backdrop-blur-sm cursor-pointer",
        "transition-all duration-300 hover:scale-105 hover:shadow-lg",
        statusClasses[status],
        className
      )}
      onClick={() => {
        // Add click feedback
        const element = document.activeElement as HTMLElement;
        element?.blur();
      }}
    >
      <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
        {label}
      </div>
      <div className="text-2xl font-bold font-mono">
        {value}
      </div>
    </div>
  );
}