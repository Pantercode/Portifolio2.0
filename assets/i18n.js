/* ===================== Idioma (PT / EN) =====================
   - O idioma vem de ?lang=en|pt na URL, senão do localStorage, senão português.
   - Textos fixos do index.html: atributos data-en, data-en-html, data-en-placeholder,
     data-en-aria-label e data-en-content guardam a versão em inglês.
   - Conteúdo (projetos, bio, carreira...): assets/data.en.js sobrepõe o data.js.
   - Nos scripts, use window.L("texto em português", "text in English"). */
(() => {
  const KEY = "portfolio-lang";
  const fromUrl = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  const lang = fromUrl === "en" || fromUrl === "pt" ? fromUrl : saved === "en" ? "en" : "pt";
  try { localStorage.setItem(KEY, lang); } catch (e) {}

  const EN = lang === "en";
  window.LANG = lang;
  window.L = (pt, en) => (EN ? en : pt);
  document.documentElement.lang = EN ? "en" : "pt-BR";

  /* ---------- textos fixos da página ---------- */
  if (EN) {
    document.querySelectorAll("[data-en]").forEach(el => { el.textContent = el.dataset.en; });
    document.querySelectorAll("[data-en-html]").forEach(el => { el.innerHTML = el.dataset.enHtml; });
    document.querySelectorAll("[data-en-placeholder]").forEach(el => { el.placeholder = el.dataset.enPlaceholder; });
    document.querySelectorAll("[data-en-aria-label]").forEach(el => el.setAttribute("aria-label", el.dataset.enAriaLabel));
    document.querySelectorAll("[data-en-content]").forEach(el => el.setAttribute("content", el.dataset.enContent));
  }

  /* ---------- conteúdo ---------- */
  const D = window.PORTFOLIO, T = window.PORTFOLIO_EN;
  if (EN && D && T) {
    const tr = s => (T.terms && T.terms[s]) || s;
    Object.assign(D.person, T.person || {});
    if (T.skillGroups) D.person.skillGroups.forEach((g, i) => { g.h = T.skillGroups[i] || g.h; g.items = g.items.map(tr); });
    if (T.career) D.career.forEach((c, i) => { Object.assign(c, T.career[i] || {}); c.stack = c.stack.map(tr); });
    Object.assign(D.ai, T.ai || {});
    if (T.courses) D.courses.forEach((c, i) => Object.assign(c, T.courses[i] || {}));
    D.categories.forEach(c => { if (T.categories && T.categories[c.id]) c.label = T.categories[c.id]; });
    D.projects.forEach(p => {
      const o = (T.projects || {})[p.id];
      p.stack = (p.stack || []).map(tr);
      if (!o) return;
      ["title", "subtitle", "summary", "intro", "sections"].forEach(k => { if (o[k] !== undefined) p[k] = o[k]; });
      if (o.links && p.links) p.links.forEach((l, i) => { if (o.links[i]) l.label = o.links[i]; });
      if (o.images && p.images) p.images.forEach((im, i) => { if (o.images[i]) im.cap = o.images[i]; });
      if (o.code && p.code) p.code.label = o.code;
    });
  }

  /* ---------- botão PT | EN ---------- */
  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.querySelectorAll("[data-lang]").forEach(s => s.classList.toggle("on", s.dataset.lang === lang));
    btn.addEventListener("click", () => {
      const next = EN ? "pt" : "en";
      try { localStorage.setItem(KEY, next); } catch (e) {}
      const url = new URL(location.href);
      url.searchParams.set("lang", next);
      location.href = url.toString();
    });
  }
})();
