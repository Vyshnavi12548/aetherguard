import { StatusIndicator } from "@/components/ui/status-indicator";
import { ThreatAlert } from "@/components/ui/threat-alert";
import { DashboardMap } from "@/components/dashboard-map";
import { useState, useEffect } from "react";

export function DashboardSection() {
  const [stats, setStats] = useState({
    birdCount: 12,
    droneStatus: "All Active",
    riskLevel: "LOW",
    threatCount: 2
  });

  const [alerts] = useState([
    {
      id: "1",
      type: "bird" as const,
      severity: "high" as const,
      message: "Large flock detected approaching runway 24L",
      timestamp: "14:32:18"
    },
    {
      id: "2", 
      type: "drone" as const,
      severity: "medium" as const,
      message: "Guardian-02 deployed to intercept",
      timestamp: "14:32:22"
    },
    {
      id: "3",
      type: "bird" as const,
      severity: "low" as const,
      message: "Flock successfully diverted",
      timestamp: "14:33:45"
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        birdCount: Math.floor(Math.random() * 20) + 5,
        threatCount: Math.floor(Math.random() * 4),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-cyber">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Live Control Dashboard</h2>
          <p className="text-xl text-muted-foreground">Real-time monitoring and threat assessment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Status Indicators */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            
            <StatusIndicator
              status="safe"
              label="Bird Count"
              value={stats.birdCount}
            />
            
            <StatusIndicator
              status="safe"
              label="Guardian Drones"
              value={stats.droneStatus}
            />
            
            <StatusIndicator
              status={stats.threatCount > 2 ? "warning" : "safe"}
              label="Risk Level"
              value={stats.riskLevel}
            />

            <StatusIndicator
              status={stats.threatCount > 0 ? "threat" : "safe"}
              label="Active Threats"
              value={stats.threatCount}
            />
          </div>

          {/* Map View */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Airspace Overview</h3>
            <div className="h-96">
              <DashboardMap />
            </div>
          </div>

          {/* Threat Alerts */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {alerts.map((alert) => (
                <ThreatAlert
                  key={alert.id}
                  type={alert.type}
                  severity={alert.severity}
                  message={alert.message}
                  timestamp={alert.timestamp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}