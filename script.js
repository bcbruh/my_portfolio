/* Renders the six learning projects from the structured `window.projectContent`
   data. Each project is a flat list of typed blocks, so rendering is a simple,
   deterministic switch — no text heuristics, no guessing. */
const projects = window.projectContent || [];
let viewer = null;
let progress = null;
let projectPageInitializedPath = null;

function ensureProjectElements() {
  if (viewer && viewer.isConnected) return true;
  viewer = document.getElementById("documentViewer");
  if (!viewer) return false;
  viewer.setAttribute("tabindex", "0");

  progress = document.createElement("div");
  progress.className = "document-progress";
  viewer.parentElement.append(progress);
  return true;
}

const escapeHtml = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const urlPattern = /https?:\/\/[^\s)|<>"]+|(?:[a-z0-9-]+\.)+(?:ai|app|com)(?:\/[^\s)|<>"]*)?/gi;

/* Escape a string and turn bare URLs / well-known short domains into links. */
function linkify(text) {
  const parts = [];
  let last = 0;
  for (const match of String(text).matchAll(urlPattern)) {
    const raw = match[0].replace(/[.,;]+$/, "");
    // Only linkify a domain-only token if it really looks like one (avoids
    // catching ordinary words). Full http(s) URLs always linkify.
    const isUrl = /^https?:\/\//i.test(raw) || /^(?:[a-z0-9-]+\.)+(?:ai|app|com)/i.test(raw);
    parts.push(escapeHtml(text.slice(last, match.index)));
    if (isUrl) {
      const href = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
      parts.push(`<a class="report-link" href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(raw)}</a>`);
    } else {
      parts.push(escapeHtml(match[0]));
    }
    last = match.index + match[0].length;
  }
  parts.push(escapeHtml(text.slice(last)));
  return parts.join("");
}

// A cell is either a plain string (URLs auto-linked) or { text, href } for a
// link with custom anchor text.
function renderCell(cell) {
  if (cell && typeof cell === "object" && cell.href) {
    return `<a class="report-link" href="${escapeHtml(cell.href)}" target="_blank" rel="noopener">${escapeHtml(cell.text || cell.href)}</a>`;
  }
  return linkify(cell);
}

function renderTable(block) {
  const cols = Math.max(...block.rows.map(row => row.length));
  const body = block.rows.map((row, rowIndex) => {
    const tag = rowIndex === 0 ? "th" : "td";
    const cells = [...row, ...Array(cols - row.length).fill("")];
    return `<tr>${cells.map(cell => `<${tag}>${renderCell(cell)}</${tag}>`).join("")}</tr>`;
  }).join("");
  const caption = block.caption
    ? `<p class="report-table-caption">${escapeHtml(block.caption)}</p>`
    : "";
  return `<table class="report-grid"><tbody>${body}</tbody></table>${caption}`;
}

function renderFigure(item, wide = false) {
  const alt = item.caption || "Hình ảnh minh họa trong báo cáo";
  return `
    <figure class="inline-evidence${wide ? " slide-evidence" : ""}">
      <img src="${escapeHtml(item.src)}" loading="lazy" alt="${escapeHtml(alt)}">
      ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
    </figure>`;
}

