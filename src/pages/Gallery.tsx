import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", alt: "Event crowd" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", alt: "Speaker on stage" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop", alt: "Workshop session" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop", alt: "Hackathon" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop", alt: "Coding session" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop", alt: "Night event" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop", alt: "Award ceremony" },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop", alt: "Group photo" },
  { src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop", alt: "Concert vibes" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop", alt: "Festival lights" },
  { src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop", alt: "Live performance" },
  { src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop", alt: "Crowd energy" },
  { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop", alt: "Stage lights" },
  { src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&h=400&fit=crop", alt: "Music fest" },
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop", alt: "Neon party" },
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", alt: "DJ night" },
  { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop", alt: "Summit stage" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-24 px-6 min-h-screen">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-black text-center glow-cyan text-primary mb-4 tracking-wider">
              GALLERY
            </h1>
            <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-xl mx-auto">
              Moments that define us
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  whileHover={{ scale: 1.03, z: 20 }}
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="font-display text-sm text-primary tracking-wider">{img.alt}</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 group-hover:glow-border-cyan rounded-lg transition-all duration-300" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={images[selected].src.replace("w=600&h=400", "w=1200&h=800")}
            alt={images[selected].alt}
            className="max-w-full max-h-[80vh] rounded-lg glow-border-cyan"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
