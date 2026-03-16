import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none" }}
    >
      <a href="#hero" className="nav-logo">
        CLCC <span>·</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#highlights">Highlights</a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
      </ul>
      <a href="#services" className="nav-btn">
        Join Us
      </a>
    </nav>
  );
}
