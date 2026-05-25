"use client";

import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.30,        // lower = better mobile support
        rootMargin: "100px",    // triggers earlier on mobile
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}