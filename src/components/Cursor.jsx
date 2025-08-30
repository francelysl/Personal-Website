import React, { useEffect, useRef, useState } from "react";
import "../styles/Cursor.css";

export default function Cursor() {
  // Only show on devices with a fine pointer (desktop/laptop, not touch)
  const finePointer = typeof window !== "undefined" && matchMedia("(pointer: fine)").matches;
  if (!finePointer) return null;

  const ref = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isLink, setIsLink] = useState(false);
  const [isMagnet, setIsMagnet] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("use-custom-cursor");

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      // hover state for interactive elems
      const interactive = e.target.closest("a,button,.chip,.cert-chip");
      setIsLink(Boolean(interactive));
    };

    window.addEventListener("pointermove", handleMove);

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;

    const step = () => {
      // magnet logic: snap toward nearest [data-magnet] if within radius
      let magnetEl = null;
      let magnetCenter = null;
      let minD = Infinity;
      document.querySelectorAll("[data-magnet]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = target.current.x - cx;
        const dy = target.current.y - cy;
        const d = Math.hypot(dx, dy);
        if (d < minD) { minD = d; magnetEl = el; magnetCenter = { x: cx, y: cy }; }
      });

      const RADIUS = 110; // px
      if (magnetEl && minD < RADIUS) {
        target.current.x = lerp(target.current.x, magnetCenter.x, 0.25);
        target.current.y = lerp(target.current.y, magnetCenter.y, 0.25);
        magnetEl.classList.add("is-near");
        setIsMagnet(true);
      } else {
        setIsMagnet(false);
        document.querySelectorAll("[data-magnet].is-near").forEach(el => el.classList.remove("is-near"));
      }

      pos.current.x = lerp(pos.current.x, target.current.x, 0.18);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.18);

      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.classList.remove("use-custom-cursor");
    };
  }, []);

  return <div ref={ref} className={`ball ${isLink ? "is-link" : ""} ${isMagnet ? "is-magnet" : ""}`} />;
}
