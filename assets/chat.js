/* ===================== Marcell.AI · assistente embutido ===================== */
(() => {
  const D = window.PORTFOLIO, AI = D.ai;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const history = [];
  let busy = false;

  /* ---------- markup ---------- */
  const launcher = document.body.appendChild(Object.assign(document.createElement("button"), { className: "ai-launch", type: "button", ariaLabel: "Abrir assistente de IA" }));
  launcher.innerHTML = `<span class="ai-core"></span><span class="ai-txt"><b>Pergunte à IA</b><small>sobre o Marcell</small></span>`;

  const panel = document.body.appendChild(Object.assign(document.createElement("div"), { className: "ai-panel", role: "dialog", ariaLabel: "Assistente de IA" }));
  panel.innerHTML = `
    <header class="ai-head">
      <span class="ai-avatar"><span class="ai-core"></span></span>
      <div><b>${esc(AI.name)}</b><small><i></i> online · Gemini</small></div>
      <button class="ai-x" type="button" aria-label="Fechar">×</button>
    </header>
    <div class="ai-log" id="aiLog" aria-live="polite"></div>
    <div class="ai-sugs" id="aiSugs">${AI.suggestions.map(s => `<button type="button">${esc(s)}</button>`).join("")}</div>
    <form class="ai-form" id="aiForm">
      <input id="aiIn" maxlength="800" autocomplete="off" placeholder="Pergunte algo sobre os projetos…" />
      <button type="submit" aria-label="Enviar"><svg viewBox="0 0 24 24"><path d="M4 12 20 4l-6 16-3-7z"/></svg></button>
    </form>
    <p class="ai-note">Respostas geradas por IA a partir do conteúdo deste portfólio.</p>`;
  const log = $("#aiLog", panel), input = $("#aiIn", panel);

  /* ---------- render ---------- */
  function md(text) {
    let h = esc(text)
      .replace(/\[([^\]]+)\]\((#projeto-[a-z0-9-]+|https?:\/\/[^\s)]+)\)/gi, (_, t, u) => `<a href="${u}"${u.startsWith("#") ? "" : ' target="_blank" rel="noopener"'}>${t}</a>`)
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    const lines = h.split("\n"); let out = "", inList = false;
    for (const l of lines) {
      const m = l.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)/);
      if (m) { if (!inList) { out += "<ul>"; inList = true; } out += `<li>${m[1]}</li>`; }
      else { if (inList) { out += "</ul>"; inList = false; } if (l.trim()) out += `<p>${l}</p>`; }
    }
    return out + (inList ? "</ul>" : "");
  }
  function bubble(role, html) {
    const el = document.createElement("div");
    el.className = `ai-msg ${role}`;
    el.innerHTML = html;
    log.appendChild(el); log.scrollTop = log.scrollHeight;
    return el;
  }
  function typeInto(el, text) {
    return new Promise(res => {
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { el.innerHTML = md(text); return res(); }
      let i = 0; const step = Math.max(2, Math.round(text.length / 120));
      (function tick() {
        i = Math.min(text.length, i + step);
        el.innerHTML = md(text.slice(0, i)) + (i < text.length ? '<span class="ai-caret"></span>' : "");
        log.scrollTop = log.scrollHeight;
        if (i < text.length) setTimeout(tick, 16); else res();
      })();
    });
  }

  /* ---------- modo demonstração (quando não há /api/chat, ex.: prévia local) ---------- */
  function localAnswer(q) {
    const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const stop = new Set("que quais qual de do da dos das um uma o a os as e em com para por me mostra sobre ele dele tem usa usam projeto projetos marcell".split(" "));
    const terms = norm(q).split(/[^a-z0-9.+#]+/).filter(t => t.length > 1 && !stop.has(t));
    if (/trajet|carreira|experien|empresa|trabalh/.test(norm(q)))
      return "Resumo da trajetória do Marcell:\n" + D.career.slice(0, 5).map(c => `- **${c.role}** · ${c.company} (${c.period})`).join("\n") + "\n\nVeja mais na seção Trajetória.";
    const scored = D.projects.map(p => {
      const hay = norm([p.title, p.summary, (p.stack || []).join(" "), p.cat].join(" "));
      return { p, s: terms.reduce((a, t) => a + (hay.includes(t) ? 1 : 0), 0) + (/\bia\b|gemini|generativ|agente/.test(norm(q)) && p.live ? 2 : 0) };
    }).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 4);
    if (!scored.length) return "Não encontrei um projeto sobre isso. Tente perguntar por uma tecnologia (Power BI, dbt, PySpark, Gemini, SQL) ou por um tema.";
    return "Encontrei estes projetos:\n" + scored.map(({ p }) => `- [${p.title}](#projeto-${p.id}) · ${(p.stack || []).slice(0, 3).join(", ")}`).join("\n") +
      "\n\n(Modo demonstração: com o site publicado na Vercel, a IA responde em linguagem natural.)";
  }

  async function ask(q) {
    q = q.trim(); if (!q || busy) return;
    busy = true; $("#aiSugs", panel).style.display = "none";
    bubble("user", esc(q));
    const wait = bubble("bot", '<span class="ai-dots"><i></i><i></i><i></i></span>');
    let reply, ok = false;
    try {
      const ctrl = new AbortController(); const to = setTimeout(() => ctrl.abort(), 25000);
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: q, history }), signal: ctrl.signal });
      clearTimeout(to);
      const j = await r.json().catch(() => null);
      if (r.ok && j && j.reply) { reply = j.reply; ok = true; }
      else if (j && j.error && r.status === 429) reply = j.error;
      else reply = localAnswer(q);
    } catch (e) { reply = localAnswer(q); }
    await typeInto(wait, reply);
    if (ok) { history.push({ role: "user", text: q }, { role: "model", text: reply }); }
    busy = false; input.focus();
  }

  /* ---------- abrir/fechar ---------- */
  let greeted = false;
  function open(q) {
    panel.classList.add("open"); launcher.classList.add("hide");
    if (!greeted) { greeted = true; typeInto(bubble("bot", ""), AI.greeting); }
    setTimeout(() => input.focus(), 250);
    if (q) ask(q);
  }
  function close() { panel.classList.remove("open"); launcher.classList.remove("hide"); }
  launcher.addEventListener("click", () => open());
  $(".ai-x", panel).addEventListener("click", close);
  $("#aiForm", panel).addEventListener("submit", e => { e.preventDefault(); const v = input.value; input.value = ""; ask(v); });
  $("#aiSugs", panel).addEventListener("click", e => { if (e.target.tagName === "BUTTON") ask(e.target.textContent); });
  log.addEventListener("click", e => { const a = e.target.closest('a[href^="#projeto-"]'); if (a && innerWidth < 820) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && panel.classList.contains("open")) close(); });

  window.MarcellAI = { open, ask };
  document.querySelectorAll("[data-ai]").forEach(b => b.addEventListener("click", e => {
    e.preventDefault();
    const src = b.dataset.ai && document.querySelector(b.dataset.ai);
    open(src ? src.value : "");
  }));
})();
