// src/components/FocusFrame.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/FocusFrame.css";

export default function FocusFrame() {
  const fine = typeof window !== "undefined" && matchMedia("(pointer: fine)").matches;
  if (!fine) return null;

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const lockedEl = useRef(null);
  const lastHover = useRef(null);

  const moveToEl = (el) => {
    if (!ref.current || !el) return;
    const pad = 8;
    const r = el.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${r.left - pad}px`);
    ref.current.style.setProperty("--y", `${r.top - pad}px`);
    ref.current.style.setProperty("--w", `${r.width + pad * 2}px`);
    ref.current.style.setProperty("--h", `${r.height + pad * 2}px`);
    setVisible(true);
  };

  useEffect(() => {
    const onMove = (e) => {
      if (lockedEl.current) return;
      const el = e.target.closest("[data-frame]");
      if (el !== lastHover.current) {
        lastHover.current = el || null;
        el ? moveToEl(el) : setVisible(false);
      }
    };

    const onClick = (e) => {
      const el = e.target.closest("[data-frame]");
      if (el) { lockedEl.current = el; moveToEl(el); }
      else { lockedEl.current = null; setVisible(false); }
    };

    const onRelayout = () => { if (lockedEl.current) moveToEl(lockedEl.current); };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", onRelayout, { passive: true });
    window.addEventListener("scroll", onRelayout, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onRelayout);
      window.removeEventListener("scroll", onRelayout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`focus-frame ${visible ? "is-visible" : ""} ${lockedEl.current ? "is-locked" : ""}`}
      aria-hidden="true"
    >
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
    </div>
  );
}
