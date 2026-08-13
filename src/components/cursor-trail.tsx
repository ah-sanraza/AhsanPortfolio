import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
};

export default function CursorTrail() {
  const [stars, setStars] = useState<Star[]>([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable completely on mobile / touch devices
    const isMobile =
      window.innerWidth < 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isMobile) return;

    let id = 0;
    let animationFrame: number | null = null;
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMove = (e: MouseEvent) => {
      // Safety: ignore any non-mouse event
      if (e.pointerType === "touch") return;

      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      const targetX = e.clientX;
      const targetY = e.clientY;

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      const animate = () => {
        setPos((prev) => {
          const x = prev.x + (targetX - prev.x) * 0.15;
          const y = prev.y + (targetY - prev.y) * 0.15;

          const newStar: Star = {
            id: id++,
            x,
            y,
          };

          setStars((prevStars) => [
            ...prevStars.slice(-20),
            newStar,
          ]);

          return { x, y };
        });

        animationFrame = requestAnimationFrame(animate);
      };

      animate();

      // Hide trail 1 second after mouse stops
      hideTimeout = setTimeout(() => {
        setStars([]);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }
      }, 1000);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, []);

  // Don't render anything on mobile
  if (
    typeof window !== "undefined" &&
    (window.innerWidth < 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0)
  ) {
    return null;
  }

  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="pointer-events-none fixed z-[9999] text-white/20 text-[9px]"
          style={{
            left: star.x,
            top: star.y,
            animation:
              "starFade 900ms cubic-bezier(.22,1,.36,1) forwards",
          }}
        >
          ✦
        </span>
      ))}
    </>
  );
}
