import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const particleCount = isMobile ? 50 : 100;
    const maxDistance = isMobile ? 120 : 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const draw3DParticle = (particle: Particle) => {
      const scale = 1000 / (1000 + particle.z);
      const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
      const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
      const size = 2 * scale;

      const alpha = Math.max(0.3, 1 - particle.z / 1000);

      ctx.beginPath();
      ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(147, 51, 234, ${alpha})`;
      ctx.shadowBlur = 10 * scale;
      ctx.shadowColor = "rgba(147, 51, 234, 0.5)";
      ctx.fill();
    };

    const drawConnection = (p1: Particle, p2: Particle, distance: number) => {
      const scale1 = 1000 / (1000 + p1.z);
      const scale2 = 1000 / (1000 + p2.z);

      const x1 = (p1.x - canvas.width / 2) * scale1 + canvas.width / 2;
      const y1 = (p1.y - canvas.height / 2) * scale1 + canvas.height / 2;
      const x2 = (p2.x - canvas.width / 2) * scale2 + canvas.width / 2;
      const y2 = (p2.y - canvas.height / 2) * scale2 + canvas.height / 2;

      const alpha = (1 - distance / maxDistance) * 0.3;
      const avgZ = (p1.z + p2.z) / 2;
      const zAlpha = Math.max(0.1, 1 - avgZ / 1000);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(147, 51, 234, ${alpha * zAlpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const scrollEffect = scrollRef.current * 0.0005;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx + scrollEffect;
        particle.y += particle.vy;
        particle.z += particle.vz;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          particle.vx -= dx * 0.00001;
          particle.vy -= dy * 0.00001;
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        if (particle.z < 0 || particle.z > 1000) particle.vz *= -1;

        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.vz *= 0.99;
      });

      particlesRef.current.sort((a, b) => b.z - a.z);

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const dz = (particlesRef.current[i].z - particlesRef.current[j].z) * 0.5;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < maxDistance) {
            drawConnection(particlesRef.current[i], particlesRef.current[j], distance);
          }
        }
      }

      particlesRef.current.forEach((particle) => {
        draw3DParticle(particle);
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
