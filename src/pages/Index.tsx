import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Community } from "@/components/Community";
import { BuyNow } from "@/components/BuyNow";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Community />
      <BuyNow />
    </main>
  );
};

export default Index;