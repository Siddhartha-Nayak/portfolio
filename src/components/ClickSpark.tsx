import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
export default function ClickSpark({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let sparks: { x: number; y: number; angle: number; start: number }[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const draw = (now: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      sparks = sparks.filter((spark) => now - spark.start < 400);
      for (const spark of sparks) {
        const progress = (now - spark.start) / 400;
        const distance = 20 * (1 - (1 - progress) ** 2);
        const length = 10 * (1 - progress);
        context.strokeStyle = `rgba(255,255,255,${1 - progress})`;
        context.lineWidth = 1.5;
        context.beginPath();
        context.moveTo(
          spark.x + Math.cos(spark.angle) * distance,
          spark.y + Math.sin(spark.angle) * distance,
        );
        context.lineTo(
          spark.x + Math.cos(spark.angle) * (distance + length),
          spark.y + Math.sin(spark.angle) * (distance + length),
        );
        context.stroke();
      }
      if (sparks.length) frame = requestAnimationFrame(draw);
      else frame = 0;
    };
    const click = (event: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      sparks.push(
        ...Array.from({ length: 8 }, (_, index) => ({
          x: event.clientX,
          y: event.clientY,
          angle: (index * Math.PI) / 4,
          start: performance.now(),
        })),
      );
      if (!frame) frame = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("click", click);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", click);
    };
  }, []);
  return (
    <>
      <canvas ref={canvasRef} className="click-sparks" aria-hidden="true" />
      {children}
    </>
  );
}
