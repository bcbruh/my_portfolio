/* Depth & motion polish:
   1. Scroll/route reveal — every major content block rises & fades in. The
      reveal is re-run on each SPA navigation so a freshly loaded page animates
      in as a whole, not just the cards.
   2. Soft parallax on the decorative background layers.
   Both are disabled when the user prefers reduced motion. */
(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    // Keep the public hook so nav-router can call it safely; content is already
    // fully visible via the reduced-motion CSS fallback.
    window.revealInit = () => {};
    return;
  }

  /* ---- 1. Reveal ------------------------------------------------------- */
  // Every meaningful block across the three pages, listed roughly in the order
  // it appears so the stagger cascades down the page.
  const revealSelectors = [
    // Home  (collages excluded — they have their own drift animation)
    ".hero-copy h1",
    ".hero-copy .script",
    ".hero-copy p:not(.script)",
    ".hero-actions",
    ".identity-strip article",
    ".archive-card",
    // Projects
    ".projects-intro > div:first-child",
    ".workspace-shelf",
    ".project-list",
    ".document-viewer",
    // Reflection
    ".reflection-hero > div:first-child h1",
    ".reflection-hero > div:first-child .script",
    ".reflection-hero > div:first-child p:not(.script)",
    ".reflection-card",
  ];

  function revealInit() {
    // querySelectorAll on a comma list returns nodes in document order, so a
    // simple running index gives a top-to-bottom stagger.
    const targets = Array.from(document.querySelectorAll(revealSelectors.join(",")));
    targets.forEach((el, i) => {
      el.classList.add("reveal");          // hidden state (opacity 0, shifted)
      el.classList.remove("is-visible");
      el.style.setProperty("--reveal-delay", `${Math.min(i, 12) * 75}ms`);
    });

    refreshParallax();

    // Commit the hidden state to a real paint, then trigger the transition on
    // the next frame. Because the SPA router swaps in fresh DOM on every
    // navigation, this plays reliably every single time — no observer races.
    void document.body.offsetHeight; // force reflow so opacity:0 is painted first
    requestAnimationFrame(() => requestAnimationFrame(() => {
      targets.forEach(el => el.classList.add("is-visible"));
    }));
  }

  window.revealInit = revealInit;
  // Run after first paint so the very first load animates in too.
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", revealInit);
  } else {
    revealInit();
  }

  /* ---- 2. Soft parallax ----------------------------------------------- */
  // The collage layers live inside <main> and are replaced on SPA navigation,
  // so the layer list is refreshed whenever the page content changes.
  let parallaxLayers = [];
  let pointerX = 0, pointerY = 0, scrollY = 0, ticking = false;

  function refreshParallax() {
    parallaxLayers = Array.from(document.querySelectorAll(
      ".corner-map, .hero-collage, .intro-collage, .reflection-collage"
    ));
  }

  const apply = () => {
    parallaxLayers.forEach((layer, i) => {
      const depth = (i % 3 + 1) * 1.6;
      const px = pointerX * depth;
      const py = pointerY * depth + scrollY * (0.01 * (i % 2 ? 1 : -1.2));
      // `translate` is independent of `transform`, so it won't clobber the
      // existing keyframe animations on the collage layers.
      layer.style.translate = `${px.toFixed(2)}px ${py.toFixed(2)}px`;
    });
    ticking = false;
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };

  window.addEventListener("scroll", () => { scrollY = window.scrollY; request(); }, { passive: true });
  window.addEventListener("pointermove", e => {
    pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
    pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
    request();
  }, { passive: true });
})();
