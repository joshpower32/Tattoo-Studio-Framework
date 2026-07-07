/* =====================================================================
   VANTA — Custom Tattoo Studio Framework
   Styles, filterable work gallery + lightbox, artists, rates, consult form
   ===================================================================== */

const CONFIG = {
  studioQuery: "tattoo studio interior dark",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  ownerEmail: "hello@vantatattoo.ca",
  businessName: "VANTA Tattoo Studio",
  phone: "(905) 555-8268",
};

/* ---------- Styles we do ---------- */
const STYLES = [
  { id: "blackwork", name: "Blackwork", desc: "Bold, geometric, and heavy black — built to age beautifully.", query: "blackwork tattoo arm" },
  { id: "fineline", name: "Fine Line", desc: "Delicate single-needle work: botanicals, script, micro pieces.", query: "fine line tattoo" },
  { id: "colour", name: "Colour Realism", desc: "Saturated, layered colour that stays vivid after healing.", query: "colorful tattoo sleeve" },
  { id: "traditional", name: "Traditional", desc: "Clean lines, classic palettes, flash done the old way — custom.", query: "traditional tattoo old school" },
];

/* ---------- Work gallery (filterable) ---------- */
const WORK_FILTERS = [
  { id: "all", label: "All work" },
  { id: "blackwork", label: "Blackwork" },
  { id: "fineline", label: "Fine line" },
  { id: "colour", label: "Colour" },
  { id: "traditional", label: "Traditional" },
];
const WORK = [
  { style: "blackwork", label: "Geometric blackwork, leg", query: "geometric tattoo black" },
  { style: "fineline", label: "Fine-line session in progress", query: "tattoo artist working" },
  { style: "colour", label: "Colour dragons, hands", query: "tattoo hands detail" },
  { style: "blackwork", label: "Back piece, healed", query: "back tattoo woman" },
  { style: "fineline", label: "Single-needle detail", query: "tattoo close up skin" },
  { style: "traditional", label: "Traditional, walk-in Friday", query: "traditional tattoo session" },
  { style: "blackwork", label: "Blackwork in progress", query: "tattoo machine closeup" },
  { style: "colour", label: "Colour sleeve, leg", query: "colorful tattoo leg" },
];

/* ---------- Artists ---------- */
const ARTISTS = [
  { name: "Mara Voss", role: "Fine Line & Botanical", bio: "Single-needle specialist. If it's delicate, meaningful, and barely-there, it's Mara.", ig: "@mara.vanta", query: "tattoo artist portrait woman" },
  { name: "Dante Ruiz", role: "Blackwork & Geometric", bio: "Heavy black, sacred geometry, and cover-ups nobody believes were cover-ups.", ig: "@dante.vanta", query: "tattoo artist portrait man" },
  { name: "Theo Marsh", role: "Colour Realism", bio: "Layered colour that heals as loud as it looks on day one.", ig: "@theo.vanta", query: "tattooed man portrait beard" },
];

/* ---------- Rates ---------- */
const RATES = [
  { name: "Hourly", price: "$180", unit: "/ hour", features: ["Small and medium pieces", "Billed to the quarter hour", "Free 30-minute consult", "Aftercare kit included"] },
  { name: "Half-Day", price: "$650", unit: "≈ 4 hours", featured: true, badge: "Most booked", features: ["Most medium and large pieces", "Design session included", "Private room, one artist", "Aftercare kit + check-in"] },
  { name: "Full Day", price: "$1,200", unit: "≈ 7 hours", features: ["Sleeves, back pieces, big projects", "Multi-session planning", "Priority rebooking", "Free touch-up session"] },
];

/* ---------- Reviews ---------- */
const REVIEWS = [
  { quote: "Dante turned my grandfather's handwriting into a piece I look at every day. The consult made all the difference.", name: "Alicia G." },
  { quote: "Cleanest studio I've been in — private room, no egos, and the healed result looks exactly like the drawing.", name: "Mark T." },
  { quote: "Flew back from Vancouver for my second session with Mara. Worth every kilometre.", name: "Priya S." },
];

