import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Twitter, Send } from "lucide-react";

export const Community = () => {
  return (
    <section className="py-20 bg-agv-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join Our Community
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90"
              onClick={() => window.open("https://x.com/AGVcoin", "_blank")}
            >
              <Twitter className="mr-2" />
              Follow on Twitter
            </Button>
            <Button
              size="lg"
              className="bg-[#0088cc] hover:bg-[#0088cc]/90"
              onClick={() => window.open("https://t.me/agentversecoin", "_blank")}
            >
              <Send className="mr-2" />
              Join Telegram
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};