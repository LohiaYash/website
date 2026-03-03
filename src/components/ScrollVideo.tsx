import { useEffect, useRef } from "react";

const ScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Wait for video metadata to load
    const onLoaded = () => {
      const handleScroll = () => {
        const rect = container.getBoundingClientRect();
        const scrollHeight = container.scrollHeight - window.innerHeight;
        const scrollTop = -rect.top;
        const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));
        video.currentTime = progress * video.duration;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    };

    if (video.readyState >= 1) {
      const cleanup = onLoaded();
      return cleanup;
    }

    let cleanup: (() => void) | undefined;
    const handler = () => {
      cleanup = onLoaded();
    };
    video.addEventListener("loadedmetadata", handler);
    return () => {
      video.removeEventListener("loadedmetadata", handler);
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/scroll-video.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />
      </div>
    </div>
  );
};

export default ScrollVideo;
