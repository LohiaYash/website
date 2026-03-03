import { useEffect, useRef, ReactNode } from "react";

interface Parallax3DProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const Parallax3D = ({ children, speed = 0.3, className = "" }: Parallax3DProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const offset = (center - viewCenter) * speed;
      const rotateX = offset * 0.02;
      const scale = 1 - Math.abs(offset) * 0.0003;
      ref.current.style.transform = `perspective(1200px) translateY(${offset * 0.3}px) rotateX(${rotateX}deg) scale(${Math.max(scale, 0.95)})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`transition-transform duration-100 ${className}`} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
};

export default Parallax3D;
