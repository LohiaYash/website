import { useState, useCallback } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import Parallax3D from "@/components/Parallax3D";
import IntroVideo from "@/components/IntroVideo";
import { Calendar, Users, Zap, Trophy } from "lucide-react";

const highlights = [
  { icon: Calendar, title: "Meetups", desc: "Curated gatherings that spark real connections" },
  { icon: Users, title: "400+ Members", desc: "A thriving community of passionate creators" },
  { icon: Zap, title: "Gigs & Opportunities", desc: "Live performances, collabs & career breaks" },
  { icon: Trophy, title: "Under25 Experiences", desc: "Unforgettable edutainment moments" },
];

const Index = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (sessionStorage.getItem("intro_shown")) return false;
    sessionStorage.setItem("intro_shown", "1");
    return true;
  });
  const handleIntroComplete = useCallback(() => setShowIntro(false), []);

  return (
    <>
      {showIntro && <IntroVideo onComplete={handleIntroComplete} />}
      <Layout>
        <HeroSection />

      <Parallax3D speed={0.2}>
        <section id="explore" className="py-24 px-6">
          <div className="container mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center glow-purple text-secondary mb-16 tracking-wider">
                WHY UNDER25 MAIT?
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.15}>
                  <TiltCard className="p-8 text-center h-full" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                    <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.desc}</p>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </Parallax3D>
      </Layout>
    </>
  );
};

export default Index;
