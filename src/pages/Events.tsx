import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { CheckCircle, Clock, Gift } from "lucide-react";

const events = [
  {
    title: "Under25 Summit – Edition 1",
    date: "March 28, 2025",
    desc: "Our flagship edutainment fest featuring inspiring talks, live performances, and unforgettable experiences for the under-25 generation.",
    tag: "Summit",
    status: "past",
  },
  {
    title: "Free Zomaland Gig Tickets",
    date: "2025",
    desc: "We provided free gig tickets for Zomaland to our community members — because great experiences should be accessible to all!",
    tag: "Giveaway",
    status: "past",
  },
  {
    title: "Coldplay Concert Screening",
    date: "2025",
    desc: "An epic live screening of the Coldplay concert for our community — bringing stadium energy right to campus.",
    tag: "Screening",
    status: "past",
  },
  {
    title: "Under25 Summit – Edition 2",
    date: "Coming Soon",
    desc: "The next edition of our flagship edutainment fest is in the works. Bigger stage, bolder ideas, crazier energy. Stay tuned!",
    tag: "Upcoming",
    status: "upcoming",
  },
];

const statusIcon = {
  past: <CheckCircle className="w-4 h-4 text-primary" />,
  upcoming: <Clock className="w-4 h-4 text-secondary" />,
};

const Events = () => {
  return (
    <Layout>
      <section className="py-24 px-6 min-h-screen">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-black text-center glow-cyan text-primary mb-4 tracking-wider">
              EVENTS
            </h1>
            <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-xl mx-auto">
              Where ideas ignite and legends are made
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/0" />

            {events.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10 ${event.status === "upcoming" ? "bg-secondary glow-border-purple" : "bg-primary glow-border-cyan"}`} />

                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}>
                    <TiltCard className="p-6" glowColor={event.status === "upcoming" ? "purple" : "cyan"}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block font-display text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 text-primary">
                          {event.tag}
                        </span>
                        {statusIcon[event.status as keyof typeof statusIcon]}
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">{event.title}</h3>
                      <p className="font-body text-xs text-primary/70 mb-2">{event.date}</p>
                      <p className="font-body text-muted-foreground text-sm">{event.desc}</p>
                    </TiltCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
