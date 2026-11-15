"use client";

import { useEffect } from "react";

const MINIMUM_PRESS_MS = 120;
const SCROLL_THRESHOLD_PX = 10;

/** Share pointer feedback across controls, including touch browsers without :active. */
export function PressFeedback() {
  useEffect(() => {
    let control: HTMLElement | null = null;
    let pointerId: number | null = null;
    let pressedAt = 0;
    let startX = 0;
    let startY = 0;
    let releaseTimer: ReturnType<typeof setTimeout> | undefined;

    function clear() {
      clearTimeout(releaseTimer);
      control?.removeAttribute("data-pressed");
      control = null;
      pointerId = null;
    }

    function press(event: PointerEvent) {
      if (!event.isPrimary || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const next = target.closest<HTMLElement>("button, .pressable");
      if (!next || next.matches(':disabled, [aria-disabled="true"]')) return;
      clear();
      control = next;
      pointerId = event.pointerId;
      pressedAt = performance.now();
      startX = event.clientX;
      startY = event.clientY;
      control.setAttribute("data-pressed", "true");
    }

    function release(event: PointerEvent) {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      // A quick tap remains visible; click handlers and navigation run immediately.
      const remaining = Math.max(0, MINIMUM_PRESS_MS - (performance.now() - pressedAt));
      releaseTimer = setTimeout(clear, remaining);
    }

    function move(event: PointerEvent) {
      if (event.pointerId !== pointerId || event.pointerType === "mouse") return;
      if (Math.hypot(event.clientX - startX, event.clientY - startY) > SCROLL_THRESHOLD_PX) clear();
    }

    function cancel(event: PointerEvent) {
      if (event.pointerId === pointerId) clear();
    }

    function visibilityChanged() {
      if (document.hidden) clear();
    }

    const options = { capture: true, passive: true };
    document.addEventListener("pointerdown", press, options);
    document.addEventListener("pointerup", release, options);
    document.addEventListener("pointermove", move, options);
    document.addEventListener("pointercancel", cancel, options);
    document.addEventListener("dragstart", clear, true);
    document.addEventListener("visibilitychange", visibilityChanged);
    window.addEventListener("blur", clear);
    return () => {
      clear();
      document.removeEventListener("pointerdown", press, true);
      document.removeEventListener("pointerup", release, true);
      document.removeEventListener("pointermove", move, true);
      document.removeEventListener("pointercancel", cancel, true);
      document.removeEventListener("dragstart", clear, true);
      document.removeEventListener("visibilitychange", visibilityChanged);
      window.removeEventListener("blur", clear);
    };
  }, []);

  return null;
}
