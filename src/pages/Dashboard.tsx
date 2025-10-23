import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Key, Database, Server, Activity, LogOut, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, session } = useAuth();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const securityMetrics = [
    { label: "Active Sessions", value: "1", icon: Activity, color: "text-primary" },
    { label: "2FA Status", value: "Enabled", icon: CheckCircle, color: "text-matrix" },
    { label: "Encryption Level", value: "AES-256", icon: Lock, color: "text-secondary" },
    { label: "Auth Tokens", value: session ? "Active" : "None", icon: Key, color: "text-accent" },
  ];

  const authFlow = [
    { step: "1", label: "User Authentication", status: "Complete", icon: Shield },
    { step: "2", label: "Session Created", status: "Complete", icon: Key },
    { step: "3", label: "Token Generated", status: "Complete", icon: Lock },
    { step: "4", label: "Secure Session", status: "Active", icon: Activity },
  ];

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-gradient-cyber">Security Dashboard</span>
            </h1>
            <p className="text-muted-foreground">
              Welcome back, <span className="text-primary font-mono">{user?.email}</span>
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-primary text-primary hover:bg-primary/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {securityMetrics.map((metric, idx) => (
            <Card 
              key={idx} 
              className="glass-morphism p-6 hover:border-primary transition-all duration-300 animate-float"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </Card>
          ))}
        </div>

        {/* Authentication Flow */}
        <Card className="glass-morphism p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gradient-neon">Authentication Pipeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {authFlow.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 glow-cyan">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.label}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-matrix/20 text-matrix text-xs font-mono">
                    {item.status}
                  </div>
                </div>
                {idx < authFlow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Backend Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Server Status */}
          <Card className="glass-morphism p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-secondary" />
              <h2 className="text-xl font-bold">Server Infrastructure</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: "Auth Server", status: "Online", load: "23%" },
                { name: "Token Service", status: "Online", load: "15%" },
                { name: "Session Manager", status: "Online", load: "8%" },
              ].map((server, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{server.name}</div>
                    <div className="text-sm text-muted-foreground font-mono">Load: {server.load}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-matrix animate-pulse" />
                    <span className="text-sm text-matrix">{server.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Database Status */}
          <Card className="glass-morphism p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-accent" />
              <h2 className="text-xl font-bold">Database Activity</h2>
            </div>
            <div className="space-y-4">
              <div className="font-mono text-xs space-y-2">
                {[
                  `→ User ID: ${user?.id.substring(0, 8)}...`,
                  `→ Session: ${session?.access_token.substring(0, 20)}...`,
                  "→ Token validation: SUCCESS",
                  "→ Profile data: LOADED",
                  "→ Connection: SECURE",
                ].map((log, idx) => (
                  <div 
                    key={idx}
                    className="text-muted-foreground opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
    </div>
  );
};

export default Dashboard;
