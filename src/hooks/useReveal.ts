import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-zoom, .reveal-left, .reveal-right, .reveal-expand"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
