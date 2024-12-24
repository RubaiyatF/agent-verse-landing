import { Bot, Coins, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Bot className="w-10 h-10" />,
    title: "AI Agent Integration",
    description: "Seamlessly connect with AI agents across the ecosystem",
  },
  {
    icon: <Coins className="w-10 h-10" />,
    title: "Universal Currency",
    description: "One token for all AI agent interactions and services",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Secure Transactions",
    description: "Built on blockchain technology for maximum security",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Instant Processing",
    description: "Fast and efficient transaction processing",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-agv-dark">
          Why Choose AGV?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-agv-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-agv-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};