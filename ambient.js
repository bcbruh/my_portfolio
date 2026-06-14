(() => {
  const layer = document.createElement("div");
  layer.className = "petal-field";
  layer.setAttribute("aria-hidden", "true");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const petalCount = prefersReduced ? 0 : (isMobile ? 3 : 5);

  // X positions alternate L/R so first 4 (mobile) and all 9 (desktop) are spread.
  // Sorted they are 2,14,26,38,50,62,74,86,98 — every gap = 12 vw (> 1/9 screen).
  const petalXs     = [2, 62, 14, 74, 26, 86, 38, 98, 50];
  // Delays spread petals ~2 s apart. Same-duration index pairs (0&5, 1&6, 2&7, 3&8)
  // are offset by ≥32 % of their cycle → always ≥37 vh apart vertically.
  const petalDelays = [0, 2.25, 4, 6, 7.5, 10.5, 12.25, 14, 16];

  for (let i = 0; i < petalCount; i += 1) {
    const el = document.createElement("i");
    el.className = "falling-petal";
    const x = petalXs[i];
    const sign = x < 50 ? 1 : -1;
    const driftMag = 9 + (i % 5) * 2.5;
    const drift = sign * driftMag;
    const duration = 22 + (i % 5) * 3;
    el.style.setProperty("--x",             `${x}vw`);
    el.style.setProperty("--drift",          `${drift}vw`);
    el.style.setProperty("--drift-quarter",  `${(drift * 0.25).toFixed(1)}vw`);
    el.style.setProperty("--drift-back",     `${(drift * -0.12).toFixed(1)}vw`);
    el.style.setProperty("--drift-late",     `${(drift * 0.7).toFixed(1)}vw`);
    el.style.setProperty("--duration",       `${duration}s`);
    el.style.setProperty("--delay",          `${petalDelays[i]}s`);
    el.style.setProperty("--scale",          `${0.6 + (i % 5) * 0.18}`);
    el.style.setProperty("--spin",           `${200 + i * 41}deg`);
    el.style.setProperty("--sway",           `${(i % 3) * 0.5 + 1}`);
    layer.append(el);
  }

  // Two leaves: diagonal tilt, gentle winding path, 5 s apart.
  // --leaf-tilt makes left leaf lean right (+32°) and right leaf lean left (-32°).
  if (!prefersReduced) {
    [
      { x: 25, driftA: -5, driftB:  7, driftC: -2, delay: 4, tilt:  32 },
      { x: 70, driftA:  5, driftB: -7, driftC:  2, delay: 9, tilt: -32 },
    ].forEach(cfg => {
      const el = document.createElement("i");
      el.className = "falling-leaf";
      el.style.setProperty("--x",            `${cfg.x}vw`);
      el.style.setProperty("--leaf-drift-a",  `${cfg.driftA}vw`);
      el.style.setProperty("--leaf-drift-b",  `${cfg.driftB}vw`);
      el.style.setProperty("--leaf-drift-c",  `${cfg.driftC}vw`);
      el.style.setProperty("--leaf-tilt",     `${cfg.tilt}deg`);
      el.style.setProperty("--scale",         "0.9");
      el.style.setProperty("--duration",      "30s");
      el.style.setProperty("--delay",         `${cfg.delay}s`);
      layer.append(el);
    });
  }

  document.body.append(layer);
})();
