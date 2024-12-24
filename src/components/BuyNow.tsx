import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Coins } from "lucide-react";

export const BuyNow = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-agv-primary to-agv-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your AGV tokens now and be part of the AI agent revolution.
          </p>
          <Button
            size="lg"
            className="bg-white text-agv-dark hover:bg-white/90"
            onClick={() => window.open("https://www.geckoterminal.com/solana/pools/HQVrvjnhXZ4u9hbWzL3s46BTyjm7vqQwhHi1fUCEttG3", "_blank")}
          >
            <Coins className="mr-2" />
            Buy AGV Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};