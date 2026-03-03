import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroVideo = ({ onComplete }: { onComplete: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay blocked, skip intro
      onComplete();
    });
  }, [onComplete]);

  const handleEnded = () => {
    setEnded(true);
    setTimeout(onComplete, 800); // wait for fade-out
  };

  return (
    <AnimatePresence>
      {!ended && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            ref={videoRef}
            src="/scroll-video.mp4"
            muted
            playsInline
            onEnded={handleEnded}
            className="h-full w-full object-cover"
          />
          <button
            onClick={handleEnded}
            className="absolute bottom-8 right-8 font-display text-xs tracking-widest uppercase px-6 py-3 rounded-lg border border-primary/40 text-primary/70 hover:bg-primary/10 transition-colors"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroVideo;
