import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Get AGV Tokens",
    description: "Purchase AGV tokens through supported exchanges",
  },
  {
    number: "02",
    title: "Connect Wallet",
    description: "Link your wallet to the Agent Universe platform",
  },
  {
    number: "03",
    title: "Access AI Agents",
    description: "Use AGV to interact with AI agents of your choice",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-agv-dark to-agv-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-bold text-agv-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};