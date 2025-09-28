import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, AlertTriangle } from "lucide-react";

interface SimulationControlsProps {
  onSimulateAlert: () => void;
}

export function SimulationControls({ onSimulateAlert }: SimulationControlsProps) {
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulation = () => {
    setIsSimulating(true);
    onSimulateAlert();
    setTimeout(() => setIsSimulating(false), 3000);
  };

  return (
    <div className="flex flex-wrap gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
      <Button
        variant="outline"
        size="sm"
        onClick={handleSimulation}
        disabled={isSimulating}
        className="flex items-center gap-2"
      >
        <AlertTriangle className="w-4 h-4" />
        {isSimulating ? "Simulating..." : "Simulate Bird Alert"}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Play className="w-4 h-4" />
        Start Demo
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Reset View
      </Button>
    </div>
  );
}