import { useEffect, useRef } from "react";

export default function Hero() {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;

    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2.5 + 0.5;
      star.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        --dur:${2 + Math.random() * 4}s;
        --op:${0.3 + Math.random() * 0.5};
        animation-delay:${Math.random() * 5}s;
      `;
      container.appendChild(star);
    }
  }, []);

  return (
    <div id="hero">
      <div className="hero-bg"></div>
      <div className="stars" ref={starsRef}></div>

      <div className="cross-ornament"></div>
      <p className="hero-eyebrow">Africa Praise Festival</p>
      <h1 className="hero-title">
        Christland
        <br />
        <span>Christian Center</span>
      </h1>
      <p className="hero-sub">A Place of the Unfailing Love of God</p>
      <div className="divider-gold"></div>
      <div className="hero-cta">
        <a href="#services" className="btn-primary">
          Join Sunday Service
        </a>
        <a href="#highlights" className="btn-outline">
          View Highlights
        </a>
      </div>
    </div>
  );
}
