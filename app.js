// App logic: login (pw="1"), filter, search, copy
const PASSWORD = "1";

const TABS = [
  { key: "services", label: "Dịch vụ" },
  { key: "symptoms", label: "Triệu chứng" },
  { key: "concerns", label: "Băn khoăn" },
  { key: "pricing",  label: "Báo giá Sale" }
];

let activeTab = "services";
let query = "";

function $(sel) { return document.querySelector(sel); }

// ---------- Login ----------
function tryLogin() {
  const val = $("#pw").value.trim();
  const err = $("#loginErr");
  if (val === PASSWORD) {
    $("#login").style.display = "none";
    $("#app").style.display = "block";
    try { sessionStorage.setItem("mk_unlocked", "1"); } catch (e) {}
    renderChips();
    render();
  } else {
    err.textContent = "Mật khẩu chưa đúng, thử lại nha 😊";
  }
}

// ---------- Render chips ----------
function renderChips() {
  const box = $("#chips");
  box.innerHTML = "";
  TABS.forEach(t => {
    const b = document.createElement("button");
    b.className = "chip" + (t.key === activeTab ? " active" : "");
    b.textContent = t.label;
    b.onclick = () => { activeTab = t.key; renderChips(); render(); };
    box.appendChild(b);
  });
}

// ---------- Render cards ----------
function render() {
  const grid = $("#grid");
  grid.innerHTML = "";
  const items = (DATA[activeTab] || []).filter(it => {
    if (!query) return true;
    const hay = (it.title + " " + (it.body || "") + " " + (it.note || "") + " " + (it.price || "")).toLowerCase();
    return hay.includes(query.toLowerCase());
  });

  $("#count").textContent = `Tìm thấy ${items.length} mục`;

  if (items.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted)">Không có mục nào khớp với từ khóa nha 😊</p>`;
    return;
  }

  items.forEach(it => grid.appendChild(buildCard(it)));
}

function buildCard(it) {
  const card = document.createElement("div");
  card.className = "card" + (it.emergency ? " emergency" : "");

  const tag = document.createElement("span");
  tag.className = "tag" + (it.emergency ? " warn" : "");
  tag.textContent = it.emergency ? "Cấp cứu" : TABS.find(t => t.key === activeTab).label;
  card.appendChild(tag);

  const h = document.createElement("h3");
  h.textContent = it.title;
  card.appendChild(h);

  if (activeTab === "pricing") {
    const p = document.createElement("div");
    p.className = "price";
    p.textContent = it.price;
    card.appendChild(p);
    if (it.note) {
      const n = document.createElement("div");
      n.className = "note";
      n.textContent = it.note;
      card.appendChild(n);
    }
  } else if (it.body) {
    const b = document.createElement("div");
    b.className = "body";
    b.textContent = it.body;
    card.appendChild(b);
  }

  const copy = document.createElement("button");
  copy.className = "copy";
  const textToCopy = activeTab === "pricing"
    ? `${it.title}: ${it.price}${it.note ? " — " + it.note : ""}`
    : it.body || it.title;
  copy.textContent = "📋 Copy kịch bản";
  copy.onclick = () => copyText(textToCopy, copy);
  card.appendChild(copy);

  return card;
}

// ---------- Clipboard ----------
function copyText(text, btn) {
  const done = () => {
    const old = btn.textContent;
    btn.textContent = "✅ Đã copy!";
    btn.classList.add("done");
    showToast("Đã sao chép kịch bản 💕");
    setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}
function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); done(); } catch (e) {}
  document.body.removeChild(ta);
}

// ---------- Toast ----------
let toastTimer;
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

// ---------- Footer ----------
function renderFooter() {
  const f = $("#foot");
  f.innerHTML = `
    <b>${CLINIC.name}</b> · Hotline: <b>${CLINIC.hotline}</b><br>
    ${CLINIC.branches.map(b => "• " + b).join("<br>")}<br><br>
    <i>Giá & kịch bản trên là tham khảo. Bác sĩ khám mới báo chính xác. Không tự chẩn đoán qua chat.</i>
  `;
}

// ---------- Init ----------
window.addEventListener("DOMContentLoaded", () => {
  const unlocked = (() => { try { return sessionStorage.getItem("mk_unlocked"); } catch (e) { return null; } })();
  if (unlocked === "1") {
    $("#login").style.display = "none";
    $("#app").style.display = "block";
    renderChips(); render();
  }
  $("#pw").addEventListener("keydown", e => { if (e.key === "Enter") tryLogin(); });
  $("#search").addEventListener("input", e => { query = e.target.value; render(); });
  renderFooter();
});
