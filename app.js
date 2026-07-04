/* CapiMenú — lógica. Sin backend: todo el estado vive en localStorage.
   Fork de MichiMenú adaptado a Chile: porciones ella/hijo, lista de compras
   Feria vs Súper (links a Lider.cl solo en súper), botón de feedback por
   WhatsApp, y onboarding con quiz cuando aún no hay semanas. */
"use strict";

const WEEK = CAPI_DATA.weeks[CAPI_DATA.weeks.length - 1] || null;
const RECIPES = CAPI_DATA.recipes;
const SLOTS = ["desayuno", "almuerzo", "once"];
const STORE_KEY = "capimenu_v1";

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}
function saveState() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
const state = loadState();
state.meals = state.meals || {};   // { "s1.0.almuerzo": true }
state.shop  = state.shop  || {};   // { "s1.Feria 🍅.Tomates": true }
state.antojos = state.antojos || []; // [ {t, d} ]

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
}

// Lunes = 0 … Domingo = 6
function todayIndex() { return (new Date().getDay() + 6) % 7; }

/* ---------- onboarding (sin semanas todavía) ---------- */
function renderOnboarding() {
  return `
    <div class="card onboard-hero">
      <img src="icon.svg" alt="">
      <h2>¡Hola! Soy CapiMenú 🦫</h2>
      <p style="margin-top:8px">Tu menú semanal llega aquí. Para armar el primero,
      necesitamos conocerlas: responde el quiz de gustos (el tuyo y el de tu hijo)
      y compártelo — tu primera semana aparece después de eso.</p>
    </div>
    <a class="btn" href="quiz.html">📝 Empezar el quiz</a>
    <div class="ios-tip">📱 <b>Importante (iPhone):</b> en Safari toca
    <b>Compartir → Agregar a pantalla de inicio</b>. Si no lo instalas,
    Safari borra lo guardado después de 7 días sin usarlo.</div>`;
}

/* ---------- render: Hoy ---------- */
function mealRow(dayIdx, slot) {
  const rid = WEEK.days[dayIdx][slot];
  const r = RECIPES[rid];
  const key = `${WEEK.id}.${dayIdx}.${slot}`;
  const done = !!state.meals[key];
  return `<div class="meal ${done ? "done" : ""}" data-recipe="${esc(rid)}">
    <div class="emoji">${r.emoji}</div>
    <div class="info">
      <div class="slot">${slot}</div>
      <div class="title">${esc(r.t)}</div>
    </div>
    <button class="check" data-check="${esc(key)}" aria-label="marcar">✓</button>
  </div>`;
}

function renderHoy() {
  const i = todayIndex();
  const day = WEEK.days[i];
  return `
    <div class="card">
      <h2>${esc(day.name)} · ¿qué toca hoy?</h2>
      ${SLOTS.map(s => mealRow(i, s)).join("")}
    </div>
    <div class="card"><h2>Snack</h2><p class="snack-note">${esc(WEEK.snack)}</p></div>
    <div class="card"><h2>Reglas de la semana</h2>
      <ul class="rules">${WEEK.rules.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
    </div>`;
}

/* ---------- render: Semana ---------- */
function renderSemana() {
  const t = todayIndex();
  const days = WEEK.days.map((d, i) => `
    <div class="day-block">
      <div class="day-name ${i === t ? "today" : ""}">${esc(d.name)}</div>
      ${SLOTS.map(s => {
        const r = RECIPES[d[s]];
        return `<div class="mini-meal" data-recipe="${esc(d[s])}">
          <span class="slot">${s}</span><span>${r.emoji} ${esc(r.t)}</span>
        </div>`;
      }).join("")}
    </div>`).join("");
  return `
    <div class="card">${days}</div>
    <div class="card"><h2>${esc(WEEK.prep.title)}</h2>
      <ul class="prep-list">${WEEK.prep.items.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>`;
}

/* ---------- render: Compras ---------- */
function liderUrl(name) {
  return "https://www.lider.cl/supermercado/search?query=" + encodeURIComponent(name);
}
function renderSuper() {
  const cats = WEEK.shopping.map(cat => `
    <div class="shop-cat">${esc(cat.cat)}</div>
    ${cat.items.map(it => {
      const key = `${WEEK.id}.${cat.cat}.${it.n}`;
      const done = !!state.shop[key];
      const link = cat.links
        ? `<a class="store-link" target="_blank" rel="noopener" href="${liderUrl(it.n)}">Líder ↗</a>` : "";
      return `<div class="shop-item ${done ? "done" : ""}">
        <label><input type="checkbox" data-shop="${esc(key)}" ${done ? "checked" : ""}>
          <span class="name">${esc(it.n)}</span></label>
        <span class="qty">${esc(it.q)}</span>${link}
      </div>`;
    }).join("")}`).join("");
  return `
    <div class="card">${cats}</div>
    <button class="btn secondary" id="copy-list">📋 Copiar lista completa</button>
    <button class="btn" id="reset-shop" style="margin-top:8px">🧹 Desmarcar todo (compra nueva)</button>`;
}
function shoppingText() {
  let out = `CapiMenú 🦫 — ${WEEK.label} (${WEEK.dates})\n`;
  for (const cat of WEEK.shopping) {
    out += `\n${cat.cat}\n`;
    for (const it of cat.items) out += `  • ${it.n} — ${it.q}\n`;
  }
  return out;
}

