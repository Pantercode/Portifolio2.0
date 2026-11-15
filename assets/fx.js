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

  /* ---------- abertura: chuva de código + TV de tubo desligando e ligando ---------- */
  try { localStorage.removeItem("fx-theme"); } catch (e) {}
  if (!reduce) {
    const tv = document.body.appendChild(Object.assign(document.createElement("div"), { className: "fx-tv", ariaHidden: "true" }));
    tv.innerHTML = `<div class="tv-screen"><canvas></canvas><div class="tv-load" role="progressbar" aria-label="Carregando"><i></i></div></div>
      <div class="tv-lid top"></div><div class="tv-lid bot"></div><div class="tv-line"></div>`;
    document.documentElement.classList.add("fx-tv-on");
    const cv = $("canvas", tv), cx = cv.getContext("2d"), GL = "01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEF<>#$%";
    const fs = 18, dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; cx.scale(dpr, dpr);
    const drops = Array.from({ length: Math.ceil(innerWidth / fs) }, () => Math.random() * -40);
    cx.fillStyle = "#010701"; cx.fillRect(0, 0, innerWidth, innerHeight);
    let raf, last = 0;
    (function rain(t) {
      raf = requestAnimationFrame(rain);
      if (t - last < 45) return; last = t;
      cx.fillStyle = "rgba(1,7,1,.16)"; cx.fillRect(0, 0, innerWidth, innerHeight);
      cx.font = `${fs}px "JetBrains Mono", monospace`;
      drops.forEach((y, i) => {
        const ch = GL[(Math.random() * GL.length) | 0], px = i * fs, py = y * fs;
        cx.fillStyle = Math.random() < .08 ? "#f5e04a" : "#d8ffd8"; cx.fillText(ch, px, py);
        cx.fillStyle = "#00ff41"; cx.fillText(GL[(Math.random() * GL.length) | 0], px, py - fs);
        drops[i] = py > innerHeight && Math.random() > .975 ? 0 : y + 1;
      });
    })(0);
    let done = false;
    const timers = [];
    const finish = () => {
      if (done) return; done = true;
      timers.forEach(clearTimeout); cancelAnimationFrame(raf);
      tv.remove(); document.documentElement.classList.remove("fx-tv-on");
      removeEventListener("keydown", skip); removeEventListener("pointerdown", skip);
    };
    const skip = () => { tv.classList.add("off", "open"); timers.push(setTimeout(finish, 260)); };
    addEventListener("keydown", skip, { once: true }); addEventListener("pointerdown", skip, { once: true });
    timers.push(setTimeout(() => tv.classList.add("off"), 1300));             // tela encolhe numa linha e num ponto
    timers.push(setTimeout(() => { cancelAnimationFrame(raf); tv.classList.add("open"); document.body.classList.add("fx-poweron"); }, 1950)); // liga o site
    timers.push(setTimeout(finish, 2700));
    setTimeout(() => document.body.classList.remove("fx-poweron"), 3200);
  }

  /* ---------- troca de página: TV desliga, pula para a seção e liga de novo ---------- */
  const page = document.body.appendChild(Object.assign(document.createElement("div"), { className: "fx-page", ariaHidden: "true" }));
  page.innerHTML = `<div class="tv-lid top"></div><div class="tv-lid bot"></div><div class="tv-line"></div>`;
  let pageBusy = false;
  function tvPage(go) {
    if (reduce || pageBusy) { go(); return; }
    pageBusy = true;
    page.className = "fx-page closing";
    setTimeout(() => {
      go();
      page.className = "fx-page opening";
      document.body.classList.remove("fx-poweron"); void document.body.offsetWidth; document.body.classList.add("fx-poweron");
      setTimeout(() => { page.className = "fx-page"; document.body.classList.remove("fx-poweron"); pageBusy = false; }, 900);
    }, 420);
  }
  window.tvPage = tvPage;
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]'); if (!a || e.ctrlKey || e.metaKey) return;
    const id = a.getAttribute("href").slice(1), target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    tvPage(() => { target.scrollIntoView({ behavior: "instant", block: "start" }); try { history.replaceState(null, "", "#" + id); } catch (err) {} });
  });

  /* ---------- chuva de letras discreta, de vez em quando, atrás do conteúdo ---------- */
  if (!reduce) {
    const cv = document.body.appendChild(Object.assign(document.createElement("canvas"), { className: "fx-rain", ariaHidden: "true" }));
    const cx = cv.getContext("2d"), GL = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホABCDEF<>#$%";
    const FS = 16;
    let W = 0, H = 0, cols = [], running = false, raf = 0, last = 0, endAt = 0;
    const size = () => { const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0); };
    size(); addEventListener("resize", size);
    function burst() {
      if (running || document.hidden || document.documentElement.classList.contains("fx-tv-on")) return schedule();
      const n = Math.max(6, Math.round(W / 110));                     // poucas colunas espalhadas
      cols = Array.from({ length: n }, () => ({ x: Math.floor(Math.random() * W / FS) * FS, y: -Math.random() * H * .6, v: .6 + Math.random() * .9, len: 8 + (Math.random() * 14 | 0) }));
      running = true; endAt = performance.now() + 4200 + Math.random() * 2500;
      cv.classList.add("on");
      raf = requestAnimationFrame(tick);
    }
    function tick(t) {
      if (t - last < 50) { raf = requestAnimationFrame(tick); return; }
      last = t;
      cx.fillStyle = "rgba(0,0,0,.18)"; cx.globalCompositeOperation = "destination-out"; cx.fillRect(0, 0, W, H);
      cx.globalCompositeOperation = "source-over"; cx.font = `${FS}px "JetBrains Mono", monospace`;
      let alive = 0;
      cols.forEach(c => {
        c.y += FS * c.v;
        if (c.y - c.len * FS < H) alive++;
        cx.fillStyle = Math.random() < .1 ? "#f5e04a" : "#ffd29a"; cx.fillText(GL[Math.random() * GL.length | 0], c.x, c.y);
        cx.fillStyle = "#ff9a2e"; cx.fillText(GL[Math.random() * GL.length | 0], c.x, c.y - FS);
      });
      if (t > endAt || !alive) { cv.classList.remove("on"); setTimeout(() => { cx.clearRect(0, 0, W, H); running = false; schedule(); }, 1600); return; }
      raf = requestAnimationFrame(tick);
    }
    function schedule() { setTimeout(burst, 9000 + Math.random() * 12000); } // a cada 9 a 21 segundos
    setTimeout(burst, 6000);
  }

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
      if (i % 3 === 0) p.style.background = "#f5e04a";
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