// --- Demo photos: pinned Pexels shots, keyed by query -------------------
// Direct image URLs load with the page — no API call, no key, no pop-in.
// To change a photo: browse pexels.com, copy the image address, paste here.
const PEXELS_PHOTOS = {
  "blackwork tattoo arm": { u: "https://images.pexels.com/photos/14565781/pexels-photo-14565781.jpeg", p: "Cindy Bartillon" },
  "fine line tattoo": { u: "https://images.pexels.com/photos/19669302/pexels-photo-19669302.jpeg", p: "Ayberk Mirza" },
  "colorful tattoo sleeve": { u: "https://images.pexels.com/photos/2186980/pexels-photo-2186980.jpeg", p: "Brett Sayles" },
  "traditional tattoo old school": { u: "https://images.pexels.com/photos/37425498/pexels-photo-37425498.jpeg", p: "Mayara Caroline Mombelli" },
  "geometric tattoo black": { u: "https://images.pexels.com/photos/30814335/pexels-photo-30814335.jpeg", p: "Leonardo Majluf" },
  "tattoo artist working": { u: "https://images.pexels.com/photos/6593484/pexels-photo-6593484.jpeg", p: "Pavel Danilyuk" },
  "tattoo hands detail": { u: "https://images.pexels.com/photos/2226010/pexels-photo-2226010.jpeg", p: "Brett Sayles" },
  "back tattoo woman": { u: "https://images.pexels.com/photos/3061573/pexels-photo-3061573.jpeg", p: "Gaberali" },
  "tattoo close up skin": { u: "https://images.pexels.com/photos/30683835/pexels-photo-30683835.jpeg", p: "Lucas Dalamarta" },
  "traditional tattoo session": { u: "https://images.pexels.com/photos/14242279/pexels-photo-14242279.jpeg", p: "Matt Jerome Connor" },
  "tattoo machine closeup": { u: "https://images.pexels.com/photos/7147779/pexels-photo-7147779.jpeg", p: "Michael Burrows" },
  "colorful tattoo leg": { u: "https://images.pexels.com/photos/2181245/pexels-photo-2181245.jpeg", p: "Brett Sayles" },
  "tattoo artist portrait woman": { u: "https://images.pexels.com/photos/7005727/pexels-photo-7005727.jpeg", p: "AI25.Studio Studio" },
  "tattoo artist portrait man": { u: "https://images.pexels.com/photos/20531533/pexels-photo-20531533.jpeg", p: "Franco Monsalvo" },
  "tattooed man portrait beard": { u: "https://images.pexels.com/photos/10765195/pexels-photo-10765195.jpeg", p: "Александр Полепкин" },
  "tattoo studio interior dark": { u: "https://images.pexels.com/photos/28991646/pexels-photo-28991646.jpeg", p: "Cedé Joey" },
};
// Size an image via Pexels CDN params (w = width; pxCrop also crops to w×h)
const px = (u, w) => `${u}?auto=compress&cs=tinysrgb&w=${w}`;
const pxCrop = (u, w, h) => `${u}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

const $ = (id) => document.getElementById(id);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Styles ---------- */
function renderStyles() {
  $("stylesGrid").innerHTML = STYLES.map((s, i) => {
    const ph = PEXELS_PHOTOS[s.query];
    return `
    <div class="style-card" data-tilt data-fx style="--fx-delay:${i * 90}ms">
      ${ph ? `<img src="${esc(pxCrop(ph.u, 640, 854))}" alt="${esc(s.name)} tattoo example" loading="lazy">` : ""}
      <div class="style-body">
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.desc)}</p>
      </div>
    </div>`;
  }).join("");
}

/* ---------- Work gallery + filter + lightbox ---------- */
let activeFilter = "all";
const workItems = WORK.map((w) => ({ ...w, ph: PEXELS_PHOTOS[w.query] })).filter((w) => w.ph);
let visibleItems = workItems;
let lightboxIndex = 0;

function renderWorkFilters() {
  $("workFilters").innerHTML = WORK_FILTERS.map((f) =>
    `<button class="work-filter ${f.id === activeFilter ? "active" : ""}" aria-pressed="${f.id === activeFilter}" onclick="setWorkFilter('${f.id}')">${esc(f.label)}</button>`
  ).join("");
}

function renderWork() {
  visibleItems = workItems.filter((w) => activeFilter === "all" || w.style === activeFilter);
  const label = (id) => (WORK_FILTERS.find((f) => f.id === id) || {}).label || id;
  $("workGrid").innerHTML = visibleItems.map((w, i) => `
    <button onclick="openLightbox(${i})" aria-label="View piece: ${esc(w.label)}">
      <img src="${esc(pxCrop(w.ph.u, 640, 480))}" alt="${esc(w.label)}" ${i < 3 ? "" : 'loading="lazy"'}>
      <span class="work-tag">${esc(label(w.style))}</span>
    </button>`).join("");
  $("workEmpty").hidden = visibleItems.length > 0;
}

function setWorkFilter(id) {
  activeFilter = id;
  renderWorkFilters();
  renderWork();
}

function showLightboxPhoto() {
  const w = visibleItems[lightboxIndex];
  $("lightboxImg").src = px(w.ph.u, 1600);
  $("lightboxImg").alt = w.label;
  $("lightboxCaption").textContent = `${w.label} — photo: ${w.ph.p} / Pexels`;
}

function openLightbox(i) {
  lightboxIndex = i;
  showLightboxPhoto();
  $("lightbox").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  $("lightbox").hidden = true;
  document.body.style.overflow = "";
}

function lightboxStep(dir) {
  lightboxIndex = (lightboxIndex + dir + visibleItems.length) % visibleItems.length;
  showLightboxPhoto();
}

$("lightboxClose").addEventListener("click", closeLightbox);
$("lightboxPrev").addEventListener("click", () => lightboxStep(-1));
$("lightboxNext").addEventListener("click", () => lightboxStep(1));
$("lightbox").addEventListener("click", (e) => { if (e.target === $("lightbox")) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if ($("lightbox").hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lightboxStep(-1);
  if (e.key === "ArrowRight") lightboxStep(1);
});

/* ---------- Artists ---------- */
function renderArtists() {
  $("artistsGrid").innerHTML = ARTISTS.map((a, i) => {
    const ph = PEXELS_PHOTOS[a.query];
    return `
    <div class="artist-card" data-tilt data-fx style="--fx-delay:${i * 90}ms">
      ${ph ? `<img src="${esc(pxCrop(ph.u, 600, 750))}" alt="${esc(a.name)}, ${esc(a.role)}" loading="lazy">` : ""}
      <div class="artist-body">
        <h3>${esc(a.name)}</h3>
        <span class="artist-role">${esc(a.role)}</span>
        <p>${esc(a.bio)}</p>
        <span class="artist-ig">${esc(a.ig)}</span>
      </div>
    </div>`;
  }).join("");
}

/* ---------- Rates ---------- */
function renderRates() {
  $("ratesGrid").innerHTML = RATES.map((r, i) => `
    <div class="rate-card ${r.featured ? "featured" : ""}" data-fx style="--fx-delay:${i * 90}ms">
      ${r.badge ? `<span class="rate-badge">${esc(r.badge)}</span>` : ""}
      <h3>${esc(r.name)}</h3>
      <div class="rate-amount">${esc(r.price)}<span> ${esc(r.unit)}</span></div>
      <ul>${r.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <a class="btn ${r.featured ? "btn-primary" : "btn-ghost"} btn-block" href="#consult">Book a Consult</a>
    </div>`).join("");
}

/* ---------- Reviews ---------- */
function renderReviews() {
  $("reviewsGrid").innerHTML = REVIEWS.map((r, i) => `
    <div class="review-card" data-fx style="--fx-delay:${i * 90}ms">
      <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>“${esc(r.quote)}”</blockquote>
      <cite>— ${esc(r.name)}</cite>
    </div>`).join("");
}

/* ---------- Consult form ---------- */
const consultForm = $("consultForm");
const consultNote = $("consultNote");
const KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";

async function submitConsult(formData) {
  const firstName = String(formData.get("name") || "there").split(" ")[0];
  const btn = consultForm.querySelector('button[type="submit"]');

  if (formData.get("botcheck")) return; // honeypot

  if (!CONFIG.web3formsKey || CONFIG.web3formsKey === KEY_PLACEHOLDER) {
    const subject = encodeURIComponent(`Consult request — ${formData.get("name") || ""} · ${formData.get("style") || ""}`);
    const body = encodeURIComponent([...formData.entries()].filter(([k]) => k !== "botcheck").map(([k, v]) => `${k}: ${v}`).join("\n"));
    window.location.href = `mailto:${CONFIG.ownerEmail}?subject=${subject}&body=${body}`;
    toast(`Opening your email app to send your consult request…`);
    return;
  }

  const fd = new FormData();
  fd.append("access_key", CONFIG.web3formsKey);
  fd.append("subject", `🖋 NEW CONSULT — ${formData.get("name") || "website"} · ${formData.get("style") || ""}`);
  fd.append("from_name", CONFIG.businessName);
  fd.append("botcheck", "");
  fd.append("Name", formData.get("name") || "");
  fd.append("Phone", formData.get("phone") || "");
  fd.append("Email", formData.get("email") || "");
  fd.append("Artist", formData.get("artist") || "No preference");
  fd.append("Style", formData.get("style") || "");
  fd.append("Placement", formData.get("placement") || "");
  fd.append("Size", formData.get("size") || "");
  fd.append("Idea", formData.get("idea") || "");

  btn.disabled = true;
  const orig = btn.textContent;
  btn.textContent = "Sending…";

  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: fd });
    const data = await res.json();
    if (res.ok && data.success) {
      consultForm.reset();
      toast(`Thanks ${firstName}! Your consult request is in — we'll reply within 48 hours.`);
      consultNote.textContent = "Sent ✓ — we'll reply within 48 hours with available times.";
    } else {
      throw new Error(data.message || "Send failed");
    }
  } catch (_) {
    toast(`Couldn't send your request — please call ${CONFIG.phone} or email ${CONFIG.ownerEmail}.`);
    consultNote.textContent = `Something went wrong. Please call ${CONFIG.phone} or email ${CONFIG.ownerEmail}.`;
  } finally {
    btn.disabled = false;
    btn.textContent = orig;
  }
}

consultForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitConsult(new FormData(consultForm));
});

/* ---------- Mobile nav toggle ---------- */
const navToggle = $("navToggle");
const navLinks = $("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", false);
}));
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Toast notifications ---------- */
let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => (t.hidden = true), 300);
  }, 3500);
}

/* ---------- Studio background ---------- */
function loadStudio() {
  const ph = PEXELS_PHOTOS[CONFIG.studioQuery];
  if (ph) $("studioImg").style.backgroundImage = `url("${px(ph.u, 1600)}")`;
}

/* ---------- Init ---------- */
renderStyles();
renderWorkFilters();
renderWork();
renderArtists();
renderRates();
renderReviews();
loadStudio();
