(() => {
  const layer = document.createElement("div");
  layer.className = "petal-field";
  layer.setAttribute("aria-hidden", "true");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const petalCount = prefersReduced ? 0 : (isMobile ? 4 : 9);
  // A few withered leaves drift down alongside the petals.
  const leafCount = prefersReduced ? 0 : (isMobile ? 2 : 4);

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
  // Use a distinct index range for leaves so they get their own x positions,
  // speeds and delays — otherwise they fall in lockstep with a petal and look
  // glued to it.
  for (let index = 0; index < leafCount; index += 1) {
    layer.append(makeFaller(100 + index * 7, "falling-leaf"));
  }

  document.body.append(layer);
})();
