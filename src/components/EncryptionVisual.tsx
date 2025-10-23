import { Database, Server, Shield, Lock } from "lucide-react";

const EncryptionVisual = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient-neon">Encryption Pipeline</span>
        </h2>

        <div className="relative">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(180 100% 50%)" />
                <stop offset="50%" stopColor="hsl(280 100% 50%)" />
                <stop offset="100%" stopColor="hsl(320 100% 50%)" />
              </linearGradient>
            </defs>
            <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
            <line x1="60%" y1="50%" x2="80%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </svg>

          {/* Pipeline stages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: Shield, label: "User Input", desc: "Credentials encrypted at source" },
              { icon: Lock, label: "AES-256", desc: "Military-grade encryption" },
              { icon: Server, label: "Secure Transit", desc: "TLS 1.3 protocol" },
              { icon: Database, label: "Storage", desc: "Hashed & salted" }
            ].map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center text-center animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                <div className="w-24 h-24 glass-morphism rounded-2xl flex items-center justify-center mb-4 group hover:border-primary transition-all duration-300 glow-cyan">
                  <stage.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-lg mb-2">{stage.label}</h3>
                <p className="text-sm text-muted-foreground font-mono">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Data flow animation */}
          <div className="mt-16 glass-morphism rounded-lg p-8">
            <div className="font-mono text-xs md:text-sm space-y-2 overflow-hidden">
              {[
                "→ Initializing secure handshake...",
                "→ Generating ephemeral keys...",
                "→ Encrypting payload with AES-256-GCM...",
                "→ Signing with HMAC-SHA256...",
                "→ Transmission complete. Status: ✓ SECURED"
              ].map((line, idx) => (
                <div 
                  key={idx} 
                  className="text-primary opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncryptionVisual;
