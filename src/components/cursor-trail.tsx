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
    let id = 0;
    let animationFrame: number;

    const handleMove = (e: MouseEvent) => {
      const targetX = e.clientX;
      const targetY = e.clientY;

      cancelAnimationFrame(animationFrame);

      const animate = () => {
        setPos((prev) => {
          const x = prev.x + (targetX - prev.x) * 0.15;
          const y = prev.y + (targetY - prev.y) * 0.15;

          const newStar = {
            id: id++,
            x,
            y,
          };

          setStars((stars) => [...stars.slice(-20), newStar]);

          return { x, y };
        });

        animationFrame = requestAnimationFrame(animate);
      };

      animate();
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="pointer-events-none fixed z-[9999] text-white/20 text-[9px]"
          style={{
            left: star.x,
            top: star.y,
            animation: "starFade 900ms cubic-bezier(.22,1,.36,1) forwards",
          }}
        >
          ✦
        </span>
      ))}
    </>
  );
}