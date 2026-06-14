(() => {
  const layer = document.createElement("div");
  layer.className = "petal-field";
  layer.setAttribute("aria-hidden", "true");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const petalCount = prefersReduced ? 0 : (isMobile ? 4 : 9);

  // Keep things along the two side margins; only an occasional one drifts through the center.
  const sidePosition = index => {
    const left = 3 + (index % 4) * 4.5;        // 3vw – 16.5vw band on the left
    const right = 84 + (index % 4) * 4;        // 84vw – 96vw band on the right
    return index % 2 ? right : left;
  };

  // Builds one falling element (petal or leaf) with a full set of drift vars so
  // both share the same `petal-fall` keyframes.
  const makeFaller = (index, className) => {
    const el = document.createElement("i");
    el.className = className;
    // Every 4th one is allowed to cross nearer the middle, the rest hug the sides.
    const x = index % 4 === 3 ? 38 + (index % 3) * 8 : sidePosition(index);
    el.style.setProperty("--x", `${x}vw`);
    const drift = index % 2 ? 13 + (index % 6) * 2.1 : -11 - (index % 6) * 1.8;
    el.style.setProperty("--drift", `${drift}vw`);
    el.style.setProperty("--drift-quarter", `${drift * 0.25}vw`);
    el.style.setProperty("--drift-back", `${drift * -0.12}vw`);
    el.style.setProperty("--drift-late", `${drift * 0.7}vw`);
    el.style.setProperty("--duration", `${22 + (index % 5) * 3}s`);
    // Positive delay: every element starts above the viewport and falls down.
    // Modulo distributes start times evenly across a ~21 s window.
    el.style.setProperty("--delay", `${((index * 1.7) % 21).toFixed(1)}s`);
    el.style.setProperty("--scale", `${0.6 + (index % 5) * 0.18}`);
    el.style.setProperty("--spin", `${200 + index * 41}deg`);
    el.style.setProperty("--sway", `${(index % 3) * 0.5 + 1}`);
    return el;
  };

  for (let index = 0; index < petalCount; index += 1) {
    layer.append(makeFaller(index, "falling-petal"));
  }

  // Two leaves: winding diagonal paths from the mid-upper screen, 5 s apart.
  // Left leaf drifts L→R→L; right leaf mirrors it.
  if (!prefersReduced) {
    [
      { x: 25, driftA: -8, driftB:  12, driftC: -3, delay: 4  },
      { x: 70, driftA:  8, driftB: -12, driftC:  3, delay: 9  },
    ].forEach(cfg => {
      const el = document.createElement("i");
      el.className = "falling-leaf";
      el.style.setProperty("--x",            `${cfg.x}vw`);
      el.style.setProperty("--leaf-drift-a",  `${cfg.driftA}vw`);
      el.style.setProperty("--leaf-drift-b",  `${cfg.driftB}vw`);
      el.style.setProperty("--leaf-drift-c",  `${cfg.driftC}vw`);
      el.style.setProperty("--scale",         "0.9");
      el.style.setProperty("--duration",      "30s");
      el.style.setProperty("--delay",         `${cfg.delay}s`);
      layer.append(el);
    });
  }

  document.body.append(layer);
})();