function renderBlock(block) {
  switch (block.t) {
    case "h2":
      return `<h2>${escapeHtml(block.text)}</h2>`;
    case "h3":
      return `<h3>${escapeHtml(block.text)}</h3>`;
    case "h4":
      return `<h4>${escapeHtml(block.text)}</h4>`;
    case "p":
      return `<p>${linkify(block.text)}</p>`;
    case "ul":
      return `<ul class="report-list">${block.items.map(item => `<li>${linkify(item)}</li>`).join("")}</ul>`;
    case "ol":
      return `<ol class="report-ol">${block.items.map(item => `<li>${linkify(item)}</li>`).join("")}</ol>`;
    case "info":
      return `<div class="report-info">${block.rows
        .map(row => `<div><strong>${linkify(row[0])}</strong><span>${linkify(row[1])}</span></div>`)
        .join("")}</div>`;
    case "table":
      return renderTable(block);
    case "prompt":
      return `<div class="report-prompt">
        ${block.label ? `<span class="prompt-tag">${escapeHtml(block.label)}</span>` : ""}
        <p>${linkify(block.text).replaceAll("\n", "<br>")}</p>
      </div>`;
    case "note":
      return `<p class="report-note">${linkify(block.text)}</p>`;
    case "flow":
      return `<div class="report-flow">${block.steps
        .map(step => `<span class="flow-step">${escapeHtml(step)}</span>`)
        .join('<span class="flow-arrow" aria-hidden="true">→</span>')}</div>`;
    case "figure":
      return renderFigure(block);
    case "figrow": {
      const row = `<div class="evidence-row">${block.items.map(item => renderFigure(item)).join("")}</div>`;
      const caption = block.caption
        ? `<p class="evidence-row-caption">${escapeHtml(block.caption)}</p>`
        : "";
      return row + caption;
    }
    case "slides":
      return block.items.map(item => renderFigure(item, true)).join("");
    default:
      return "";
  }
}

function sourceLinkText(source) {
  if (/^https?:/i.test(source.file)) return "xem file gốc";
  const ext = String(source.file).split(/[?#]/)[0].split(".").pop().toLowerCase();
  return `xem file ${ext}`;
}

function renderProject(index) {
  const project = projects[index];
  if (!project) return;

  const body = project.blocks.map(renderBlock).join("");
  const source = project.source;
  const link = source
    ? `<a class="source-link" href="${escapeHtml(source.file)}" target="_blank" rel="noopener">${sourceLinkText(source)}</a>`
    : "";

  viewer.innerHTML = `
    <header class="project-article-hero">
      <p class="article-eyebrow">Dự án ${String(index + 1).padStart(2, "0")}</p>
      <h1>${escapeHtml(project.title)}</h1>
    </header>
    <article class="continuous-report">${body}</article>
    <footer class="report-sources">${link}</footer>
  `;

  viewer.scrollTop = 0;
  progress.style.setProperty("--reading-progress", "0%");

  const requestedScroll = Number(new URLSearchParams(window.location.search).get("scroll"));
  if (requestedScroll > 0) {
    requestAnimationFrame(() => {
      viewer.scrollTop = requestedScroll;
      const distance = viewer.scrollHeight - viewer.clientHeight;
      progress.style.setProperty("--reading-progress", `${distance ? viewer.scrollTop / distance * 100 : 0}%`);
    });
  }
}

function getInitialProject() {
  return Math.min(
    projects.length - 1,
    Math.max(0, Number(new URLSearchParams(window.location.search).get("project")) - 1 || 0)
  );
}

function initProjectsPage() {
  if (!ensureProjectElements()) return;
  const currentPath = location.pathname.replace(/\/$/, "");
  if (projectPageInitializedPath === currentPath && viewer && viewer.isConnected) return;
  projectPageInitializedPath = currentPath;

  const initialProject = getInitialProject();

  document.querySelectorAll(".project-tab").forEach(tab => {
    tab.classList.toggle("active", Number(tab.dataset.project) === initialProject);
    tab.setAttribute("aria-selected", tab.classList.contains("active") ? "true" : "false");
    tab.addEventListener("click", () => {
      const activeTab = document.querySelector(".project-tab.active");
      if (activeTab) activeTab.classList.remove("active");
      document.querySelectorAll(".project-tab").forEach(item => item.setAttribute("aria-selected", "false"));
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderProject(Number(tab.dataset.project));
    });
  });

  let progressTicking = false;
  viewer.addEventListener("scroll", () => {
    if (progressTicking) return;
    progressTicking = true;
    requestAnimationFrame(() => {
      const distance = viewer.scrollHeight - viewer.clientHeight;
      progress.style.setProperty("--reading-progress", `${distance ? viewer.scrollTop / distance * 100 : 0}%`);
      progressTicking = false;
    });
  }, { passive: true });

  renderProject(initialProject);
}

window.initProjectsPage = initProjectsPage;
window.addEventListener("DOMContentLoaded", initProjectsPage);