/* ---------- render: Antojos ---------- */
function renderAntojos() {
  const list = state.antojos.length
    ? state.antojos.map((a, i) => `<div class="antojo">
        <span class="txt">${esc(a.t)}</span>
        <span class="date">${esc(a.d)}</span>
        <button class="del" data-del="${i}" aria-label="borrar">✕</button>
      </div>`).join("")
    : `<div class="empty">Nada por ahora.<br>¿Se antoja algo para la próxima semana? 🦫</div>`;
  return `
    <div class="antojo-form">
      <input id="antojo-input" type="text" maxlength="80" placeholder="Se me antojan unas sopaipillas…">
      <button id="antojo-add" aria-label="agregar">＋</button>
    </div>
    <div class="card">${list}</div>
    <button class="btn" id="send-feedback">📤 Enviar feedback de la semana</button>
    <p class="snack-note" style="padding:8px 6px 0">Al final de la semana, toca el botón:
    arma un resumen (qué comieron, qué no, antojos) y lo manda por WhatsApp
    para que el próximo menú llegue mejorado. 🍊</p>`;
}

/* ---------- feedback semanal ---------- */
function feedbackText() {
  let out = `CapiMenú 🦫 — feedback de ${WEEK.label} (${WEEK.dates})\n`;
  WEEK.days.forEach((d, i) => {
    out += `\n${d.name}\n`;
    for (const s of SLOTS) {
      const r = RECIPES[d[s]];
      const done = !!state.meals[`${WEEK.id}.${i}.${s}`];
      out += `  ${done ? "✅" : "▫️"} ${s}: ${r.t}\n`;
    }
  });
  out += `\nAntojos para la próxima semana:\n`;
  out += state.antojos.length
    ? state.antojos.map(a => `  • ${a.t}`).join("\n") + "\n"
    : "  (ninguno)\n";
  out += `\nComentarios: `;
  return out;
}
function shareText(text, btn, doneLabel) {
  if (navigator.share) {
    navigator.share({ text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = doneLabel;
      setTimeout(() => render(), 1800);
    });
  }
}

/* ---------- recipe modal ---------- */
function openRecipe(rid) {
  const r = RECIPES[rid];
  if (!r) return;
  const ings = r.ing.map(i => {
    const same = i.e === i.h;
    const amt = same ? `<b>${esc(i.e)}</b>`
      : `<b>${esc(i.e)}</b> ella<br><b>${esc(i.h)}</b> hijo`;
    return `<div class="ing"><span>${esc(i.n)}</span><span class="amt">${amt}</span></div>`;
  }).join("");
  document.getElementById("sheet").innerHTML = `
    <div class="handle"></div>
    <h3>${r.emoji} ${esc(r.t)}</h3>
    <div class="time">⏱ ${esc(r.time)}</div>
    <h4>Ingredientes</h4>${ings}
    <h4>Preparación</h4>
    <ol class="steps">${r.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
    <details class="nutri"><summary>Info nutricional (ella)</summary>
      <p>${esc(r.nutri.e)}</p>
    </details>`;
  document.getElementById("modal").classList.add("open");
}
document.getElementById("modal").addEventListener("click", e => {
  if (e.target.id === "modal") e.target.classList.remove("open");
});

/* ---------- tabs + events ---------- */
let tab = "hoy";
const RENDERERS = { hoy: renderHoy, semana: renderSemana, super: renderSuper, antojos: renderAntojos };

function render() {
  if (!WEEK) {
    document.getElementById("view").innerHTML = renderOnboarding();
    document.getElementById("nav").style.display = "none";
    return;
  }
  document.getElementById("view").innerHTML = RENDERERS[tab]();
  document.querySelectorAll("#nav button").forEach(b =>
    b.classList.toggle("active", b.dataset.tab === tab));
}

document.getElementById("nav").addEventListener("click", e => {
  const b = e.target.closest("button[data-tab]");
  if (!b) return;
  tab = b.dataset.tab;
  render();
});

document.getElementById("view").addEventListener("click", e => {
  const check = e.target.closest("[data-check]");
  if (check) {
    const k = check.dataset.check;
    state.meals[k] = !state.meals[k];
    saveState(); render(); return;
  }
  const shop = e.target.closest("[data-shop]");
  if (shop) {
    state.shop[shop.dataset.shop] = shop.checked;
    saveState(); render(); return;
  }
  if (e.target.closest(".store-link")) return; // dejar pasar el link
  const del = e.target.closest("[data-del]");
  if (del) {
    state.antojos.splice(Number(del.dataset.del), 1);
    saveState(); render(); return;
  }
  if (e.target.id === "antojo-add") { addAntojo(); return; }
  if (e.target.id === "copy-list") {
    navigator.clipboard.writeText(shoppingText()).then(() => {
      e.target.textContent = "✅ ¡Copiada!";
      setTimeout(() => { if (tab === "super") render(); }, 1500);
    });
    return;
  }
  if (e.target.id === "send-feedback") {
    shareText(feedbackText(), e.target, "✅ Copiado — pégalo en WhatsApp");
    return;
  }
  if (e.target.id === "reset-shop") {
    if (confirm("¿Desmarcar toda la lista de compras?")) {
      state.shop = {}; saveState(); render();
    }
    return;
  }
  const meal = e.target.closest("[data-recipe]");
  if (meal) openRecipe(meal.dataset.recipe);
});

document.getElementById("view").addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.id === "antojo-input") addAntojo();
});

function addAntojo() {
  const inp = document.getElementById("antojo-input");
  const t = inp.value.trim();
  if (!t) return;
  const d = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "short" });
  state.antojos.push({ t, d });
  saveState(); render();
}

/* ---------- init ---------- */
document.getElementById("week-label").innerHTML = WEEK
  ? `${esc(WEEK.label)}<br>${esc(WEEK.dates)}` : "";
render();

if ("serviceWorker" in navigator && location.protocol === "https:") {
  navigator.serviceWorker.register("sw.js");
}
