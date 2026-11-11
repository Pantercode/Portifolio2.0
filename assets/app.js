(() => {
  const D = window.PORTFOLIO;
  const P = D.projects;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const strip = (s = "") => s.replace(/<[^>]+>/g, "");
  const catById = Object.fromEntries(D.categories.map(c => [c.id, c]));
  const COLORS = { powerbi: "#2de2c0", looker: "#2de2c0", metabase: "#2de2c0", python: "#7aa7ff", dbt: "#7aa7ff", "etl-ia": "#f2c46d", appscript: "#f2c46d", langchain: "#f2c46d", sql: "#ff7a7a" };
  const ICONS = {
    chart: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
    db: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4z"/></svg>',
    flow: '<svg viewBox="0 0 24 24"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 6h10M6 8l5 8M18 8l-5 8"/></svg>',
    layers: '<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    img: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/></svg>'
  };
  const SOCIAL_ICON = {
    LinkedIn: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9z"/></svg>',
    GitHub: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>'
  };
  const hash = s => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const linksCount = p => (p.links || []).length + (p.embed ? 1 : 0);

  /* ---------- image with graceful fallback ---------- */
  /* imagem com substituto desenhado caso o arquivo não exista/carregue */
  function imgHTML(src, alt, kind = "gallery", extra = "") {
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" data-kind="${kind}" data-extra="${esc(extra)}" onerror="window.__imgFail&&window.__imgFail(this)" />`;
  }
  const ABBR = { "PL-900": "PL-900", "DP-900": "DP-900", "AZ-900": "AZ-900", "Scrum": "SFPC", "Business Intelligence": "BIFPC", "Lean Six Sigma": "LSSWB", "Databricks Lakehouse": "LAKE", "Google Analytics": "GA" };
  const ISSUER_COLOR = { Microsoft: "#7aa7ff", CertiProf: "#2de2c0", Databricks: "#ff7a5c", Google: "#f2c46d", Alura: "#2de2c0" };
  function fallbackHTML(kind, alt, extra) {
    if (kind === "cert") {
      const c = ISSUER_COLOR[extra] || "#2de2c0", ab = ABBR[alt] || alt.slice(0, 5).toUpperCase();
      return `<div class="badge-art" style="--bc:${c}"><svg viewBox="0 0 120 120" aria-hidden="true">
        <defs><linearGradient id="g${hash(alt)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="#f2c46d"/></linearGradient></defs>
        <polygon points="60,6 107,33 107,87 60,114 13,87 13,33" fill="rgba(2,10,9,.85)" stroke="url(#g${hash(alt)})" stroke-width="3"/>
        <polygon points="60,18 96,39 96,81 60,102 24,81 24,39" fill="none" stroke="${c}" stroke-opacity=".25" stroke-dasharray="3 4"/>
        </svg><div class="ba-txt"><b>${esc(ab)}</b><small>${esc(extra || "")}</small></div><span class="ba-check">✓</span></div>`;
    }
    if (kind === "course") return `<span class="course-ini">${esc((extra || alt).slice(0, 2).toUpperCase())}</span>`;
    if (kind === "photo") return `<div class="ph"><span>${esc(alt)}</span></div>`;
    const low = alt.toLowerCase();
    const body = /diagrama|processo|estrutural/.test(low)
      ? `<div class="gm-flow"><span>CSV</span><i></i><span>PySpark</span><i></i><span>Parquet</span><i></i><span>BigQuery</span><i></i><span>Power BI</span></div>`
      : `<div class="gm-table">${Array.from({ length: 6 }, (_, r) => `<div class="${r ? "" : "h"}">${Array.from({ length: 4 }, () => "<i></i>").join("")}</div>`).join("")}</div>`;
    return `<div class="gallery-mock"><div class="gm-bar"><i></i><i></i><i></i><span>${/bigquery/.test(low) ? "BigQuery" : /bucket|storage/.test(low) ? "Cloud Storage" : /diagrama|processo/.test(low) ? "Arquitetura" : "Resultado da query"}</span></div>${body}</div>`;
  }
  window.__imgFail = (img) => {
    const kind = img.dataset.kind || "gallery";
    const fig = img.closest("figure"); if (fig) fig.classList.add("no-img");
    img.outerHTML = fallbackHTML(kind, img.alt, img.dataset.extra);
  };

  /* ---------- background stars ---------- */
  (function stars() {
    const c = $("#stars"), x = c.getContext("2d");
    let w, h, pts = [];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    function size() {
      w = c.width = innerWidth * devicePixelRatio; h = c.height = innerHeight * devicePixelRatio;
      pts = Array.from({ length: 70 }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.6 + .3, s: Math.random() * .25 + .05, a: Math.random() }));
    }
    function draw() {
      x.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.y -= p.s; p.a += .01; if (p.y < 0) p.y = h;
        x.globalAlpha = .25 + Math.abs(Math.sin(p.a)) * .55;
        x.fillStyle = p.r > 1.4 ? "#f2c46d" : "#2de2c0";
        x.beginPath(); x.arc(p.x, p.y, p.r * devicePixelRatio, 0, 7); x.fill();
      }
      if (!reduce) requestAnimationFrame(draw);
    }
    size(); draw(); addEventListener("resize", size);
  })();

  /* ---------- HERO BOARD ---------- */
  const techs = new Set(P.flatMap(p => p.stack || []));
  const dashCount = P.filter(p => p.embed && (p.embed.type === "powerbi" || p.embed.type === "looker")).length;
  const liveCount = P.filter(p => p.live).length;

  $(".orb").style.background = `url(${D.person.photo}) center/cover, #06110f`;
  $("#heroLead").textContent = `${D.person.role} · ${D.person.tagline}. ${P.length} projetos reais, de dashboards executivos a pipelines em camadas e apps com agentes de IA.`;
  $("#hubSub").innerHTML = `<span class="tag tag-cat">${P.length} projetos</span><span class="tag tag-live">${liveCount} no ar</span>`;

  const kpis = [
    { n: dashCount, l: "Dashboards publicados", ic: "chart", go: () => selectCat("powerbi") },
    { n: P.length, l: "Projetos no portfólio", ic: "grid", hot: true, go: () => selectCat("all") },
    { n: liveCount, l: "Apps com IA no ar", ic: "spark", go: () => selectCat("live") },
    { n: D.categories.length, l: "Áreas de atuação", ic: "layers", go: () => selectCat("all") },
    { n: techs.size, l: "Tecnologias aplicadas", ic: "code", go: () => location.hash = "sobre" }
  ];
  $("#boardKpis").innerHTML = kpis.map((k, i) => `<div class="kpi ${k.hot ? "hot" : ""}" data-k="${i}"><span class="ico">${ICONS[k.ic]}</span><div><b>${k.n}</b><small>${k.l}</small></div></div>`).join("");
  $$("#boardKpis .kpi").forEach(el => el.addEventListener("click", () => { kpis[+el.dataset.k].go(); document.getElementById("projetos").scrollIntoView({ behavior: "smooth" }); }));

  const arc = $("#boardArc");
  arc.innerHTML = P.map((p, i) => {
    const t = P.length > 1 ? i / (P.length - 1) : .5;
    const top = 3 + t * 94;
    const left = (1 - Math.sin(Math.PI * t)) * 70;
    return `<li data-id="${p.id}" style="top:${top}%;left:${left}px;--c:${COLORS[p.cat]}"><span class="nm">${esc(p.title.length > 34 ? p.title.slice(0, 33) + "…" : p.title)}</span><span class="meta"><i></i><i></i>${p.live ? "<i></i>" : ""}</span></li>`;
  }).join("");

  function drawLinks(hotId) {
    const stage = $("#stage"), svg = $("#boardLinks");
    if (getComputedStyle(arc).display === "none") return;
    const W = stage.offsetWidth, H = stage.offsetHeight;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const kp = $("#boardKpis"), hotK = $(".kpi.hot", kp);
    const x1 = kp.offsetLeft + hotK.offsetLeft + hotK.offsetWidth, y1 = kp.offsetTop + hotK.offsetTop + hotK.offsetHeight / 2;
    const hub = $(".hub"), hx = hub.offsetLeft + hub.offsetWidth / 2, hy = hub.offsetTop + hub.offsetHeight / 2;
    let d = `<defs><linearGradient id="lg" x1="0" x2="1"><stop offset="0" stop-color="#f2c46d" stop-opacity=".9"/><stop offset="1" stop-color="#2de2c0" stop-opacity=".35"/></linearGradient></defs>`;
    $$(".kpi", kp).forEach(k => {
      const kx = kp.offsetLeft + k.offsetLeft, ky = kp.offsetTop + k.offsetTop + k.offsetHeight / 2;
      d += `<path d="M${hx} ${hy} C ${hx + 90} ${hy}, ${kx - 70} ${ky}, ${kx} ${ky}"/>`;
    });
    $$("li", arc).forEach(li => {
      const x2 = arc.offsetLeft + li.offsetLeft - 16, y2 = arc.offsetTop + li.offsetTop;
      const dx = x2 - x1;
      d += `<path class="${li.dataset.id === hotId ? "hot" : ""}" d="M${x1} ${y1} C ${x1 + dx * .45} ${y1}, ${x2 - dx * .45} ${y2}, ${x2} ${y2}"/>`;
    });
    svg.innerHTML = d;
  }

  const mini = $("#miniPanel");
  function showMini(p) {
    mini.style.display = "block";
    const bars = Array.from({ length: 22 }, (_, i) => 20 + ((hash(p.id + i) % 80))).map(v => `<i style="height:${v}%"></i>`).join("");
    mini.innerHTML = `
      <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--muted)">${ICONS[catById[p.cat].icon].replace("<svg", '<svg width="14" height="14" style="stroke:var(--teal);fill:none;stroke-width:2"')}${esc(catById[p.cat].label)}</div>
      <div style="font:600 16px/1.2 var(--display);margin:8px 0">${esc(p.title)}</div>
      ${p.live ? '<span class="tag tag-live">No ar</span>' : '<span class="tag tag-cat">Projeto</span>'}
      <div class="spark">${bars}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:11px;color:var(--muted)">
        <div><b style="font:700 18px var(--display);color:var(--text);display:block">${(p.sections || []).length}</b>seções</div>
        <div><b style="font:700 18px var(--display);color:var(--text);display:block">${(p.stack || []).length}</b>tecnologias</div>
        <div><b style="font:700 18px var(--display);color:var(--text);display:block">${linksCount(p)}</b>links</div>
      </div>`;
  }
  $$("li", arc).forEach(li => {
    const p = P.find(x => x.id === li.dataset.id);
    li.addEventListener("mouseenter", () => { $$("li", arc).forEach(x => x.classList.toggle("hot", x === li)); drawLinks(p.id); showMini(p); });
    li.addEventListener("click", () => openProject(p.id));
  });
  const featured = P.find(p => p.id === "censo-escolar") || P[0];
  showMini(featured);
  requestAnimationFrame(() => drawLinks(featured.id));
  addEventListener("resize", () => drawLinks());
  document.fonts && document.fonts.ready.then(() => drawLinks(featured.id));

  /* ---------- EXPLORER ---------- */
  let state = { cat: "all", q: "", sel: null };
  const catsEl = $("#cats");
  function renderCats() {
    const items = [{ id: "all", label: "Todos os projetos", n: P.length }, { id: "live", label: "Apps no ar", n: liveCount },
      ...D.categories.map(c => ({ id: c.id, label: c.label, n: P.filter(p => p.cat === c.id).length }))];
    catsEl.innerHTML = items.map(c => `<button class="cat ${state.cat === c.id && !state.q ? "active" : ""}" data-cat="${c.id}" type="button"><span class="n">${c.n}</span><span class="l">${esc(c.label)}</span></button>`).join("");
    $$(".cat", catsEl).forEach(b => b.addEventListener("click", () => selectCat(b.dataset.cat)));
  }
  function filtered() {
    if (state.q) {
      const terms = state.q.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/\s+/).filter(Boolean);
      return P.filter(p => {
        const hay = [p.title, p.subtitle, p.summary, (p.stack || []).join(" "), catById[p.cat].label, ...(p.sections || []).map(s => [s.h, ...(s.p || []), ...(s.ul || []), ...(s.ol || [])].join(" "))]
          .join(" ").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
        return terms.every(t => hay.includes(t));
      });
    }
    if (state.cat === "all") return P;
    if (state.cat === "live") return P.filter(p => p.live);
    return P.filter(p => p.cat === state.cat);
  }
  function renderList() {
    const list = filtered();
    $("#plistTitle").textContent = state.q ? `Resultados para “${state.q}”` : state.cat === "all" ? "Todos os projetos" : state.cat === "live" ? "Apps no ar" : catById[state.cat].label;
    $("#plistCount").textContent = `${list.length} ${list.length === 1 ? "projeto" : "projetos"}`;
    if (!list.length) { $("#plist").innerHTML = `<li class="muted" style="padding:20px">Nenhum projeto encontrado. Tente “Python”, “Power BI” ou “Gemini”.</li>`; return; }
    if (!state.sel || !list.some(p => p.id === state.sel)) state.sel = list[0].id;
    $("#plist").innerHTML = list.map((p, i) => {
      const t = list.length > 1 ? i / (list.length - 1) : .5;
      const indent = Math.round((1 - Math.sin(Math.PI * t)) * 14);
      return `<li class="pitem ${p.id === state.sel ? "active" : ""}" data-id="${p.id}" style="--indent:${indent}px" tabindex="0">
        <span class="t">${esc(p.title)}</span>
        <span class="row"><span class="tag tag-cat">${esc(catById[p.cat].label)}</span>${p.live ? '<span class="tag tag-live">No ar</span>' : ""}${(p.stack || []).filter(s => s !== catById[p.cat].label).slice(0, 2).map(s => `<span class="chip">${esc(s)}</span>`).join("")}</span>
      </li>`;
    }).join("");
    $$(".pitem").forEach(li => {
      li.addEventListener("click", () => { state.sel = li.dataset.id; renderList(); renderPreview(); });
      li.addEventListener("dblclick", () => openProject(li.dataset.id));
      li.addEventListener("keydown", e => { if (e.key === "Enter") openProject(li.dataset.id); });
    });
    renderPreview();
  }
  function renderPreview() {
    const p = P.find(x => x.id === state.sel); if (!p) return;
    const bars = Array.from({ length: 28 }, (_, i) => 18 + (hash(p.id + i) % 82)).map(v => `<i style="height:${v}%"></i>`).join("");
    const primary = (p.links || []).find(l => l.primary) || (p.links || [])[0];
    const sum = strip(p.summary);
    $("#preview").innerHTML = `
      <div class="cat-line">${ICONS[catById[p.cat].icon].replace("<svg", '<svg width="16" height="16" style="stroke:var(--teal);fill:none;stroke-width:2"')}<span>${esc(catById[p.cat].label)}</span></div>
      <h3>${esc(p.title)}</h3>
      ${p.subtitle ? `<div class="sub">${esc(p.subtitle)}</div>` : ""}
      ${p.live ? '<span class="tag tag-live">Publicado · no ar</span>' : `<span class="tag tag-cat">${p.embed ? (p.embed.type === "pdf" ? "Relatório PDF" : "Dashboard interativo") : "Projeto"}</span>`}
      <div class="spark" aria-hidden="true">${bars}</div>
      <p class="sum">${esc(sum.length > 380 ? sum.slice(0, 378) + "…" : sum)}</p>
      <div class="mbox-row">
        <div class="mbox"><b>${(p.sections || []).length + (p.intro ? 1 : 0)}</b><small>Seções da análise</small></div>
        <div class="mbox"><b>${(p.stack || []).length}</b><small>Tecnologias</small></div>
        <div class="mbox"><b>${linksCount(p)}</b><small>Links e painéis</small></div>
      </div>
      <div class="chips">${(p.stack || []).map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      <div class="acts">
        <button class="btn btn-gold btn-sm" type="button" data-open="${p.id}">Ver projeto completo →</button>
        ${primary ? `<a class="btn btn-ghost btn-sm" href="${esc(primary.url)}" target="_blank" rel="noopener">${esc(primary.label)} ↗</a>` : ""}
      </div>`;
    $("[data-open]", $("#preview")).addEventListener("click", () => openProject(p.id));
  }
  function selectCat(c) { state.cat = c; state.q = ""; $("#ask").value = ""; state.sel = null; renderCats(); renderList(); }

  $("#askbar").addEventListener("submit", e => { e.preventDefault(); state.q = $("#ask").value.trim(); state.sel = null; renderCats(); renderList(); });
  $("#ask").addEventListener("input", e => { if (!e.target.value.trim() && state.q) { state.q = ""; renderCats(); renderList(); } });

  /* ---------- DRAWER ---------- */
  const drawer = $("#drawer");
  function sqlHighlight(code) {
    return esc(code)
      .replace(/(--[^\n]*)/g, '<span class="com">$1</span>')
      .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="str">$1</span>')
      .replace(/\b(WITH|SELECT|FROM|WHERE|AND|OR|AS|CASE|WHEN|THEN|ELSE|END|JOIN|ON|GROUP BY|ORDER BY|ALL|DISTINCT|LIMIT|OVER|PARTITION BY|IN|IS|NULL|NOT|BETWEEN|LIKE|DESC|ASC|UNNEST|ARRAY|STRUCT|TRUE|FALSE)\b/g, '<span class="kw">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="num">$1</span>');
  }
  function block(s) {
    let h = `<div class="d-block">`;
    if (s.h) h += `<h3>${s.h}</h3>`;
    (s.p || []).forEach(t => h += `<p>${t}</p>`);
    if (s.ul) h += `<ul>${s.ul.map(t => `<li>${t}</li>`).join("")}</ul>`;
    if (s.ol) h += `<ol>${s.ol.map(t => `<li>${t}</li>`).join("")}</ol>`;
    if (s.pre) h += `<pre class="ascii">${esc(s.pre)}</pre>`;
    return h + `</div>`;
  }
  // Na prévia (site aberto dentro de outra página) painéis de outros domínios são bloqueados.
  const EMBEDDED_PREVIEW = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
  function embedHTML(e, title) {
    if (!e) return "";
    const label = { powerbi: "Power BI · painel interativo", looker: "Looker Studio · painel interativo", pdf: "Documento PDF" }[e.type];
    const open = e.type === "pdf" ? e.url.replace("/preview", "/view") : e.url.replace("/embed/reporting", "/reporting");
    const isPdf = e.type === "pdf";
    const bars = Array.from({ length: 14 }, (_, i) => 25 + (hash(title + i) % 70)).map(v => `<i style="height:${v}%"></i>`).join("");
    const poster = `<div class="embed-poster">
        <div class="ep-mock" aria-hidden="true">
          ${isPdf ? `<div class="ep-doc"><span></span><span></span><span class="s"></span><span></span><span class="s"></span><span></span></div>`
                  : `<div class="ep-kpis"><b></b><b></b><b></b></div><div class="ep-bars">${bars}</div>`}
        </div>
        <div class="ep-info">
          <span class="ep-ico">${isPdf ? ICONS.layers : ICONS.chart}</span>
          <b>${esc(title)}</b>
          <small>${label}</small>
          ${EMBEDDED_PREVIEW
            ? `<a class="btn btn-primary btn-sm" href="${esc(open)}" target="_blank" rel="noopener">Abrir ${isPdf ? "documento" : "painel"} ↗</a><em>Nesta prévia o ${isPdf ? "documento" : "painel"} abre em uma nova aba. No site publicado ele carrega aqui.</em>`
            : `<button class="btn btn-primary btn-sm" type="button" data-load>▶ Carregar ${isPdf ? "documento" : "painel interativo"}</button>`}
        </div>
      </div>`;
    return `<div class="embed-wrap"><div class="embed-bar"><span>${label}</span><a class="btn btn-ghost btn-sm" href="${esc(open)}" target="_blank" rel="noopener">Abrir em tela cheia ↗</a></div>
      <div class="embed ${isPdf ? "ratio-pdf" : "ratio-16x9"}" data-src="${esc(e.url)}" data-title="${esc(title)}">${poster}</div></div>`;
  }
  function openProject(id, push = true) {
    const p = P.find(x => x.id === id); if (!p) return;
    const c = catById[p.cat];
    let h = `<div class="d-head">
      <div class="cat-line"><span class="tag tag-cat">${esc(c.label)}</span>${p.live ? '<span class="tag tag-live">Publicado · no ar</span>' : ""}</div>
      <h2 id="dTitle">${esc(p.title)}</h2>
      ${p.subtitle ? `<div class="sub">${esc(p.subtitle)}</div>` : ""}
      <p class="sum">${p.summary}</p>
      <div class="chips">${(p.stack || []).map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      <div class="d-acts">${(p.links || []).map(l => `<a class="btn ${l.primary ? "btn-primary" : "btn-ghost"} btn-sm" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>
    </div>`;
    h += embedHTML(p.embed, p.title);
    if (p.intro) h += block({ p: p.intro });
    (p.sections || []).forEach(s => h += block(s));
    if (p.code) {
      const fname = p.code.src.split("/").pop().replace(".txt", "");
      h += `<div class="d-block"><h3>Segue a query</h3>
        <div class="macbook" id="codeBox">
          <div class="mb-lid"><div class="mb-screen"><span class="mb-notch"></span>
            <div class="mac-win">
              <div class="mac-bar">
                <span class="mac-dots"><i class="r"></i><i class="y"></i><i class="g"></i></span>
                <span class="mac-tabs"><span class="mac-tab on"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/></svg>${esc(fname)}</span><span class="mac-path">${esc(p.code.label)}</span></span>
                <span class="mac-acts"><button type="button" id="codeCopy">Copiar</button><button type="button" id="codeExp">Expandir</button></span>
              </div>
              <div class="mac-body"><pre><code>Carregando…</code></pre></div>
              <div class="mac-status"><span>● SQL</span><span id="codeLines"></span><span>UTF-8</span><span>BigQuery Standard SQL</span></div>
            </div>
          </div></div>
          <div class="mb-base"><span class="mb-groove"></span></div>
        </div></div>`;
    }
    if (p.images && p.images.length) h += `<div class="d-block"><h3>${p.code ? "Exemplo dos dados" : "Imagens do projeto"}</h3><div class="gallery">${p.images.map(im => `<figure data-src="${esc(im.src)}" data-cap="${esc(im.cap)}"><div class="im">${imgHTML(im.src, im.cap, "gallery")}</div><figcaption>${esc(im.cap)}</figcaption></figure>`).join("")}</div></div>`;
    $("#drawerBody").innerHTML = h;
    drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".drawer-panel").scrollTop = 0;
    if (push) { try { history.replaceState(null, "", "#projeto-" + id); } catch (e) {} }
    if (p.code) {
      fetch(p.code.src).then(r => r.text()).then(t => {
        $("#codeBox pre code").innerHTML = sqlHighlight(t.replace(/\n$/, "")).split("\n").map((l, i) => `<span class="ln">${i + 1}</span>${l || " "}`).join("\n");
        $("#codeLines").textContent = `${t.trim().split("\n").length} linhas`;
        $("#codeCopy").onclick = async () => { try { await navigator.clipboard.writeText(t); $("#codeCopy").textContent = "Copiado!"; } catch (e) { $("#codeCopy").textContent = "Selecione e copie"; } };
      }).catch(() => { $("#codeBox pre code").textContent = "Não foi possível carregar a query."; });
      $("#codeExp").onclick = () => { const b = $("#codeBox"); b.classList.toggle("expanded"); $("#codeExp").textContent = b.classList.contains("expanded") ? "Recolher" : "Expandir"; };
    }
    $$(".embed [data-load]").forEach(b => b.addEventListener("click", () => {
      const box = b.closest(".embed");
      box.insertAdjacentHTML("beforeend", `<iframe src="${box.dataset.src}" title="${box.dataset.title}" allowfullscreen></iframe><div class="ep-loading"><span class="ai-dots"><i></i><i></i><i></i></span>Carregando painel…</div>`);
      $(".embed-poster", box).classList.add("gone");
      $("iframe", box).addEventListener("load", () => { const l = $(".ep-loading", box); l && l.remove(); });
    }));
    $$(".gallery figure").forEach(f => f.addEventListener("click", () => { if (!$("img", f)) return; $("#lbImg").src = f.dataset.src; $("#lbCap").textContent = f.dataset.cap; $("#lightbox").classList.add("open"); }));
  }
  function closeDrawer() {
    drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); document.body.style.overflow = "";
    try { history.replaceState(null, "", "#projetos"); } catch (e) {}
  }
  $$("[data-close]", drawer).forEach(b => b.addEventListener("click", closeDrawer));
  $("#lightbox").addEventListener("click", () => $("#lightbox").classList.remove("open"));

  /* ---------- CMD K ---------- */
  const cmdk = $("#cmdk"), cIn = $("#cmdkInput"), cList = $("#cmdkList");
  let cSel = 0, cRes = [];
  function cRender() {
    const q = cIn.value.trim().toLowerCase();
    cRes = P.filter(p => !q || (p.title + " " + (p.stack || []).join(" ") + " " + catById[p.cat].label).toLowerCase().includes(q)).slice(0, 12);
    cSel = Math.min(cSel, Math.max(cRes.length - 1, 0));
    cList.innerHTML = cRes.map((p, i) => `<li class="${i === cSel ? "sel" : ""}" data-id="${p.id}"><span>${esc(p.title)}</span><small>${esc(catById[p.cat].label)}</small></li>`).join("") || `<li><small>Nada encontrado</small></li>`;
    $$("li[data-id]", cList).forEach(li => li.addEventListener("click", () => { closeCmdk(); openProject(li.dataset.id); }));
  }
  function openCmdk() { cmdk.classList.add("open"); cmdk.setAttribute("aria-hidden", "false"); cIn.value = ""; cSel = 0; cRender(); setTimeout(() => cIn.focus(), 30); }
  function closeCmdk() { cmdk.classList.remove("open"); cmdk.setAttribute("aria-hidden", "true"); }
  $("#openSearch").addEventListener("click", openCmdk);
  $$("[data-cclose]").forEach(b => b.addEventListener("click", closeCmdk));
  cIn.addEventListener("input", () => { cSel = 0; cRender(); });
  cIn.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { cSel = Math.min(cSel + 1, cRes.length - 1); cRender(); e.preventDefault(); }
    if (e.key === "ArrowUp") { cSel = Math.max(cSel - 1, 0); cRender(); e.preventDefault(); }
    if (e.key === "Enter" && cRes[cSel]) { closeCmdk(); openProject(cRes[cSel].id); }
  });
  addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openCmdk(); }
    if (e.key === "Escape") { closeCmdk(); if (drawer.classList.contains("open")) closeDrawer(); $("#lightbox").classList.remove("open"); }
  });

  /* ---------- ABOUT / CERTS / COURSES ---------- */
  const person = D.person;
  $("#bioTitle").textContent = person.bioTitle;
  $("#photo").outerHTML = imgHTML(person.photo, "Foto de " + person.name, "photo");
  $("#pName").textContent = person.fullName;
  $("#pRole").textContent = person.role;
  $("#pLoc").textContent = person.location;
  $("#bio").textContent = person.bio;
  $("#skills").innerHTML = person.skills.map(s => `<span class="chip">${esc(s)}</span>`).join("");
  const soc = person.social.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${SOCIAL_ICON[s.label] || ""}${esc(s.label)}</a>`).join("");
  $("#social").innerHTML = soc; $("#socialFoot").innerHTML = soc;
  $("#certGrid").innerHTML = D.certifications.map(c => `<div class="glass cert reveal"><div class="img">${imgHTML(c.img, c.name, "cert", c.issuer)}</div><b>${esc(c.name)}</b><small class="muted" style="text-align:center;font-size:12px;margin-top:-8px">${esc(c.issuer || "")}</small></div>`).join("");
  $("#courseGrid").innerHTML = D.courses.map(c => `<a class="glass course reveal" href="${esc(c.url)}" target="_blank" rel="noopener">
      <span class="badge">${c.img ? imgHTML(c.img, c.name, "course", c.kind) : esc(c.kind)}</span>
      <span><b>${esc(c.name)}</b><small>${esc(c.detail)}</small></span><span class="go">↗</span></a>`).join("");

  $("#timeline").innerHTML = (D.career || []).map((c, i) => `<article class="glass tl-item ${i === 0 ? "now" : ""}">
      <div class="tl-top"><b>${esc(c.role)}</b><span class="co">${esc(c.company)}</span><span class="when">${esc(c.period)} · ${esc(c.place)}</span></div>
      <p>${esc(c.text)}</p><div class="chips">${c.stack.map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div></article>`).join("");

  /* ---------- nav + reveal + hash ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { $$(".nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); }
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section").forEach(s => io.observe(s));
  const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } }), { threshold: .12 });
  $$(".reveal, .section-head, .glass").forEach(el => { el.classList.add("reveal"); ro.observe(el); });

  function route() {
    const h = location.hash.replace("#", "");
    if (h.startsWith("projeto-")) openProject(h.slice(8), false);
  }
  addEventListener("hashchange", route);

  renderCats(); renderList(); route();
})();
