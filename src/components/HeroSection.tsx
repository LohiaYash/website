import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import logoWhite from "@/assets/Untitled design-6.png";

/* ---------------- Animated Center Logo ---------------- */

const CenterLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, logoWhite);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = Math.min(state.clock.elapsedTime, 1.5);
    const progress = t / 1.5;

    // Smooth ease-out
    const easeOut = 1 - Math.pow(1 - progress, 3);

    // Softer scale (less aggressive pop)
    meshRef.current.scale.setScalar(1.2 + easeOut * 1.5);

    // Ultra soft opacity (0.01 → 0.05)
    (meshRef.current.material as THREE.Material).opacity =
      0.01 + easeOut * 0.04;
  });

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]} scale={0}>
      <planeGeometry args={[2.5, 2.5]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.01}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

/* ---------------- Scene ---------------- */

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <CenterLogo />
    </>
  );
};

/* ---------------- Hero Section ---------------- */

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider glow-cyan text-primary mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          UNDER25 MAIT
        </motion.h1>

        <motion.p
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building Youth Culture at Maharaja Agrasen Institute of Technology
          <br/>Your Safe Space of Inclusivity 
        </motion.p>

        <motion.a
          href="#explore"
          className="inline-block font-display text-sm tracking-widest uppercase px-8 py-4 rounded-lg border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Explore
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;