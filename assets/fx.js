/* ===================== FX · efeitos futuristas ===================== */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;

  /* ---------- camadas ---------- */
  ["fx-scan", "fx-sweep", "fx-flash", "fx-cursor"].forEach(c => document.body.appendChild(Object.assign(document.createElement("div"), { className: c })));
  const dot = document.body.appendChild(Object.assign(document.createElement("div"), { className: "fx-cursor-dot" }));
  const glow = $(".fx-cursor");

  /* ---------- paletas ---------- */
  const THEMES = [
    { name: "Aurora", hue: 0, c: "#2de2c0" },
    { name: "Plasma", hue: 70, c: "#3aa8ff" },
    { name: "Nebula", hue: 120, c: "#9b6bff" },
    { name: "Aço", hue: 30, sat: .32, c: "#8fa6bf" },
    { name: "Solar", hue: 220, c: "#ff8a3d" },
    { name: "Matrix", hue: -55, c: "#5dff6a" }
  ];
  let cur = 0, auto = !reduce, timer = null;
  const dock = document.body.appendChild(Object.assign(document.createElement("div"), { className: "fx-dock", role: "group", ariaLabel: "Paleta de cores" }));
  dock.innerHTML = `<span class="lbl">Paleta</span>${THEMES.map((t, i) => `<button class="sw ${i === 0 ? "on" : ""}" style="--c:${t.c}" data-i="${i}" title="${t.name}" aria-label="Paleta ${t.name}"></button>`).join("")}
    <span class="name" id="fxName">${THEMES[0].name}</span><button class="auto ${auto ? "on" : ""}" type="button" id="fxAuto"><i></i>Auto</button>`;

  function vibrate() {
    if (reduce) return;
    document.body.classList.remove("fx-glitching"); void document.body.offsetWidth;
    document.body.classList.add("fx-glitching");
    setTimeout(() => document.body.classList.remove("fx-glitching"), 950);
    try { navigator.vibrate && navigator.vibrate([18, 30, 18, 30, 40]); } catch (e) {}
  }
  function setTheme(i, fromUser) {
    cur = (i + THEMES.length) % THEMES.length;
    root.style.setProperty("--hue", THEMES[cur].hue + "deg"); root.style.setProperty("--sat", THEMES[cur].sat || 1);
    $$(".sw", dock).forEach((b, k) => b.classList.toggle("on", k === cur));
    $("#fxName").textContent = THEMES[cur].name;
    vibrate();
    if (fromUser) { auto = false; $("#fxAuto").classList.remove("on"); clearInterval(timer); }
    try { localStorage.setItem("fx-theme", cur); } catch (e) {}
  }
  $$(".sw", dock).forEach(b => b.addEventListener("click", () => setTheme(+b.dataset.i, true)));
  $("#fxAuto").addEventListener("click", () => {
    auto = !auto; $("#fxAuto").classList.toggle("on", auto);
    clearInterval(timer); if (auto) { setTheme(cur + 1); timer = setInterval(() => setTheme(cur + 1), 9000); }
  });
  try { const saved = +localStorage.getItem("fx-theme"); if (saved > 0 && saved < THEMES.length) { root.style.transition = "none"; root.style.setProperty("--hue", THEMES[saved].hue + "deg"); root.style.setProperty("--sat", THEMES[saved].sat || 1); cur = saved; $$(".sw", dock).forEach((b, k) => b.classList.toggle("on", k === cur)); $("#fxName").textContent = THEMES[cur].name; requestAnimationFrame(() => root.style.transition = ""); } } catch (e) {}
  if (auto) timer = setInterval(() => setTheme(cur + 1), 9000);
  addEventListener("keydown", e => { if (e.altKey && /^[1-6]$/.test(e.key)) setTheme(+e.key - 1, true); });

  /* ---------- cursor ---------- */
  let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;
  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
    dot.classList.toggle("hover", !!e.target.closest("a,button,.pitem,.kpi,.arc li,.cat,figure"));
  }, { passive: true });
  (function loop() { gx += (mx - gx) * .12; gy += (my - gy) * .12; glow.style.transform = `translate(${gx}px,${gy}px)`; requestAnimationFrame(loop); })();

  /* ---------- explosão de partículas no clique ---------- */
  addEventListener("pointerdown", e => {
    if (reduce || !e.target.closest("a,button,.pitem,.kpi,.arc li,.cat")) return;
    for (let i = 0; i < 14; i++) {
      const a = (Math.PI * 2 * i) / 14 + Math.random() * .4, d = 30 + Math.random() * 40;
      const p = Object.assign(document.createElement("i"), { className: "fx-burst" });
      p.style.left = e.clientX + "px"; p.style.top = e.clientY + "px";
      p.style.setProperty("--dx", Math.cos(a) * d + "px"); p.style.setProperty("--dy", Math.sin(a) * d + "px");
      if (i % 3 === 0) p.style.background = "#f2c46d";
      document.body.appendChild(p); setTimeout(() => p.remove(), 750);
    }
  });

  /* ---------- painel 3D segue o mouse ---------- */
  const wrap = $(".stage-wrap"), stage = $("#stage");
  if (wrap && stage && !reduce) {
    wrap.addEventListener("pointermove", e => {
      if (innerWidth < 820) return;
      const r = wrap.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      stage.style.transform = `rotateX(${14 - y * 14}deg) rotateY(${-6 + x * 14}deg) rotateZ(${3 - x * 3}deg)`;
    });
    wrap.addEventListener("pointerleave", () => stage.style.transform = "");
  }

  /* ---------- energia correndo nas linhas ---------- */
  const svg = $("#boardLinks");
  if (svg && !reduce) {
    const addFlow = () => {
      if (svg.querySelector(".flow")) return;
      $$("path", svg).forEach((p, i) => { if (i % 2) return; const f = p.cloneNode(); f.classList.add("flow"); f.style.animationDelay = (-Math.random() * 2) + "s"; svg.appendChild(f); });
    };
    new MutationObserver(addFlow).observe(svg, { childList: true });
    addFlow();
  }

  /* ---------- bordas holográficas ---------- */
  const holo = () => $$(".preview, .kpi.hot, .photo-card, .cat.active, .askbar, .mini-panel").forEach(el => el.classList.add("holo"));
  holo(); new MutationObserver(holo).observe(document.body, { childList: true, subtree: true });

  /* ---------- texto "decodificando" ---------- */
  const CH = "!<>-_\\/[]{}—=+*^?#01ABCDEF";
  function scramble(el) {
    if (reduce || el.dataset.scr) return; el.dataset.scr = 1;
    const nodes = [];
    (function walk(n) { n.childNodes.forEach(c => c.nodeType === 3 ? c.textContent.trim() && nodes.push(c) : walk(c)); })(el);
    nodes.forEach(n => {
      const final = n.textContent, t0 = performance.now(), dur = 700;
      const tick = () => {
        const k = (performance.now() - t0) / dur;
        if (k >= 1) { n.textContent = final; return; }
        n.textContent = [...final].map((ch, i) => (ch === " " || ch === "\n" || i < k * final.length) ? ch : CH[(Math.random() * CH.length) | 0]).join("");
        setTimeout(tick, 30);
      };
      tick();
      setTimeout(() => { n.textContent = final; }, dur + 120);
    });
  }
  scramble($(".hero h1"));
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { scramble(e.target); so.unobserve(e.target); } }), { threshold: .6 });
  $$(".section-head h2").forEach(h => so.observe(h));

  /* ---------- contadores dos KPIs ---------- */
  $$(".kpi b").forEach(b => {
    const end = +b.textContent; if (!end || reduce) return;
    const t0 = performance.now();
    (function step(t) { const k = Math.min((t - t0) / 1400, 1); b.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); })(t0);
  });

  /* ---------- botões magnéticos ---------- */
  if (!reduce) $$(".btn").forEach(b => {
    b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .25}px)`; });
    b.addEventListener("pointerleave", () => b.style.transform = "");
  });
})();
