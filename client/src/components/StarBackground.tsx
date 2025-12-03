import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const starCount = isMobile ? 400 : 800;
    const speed = 0.5;

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let focalLength = canvas.width;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      focalLength = canvas.width;
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width - centerX,
          y: Math.random() * canvas.height - centerY,
          z: Math.random() * canvas.width,
          px: 0,
          py: 0,
        });
      }
    };

    let mouseMoveTicking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseMoveTicking) {
        window.requestAnimationFrame(() => {
          targetMouseRef.current = {
            x: (e.clientX - centerX) * 0.01,
            y: (e.clientY - centerY) * 0.01,
          };
          mouseMoveTicking = false;
        });
        mouseMoveTicking = true;
      }
    };

    const animate = () => {
      // Smooth mouse movement
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;

      // Theme-aware background gradient
      if (isDark) {
        // Dark mode: Deep space
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          canvas.width
        );
        gradient.addColorStop(0, "rgba(15, 10, 40, 1)");
        gradient.addColorStop(0.4, "rgba(10, 5, 30, 1)");
        gradient.addColorStop(1, "rgba(0, 0, 10, 1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Dark mode nebula clouds
        ctx.save();
        ctx.globalAlpha = 0.05;
        const nebula1 = ctx.createRadialGradient(
          centerX + 200,
          centerY - 100,
          0,
          centerX + 200,
          centerY - 100,
          400
        );
        nebula1.addColorStop(0, "rgba(147, 51, 234, 0.3)");
        nebula1.addColorStop(1, "transparent");
        ctx.fillStyle = nebula1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const nebula2 = ctx.createRadialGradient(
          centerX - 300,
          centerY + 200,
          0,
          centerX - 300,
          centerY + 200,
          500
        );
        nebula2.addColorStop(0, "rgba(59, 130, 246, 0.2)");
        nebula2.addColorStop(1, "transparent");
        ctx.fillStyle = nebula2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      } else {
        // Light mode: Bright sky with subtle clouds
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          canvas.width
        );
        gradient.addColorStop(0, "rgba(240, 245, 255, 1)");
        gradient.addColorStop(0.5, "rgba(225, 235, 250, 1)");
        gradient.addColorStop(1, "rgba(200, 220, 245, 1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Light mode subtle clouds
        ctx.save();
        ctx.globalAlpha = 0.03;
        const cloud1 = ctx.createRadialGradient(
          centerX + 200,
          centerY - 100,
          0,
          centerX + 200,
          centerY - 100,
          400
        );
        cloud1.addColorStop(0, "rgba(147, 51, 234, 0.15)");
        cloud1.addColorStop(1, "transparent");
        ctx.fillStyle = cloud1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cloud2 = ctx.createRadialGradient(
          centerX - 300,
          centerY + 200,
          0,
          centerX - 300,
          centerY + 200,
          500
        );
        cloud2.addColorStop(0, "rgba(59, 130, 246, 0.1)");
        cloud2.addColorStop(1, "transparent");
        ctx.fillStyle = cloud2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      // Draw and animate stars
      starsRef.current.forEach((star) => {
        // Move star towards viewer
        star.z -= speed;

        // Reset star if it goes past the viewer
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
          star.z = canvas.width;
          star.px = 0;
          star.py = 0;
        }

        // Apply mouse movement for parallax
        const k = focalLength / star.z;
        const px = (star.x + mouseRef.current.x * star.z * 0.001) * k + centerX;
        const py = (star.y + mouseRef.current.y * star.z * 0.001) * k + centerY;

        // Only draw if star is on screen
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          // Calculate star size based on depth
          const size = (1 - star.z / canvas.width) * 2;
          const opacity = (1 - star.z / canvas.width) * 0.9;

          if (isDark) {
            // Dark mode: Bright white stars
            // Draw star trail
            if (star.px !== 0) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
              ctx.lineWidth = size;
              ctx.moveTo(star.px, star.py);
              ctx.lineTo(px, py);
              ctx.stroke();
            }

            // Draw star
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.shadowBlur = size * 3;
            ctx.shadowColor = `rgba(200, 200, 255, ${opacity})`;
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();

            // Add occasional colored stars
            if (Math.random() > 0.97) {
              ctx.shadowBlur = size * 5;
              if (Math.random() > 0.5) {
                ctx.shadowColor = "rgba(147, 51, 234, 0.8)";
                ctx.fillStyle = `rgba(147, 51, 234, ${opacity})`;
              } else {
                ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
                ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
              }
              ctx.arc(px, py, size * 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          } else {
            // Light mode: Darker particles with subtle trails
            // Draw particle trail
            if (star.px !== 0) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 100, 150, ${opacity * 0.15})`;
              ctx.lineWidth = size * 0.8;
              ctx.moveTo(star.px, star.py);
              ctx.lineTo(px, py);
              ctx.stroke();
            }

            // Draw particle
            ctx.beginPath();
            ctx.fillStyle = `rgba(80, 80, 120, ${opacity * 0.6})`;
            ctx.shadowBlur = size * 2;
            ctx.shadowColor = `rgba(100, 100, 150, ${opacity * 0.4})`;
            ctx.arc(px, py, size * 0.8, 0, Math.PI * 2);
            ctx.fill();

            // Add occasional colored particles
            if (Math.random() > 0.97) {
              ctx.shadowBlur = size * 3;
              if (Math.random() > 0.5) {
                ctx.shadowColor = "rgba(147, 51, 234, 0.4)";
                ctx.fillStyle = `rgba(147, 51, 234, ${opacity * 0.5})`;
              } else {
                ctx.shadowColor = "rgba(59, 130, 246, 0.4)";
                ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
              }
              ctx.arc(px, py, size * 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Store previous position for trail
        star.px = px;
        star.py = py;
      });

      // Theme-aware vignette effect
      const vignette = ctx.createRadialGradient(
        centerX,
        centerY,
        canvas.width * 0.3,
        centerX,
        centerY,
        canvas.width * 0.8
      );
      vignette.addColorStop(0, "transparent");
      if (isDark) {
        vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)");
      } else {
        vignette.addColorStop(1, "rgba(200, 220, 245, 0.3)");
      }
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
    animate();

    let resizeTicking = false;
    const handleResize = () => {
      if (!resizeTicking) {
        window.requestAnimationFrame(() => {
          resizeCanvas();
          initStars();
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: isDark
          ? "radial-gradient(ellipse at center, rgba(15,10,40,1) 0%, rgba(0,0,10,1) 100%)"
          : "radial-gradient(ellipse at center, rgba(240,245,255,1) 0%, rgba(200,220,245,1) 100%)",
      }}
    />
  );
}
