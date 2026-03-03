import { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const pointsRef = useRef<{ x: number; y: number; age: number; vx: number; vy: number }[]>([]);
  const rafRef = useRef<number>(0);
  const lastMouseRef = useRef({ x: -100, y: -100 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mouse = mouseRef.current;
    const lastMouse = lastMouseRef.current;
    const dx = mouse.x - lastMouse.x;
    const dy = mouse.y - lastMouse.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    // Add trail points based on movement speed
    if (speed > 1) {
      const count = Math.min(Math.floor(speed / 3), 5);
      for (let i = 0; i < count; i++) {
        const t = i / count;
        pointsRef.current.push({
          x: lastMouse.x + dx * t + (Math.random() - 0.5) * speed * 0.3,
          y: lastMouse.y + dy * t + (Math.random() - 0.5) * speed * 0.3,
          age: 0,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }
    }

    lastMouseRef.current = { ...mouse };

    // Update and draw fluid points
    const maxAge = 40;
    pointsRef.current = pointsRef.current.filter((p) => p.age < maxAge);

    for (const point of pointsRef.current) {
      point.age++;
      point.x += point.vx * 0.5;
      point.y += point.vy * 0.5;
      point.vx *= 0.96;
      point.vy *= 0.96;

      const life = 1 - point.age / maxAge;
      const radius = life * 12 + 2;
      const alpha = life * 0.4;

      const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
      gradient.addColorStop(0, `hsla(185, 100%, 50%, ${alpha})`);
      gradient.addColorStop(0.5, `hsla(220, 80%, 60%, ${alpha * 0.5})`);
      gradient.addColorStop(1, `hsla(270, 80%, 60%, 0)`);

      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Draw core cursor dot
    const coreGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 8);
    coreGradient.addColorStop(0, "hsla(185, 100%, 60%, 0.9)");
    coreGradient.addColorStop(0.5, "hsla(185, 100%, 50%, 0.4)");
    coreGradient.addColorStop(1, "hsla(185, 100%, 50%, 0)");
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = coreGradient;
    ctx.fill();

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const leave = () => {
      mouseRef.current = { x: -100, y: -100 };
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CustomCursor;
