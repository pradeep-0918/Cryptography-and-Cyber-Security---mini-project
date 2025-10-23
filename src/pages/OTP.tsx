import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Shield, ArrowLeft, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    if (otp.length === 6) {
      setIsVerifying(true);
      setTimeout(() => {
        toast.success("OTP verified successfully!");
        navigate("/dashboard");
      }, 1500);
    } else {
      toast.error("Please enter the complete OTP");
    }
  };

  const handleResend = () => {
    toast.success("New OTP sent to your email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-matrix/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/login')}
          className="mb-8 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>

        <Card className="glass-morphism p-8 border-border/50">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4 glow-pink">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-gradient-cyber">Verify OTP</span>
            </h1>
            <p className="text-muted-foreground">
              Enter the 6-digit code sent to your device
            </p>
          </div>

          <div className="space-y-6">
            {/* OTP Input */}
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="w-12 h-14 text-xl border-border bg-input" />
                  <InputOTPSlot index={1} className="w-12 h-14 text-xl border-border bg-input" />
                  <InputOTPSlot index={2} className="w-12 h-14 text-xl border-border bg-input" />
                  <InputOTPSlot index={3} className="w-12 h-14 text-xl border-border bg-input" />
                  <InputOTPSlot index={4} className="w-12 h-14 text-xl border-border bg-input" />
                  <InputOTPSlot index={5} className="w-12 h-14 text-xl border-border bg-input" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Encryption visualization */}
            <div className="glass-morphism rounded-lg p-4">
              <div className="font-mono text-xs space-y-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>Encrypting OTP with RSA-2048...</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>Generating HMAC signature...</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-matrix animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>Secure channel established ✓</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleVerify}
              disabled={isVerifying}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow-pink"
              size="lg"
            >
              {isVerifying ? "Verifying..." : "Verify Code"}
            </Button>

            <div className="text-center">
              <button 
                onClick={handleResend}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Resend OTP
              </button>
            </div>

            <div className="pt-6 border-t border-border/50">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Time-based OTP • Expires in 5:00</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OTP;
