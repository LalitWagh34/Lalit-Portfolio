"use client";
import { useLayoutEffect, type RefObject } from "react";
/** Measure link boxes instead of hard-coding indicator positions or widths. */
export function useNavigationIndicator(
  ref: RefObject<HTMLElement | null>,
  active: string,
  open: boolean,
) {
  useLayoutEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    let disposed = false;
    function measure() {
      if (disposed || !nav) return;
      const link = nav.querySelector<HTMLElement>('a[aria-current="location"]');
      if (!link || !nav.offsetWidth) return;
      nav.style.setProperty("--indicator-x", link.offsetLeft + "px");
      nav.style.setProperty("--indicator-y", link.offsetTop + "px");
      nav.style.setProperty("--indicator-width", link.offsetWidth + "px");
      nav.style.setProperty("--indicator-height", link.offsetHeight + "px");
      nav.dataset.indicatorReady = "true";
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    nav.querySelectorAll("a").forEach((link) => observer.observe(link));
    document.fonts.ready.then(measure);
    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [ref, active, open]);
}
