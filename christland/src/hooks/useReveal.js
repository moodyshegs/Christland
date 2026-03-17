import { useEffect, useRef } from "react";

/**
 * useReveal – attaches an IntersectionObserver to a ref element.
 * When the element enters the viewport, the 'visible' class is added,
 * triggering the CSS fade-up animation defined in style.css.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
