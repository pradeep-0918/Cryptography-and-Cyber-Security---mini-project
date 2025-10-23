import { Shield, Lock, Key, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Floating icons */}
        <div className="absolute -top-20 left-10 animate-float">
          <Shield className="w-16 h-16 text-primary glow-cyan" />
        </div>
        <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Lock className="w-12 h-12 text-secondary glow-purple" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Key className="w-14 h-14 text-accent glow-pink" />
        </div>
        <div className="absolute bottom-40 right-32 animate-float" style={{ animationDelay: '1.5s' }}>
          <Fingerprint className="w-12 h-12 text-matrix" />
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4">
            <span className="text-primary font-mono text-sm">QUANTUM SECURITY ENABLED</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-gradient-cyber">CryptoAuth</span>
            <br />
            <span className="text-foreground">Next-Gen Security</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Military-grade encryption meets seamless authentication. 
            Secure your digital identity with quantum-resistant cryptography and zero-trust architecture.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
              onClick={() => navigate('/login')}
            >
              Launch Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10"
              onClick={() => navigate('/register')}
            >
              Create Account
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Shield, label: "256-bit Encryption" },
              { icon: Lock, label: "Zero-Trust Model" },
              { icon: Key, label: "JWT Tokens" },
              { icon: Fingerprint, label: "Biometric Auth" }
            ].map((item, idx) => (
              <div key={idx} className="glass-morphism p-6 rounded-lg hover:border-primary transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
    </div>
  );
};

export default Hero;
