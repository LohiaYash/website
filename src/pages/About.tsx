import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useRef, useState } from "react";
import { Mail, Instagram, Linkedin, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase";

const AnimatedCounter = ({
  end,
  label,
  suffix = "",
}: {
  end: number;
  label: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl md:text-5xl font-black text-primary glow-cyan">
        {count}
        {suffix}
      </span>
      <p className="font-body text-muted-foreground mt-2 tracking-wider">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      alert("Something went wrong!");
      console.error(error);
    } else {
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <Layout>
      <section className="py-24 px-6 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          {/* ABOUT HEADING */}
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-black text-center glow-cyan text-primary mb-4 tracking-wider">
              ABOUT US
            </h1>
          </ScrollReveal>

          {/* ABOUT CONTENT */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-lg p-8 md:p-12 mb-16 glow-border-purple">
              <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
                Under25 MAIT is the driving force behind the{" "}
                <span className="text-primary font-semibold">
                  Under25 Summit
                </span>{" "}
                at Maharaja Agrasen Institute of Technology — an edutainment
                fest that blends education, entertainment, and unforgettable
                experiences for the under-25 generation.
              </p>

              <p className="font-body text-lg text-foreground/90 leading-relaxed">
                We're not a typical technical society. We curate experiences —
                from inspiring speaker sessions and live performances to concert
                screenings and exclusive giveaways. Our mission is to create
                spaces where young minds are inspired, entertained, and
                empowered to dream bigger.
              </p>
            </div>
          </ScrollReveal>

          {/* COUNTERS */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <AnimatedCounter end={400} suffix="+" label="Members" />
              <AnimatedCounter end={1} label="Summit Held" />
              <AnimatedCounter end={750} suffix="+" label="Attendees" />
              <AnimatedCounter end={2} label="Year Active" />
            </div>
          </ScrollReveal>

          {/* MISSION */}
          <ScrollReveal delay={0.4}>
            <div className="glass rounded-lg p-8 text-center glow-border-cyan mb-16">
              <h2 className="font-display text-2xl font-bold text-secondary glow-purple mb-4 tracking-wider">
                OUR MISSION
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                To create the ultimate edutainment experience for the under-25
                generation — merging learning with entertainment, turning events
                into movements, and giving every young dreamer a stage.
              </p>
            </div>
          </ScrollReveal>

          {/* CONTACT SECTION */}
          <ScrollReveal delay={0.5}>
            <div className="glass rounded-lg p-8 md:p-12 glow-border-cyan">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary glow-cyan mb-8 tracking-wider text-center">
                CONTACT US
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                {/* CONTACT INFO */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href="mailto:under25mait@gmail.com"
                      className="font-body text-foreground/90 hover:text-primary transition-colors"
                    >
                      under25mait@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Instagram className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href="https://instagram.com/under25mait"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-foreground/90 hover:text-primary transition-colors"
                    >
                      under25mait
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Linkedin className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href="https://linkedin.com/company/under25mait"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-foreground/90 hover:text-primary transition-colors"
                    >
                      Under25 MAIT
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <a
                      href="https://maps.app.goo.gl/m2o8Qn3LRNBHkwbGA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-foreground/90 hover:text-primary transition-colors"
                    >
                      Maharaja Agrasen Institute of Technology, Sector 22,
                      Rohini, Delhi
                    </a>
                  </div>
                </div>

                {/* CONTACT FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground font-body focus:outline-none focus:border-primary transition-all"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground font-body focus:outline-none focus:border-primary transition-all"
                    required
                  />

                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground font-body focus:outline-none focus:border-primary transition-all resize-none"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-display text-sm tracking-widest uppercase px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;