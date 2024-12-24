import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/lovable-uploads/40a57087-c8e1-4cbd-8f78-a116cd546071.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Agent Universe Coin
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              The primary currency for the AI Agent ecosystem, enabling seamless transactions between providers and users.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-agv-primary text-white hover:bg-agv-primary/90"
              onClick={() => window.open("https://www.geckoterminal.com/solana/pools/HQVrvjnhXZ4u9hbWzL3s46BTyjm7vqQwhHi1fUCEttG3", "_blank")}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              onClick={() => window.open("https://medium.com/@rubaiyatfarhan/agent-universe-coin-agv-108e738484aa", "_blank")}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};