const navProjectAnchors = [
  ["01", "Quản lý tệp và thư mục", "projects.html#quan-ly-tep-thu-muc"],
  ["02", "Tìm kiếm và đánh giá thông tin học thuật", "projects.html#tim-kiem-danh-gia-thong-tin"],
  ["03", "Viết prompt hiệu quả", "projects.html#viet-prompt-hieu-qua"],
  ["04", "Hợp tác trực tuyến", "projects.html#hop-tac-truc-tuyen"],
  ["05", "Sáng tạo nội dung với AI", "projects.html#sang-tao-noi-dung-ai"],
  ["06", "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu", "projects.html#ai-co-trach-nhiem"],
];

const navSummaryAnchors = [
  ["01", "Kiến thức đã học", "summary.html#kien-thuc-da-hoc"],
  ["02", "Khó khăn", "summary.html#kho-khan"],
  ["03", "Kỹ năng cải thiện", "summary.html#ky-nang-cai-thien"],
  ["04", "Bài học", "summary.html#bai-hoc"],
  ["05", "Hướng phát triển", "summary.html#huong-phat-trien"],
];

function renderAnchorList(items, className) {
  return items
    .map(([number, label, href]) => `<a class="${className}" href="${href}"><span>${number}</span>${label}</a>`)
    .join("");
}

function renderSharedNavbar() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const activePage = header.dataset.activePage || "intro";
  const linkClass = (page) => `nav-link${activePage === page ? " is-active" : ""}`;

  header.innerHTML = `
    <nav class="nav" aria-label="Điều hướng chính">
      <a class="brand" href="index.html" aria-label="Phạm Xuân Bắc">
        <span class="brand-mark" aria-hidden="true">PXB</span>
        <span>Phạm Xuân Bắc</span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">
        <span class="sr-only">Mở menu</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <div class="nav-menu" id="nav-menu">
        <a class="${linkClass("intro")}" href="index.html">Giới thiệu</a>
        <div class="nav-dropdown">
          <a class="${linkClass("projects")}" href="projects.html">Dự án</a>
          <div class="project-dropdown" aria-label="Danh sách dự án">
            ${renderAnchorList(navProjectAnchors, "project-anchor")}
          </div>
        </div>
        <div class="nav-dropdown">
          <a class="${linkClass("summary")}" href="summary.html">Tổng kết</a>
          <div class="project-dropdown" aria-label="Danh sách tổng kết">
            ${renderAnchorList(navSummaryAnchors, "summary-anchor")}
          </div>
        </div>
      </div>
    </nav>
  `;
}

renderSharedNavbar();

const pointerGlow = document.createElement("div");
pointerGlow.className = "pointer-glow";
pointerGlow.setAttribute("aria-hidden", "true");
document.body.appendChild(pointerGlow);

const cosmicEffects = document.createElement("div");
cosmicEffects.className = "cosmic-effects";
cosmicEffects.setAttribute("aria-hidden", "true");
cosmicEffects.innerHTML = `
  <span class="aurora aurora-one"></span>
  <span class="aurora aurora-two"></span>
  ${Array.from({ length: 34 }, (_, index) => `<span class="cosmic-star cosmic-star-${index + 1}"></span>`).join("")}
  <span class="meteor meteor-one"></span>
  <span class="meteor meteor-two"></span>
  <span class="meteor meteor-three"></span>
  <span class="meteor meteor-four"></span>
`;
document.body.appendChild(cosmicEffects);

let pointerGlowFrame;
window.addEventListener("pointermove", (event) => {
  if (event.pointerType === "touch") return;

  window.cancelAnimationFrame(pointerGlowFrame);
  pointerGlowFrame = window.requestAnimationFrame(() => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    pointerGlow.classList.add("is-visible");
  });
});

document.documentElement.addEventListener("mouseleave", () => {
  pointerGlow.classList.remove("is-visible");
});

const projects = [
  {
    id: "quan-ly-tep-thu-muc",
    title: "Quản lý tệp và thư mục",
    goal:
      "Rèn luyện kỹ năng tổ chức tệp tin và thư mục một cách khoa học, giúp quá trình lưu trữ, tìm kiếm và sử dụng dữ liệu trở nên thuận tiện hơn.",
    work:
      "Trong phần này, tôi đã xây dựng cấu trúc thư mục theo từng nhóm nội dung, áp dụng quy tắc đặt tên tệp thống nhất và sắp xếp dữ liệu theo logic rõ ràng. Việc tổ chức này giúp các tài liệu học tập được quản lý tốt hơn, hạn chế nhầm lẫn và dễ dàng mở rộng khi có thêm nội dung mới.",
    reflection:
      "Qua bài này, tôi nhận ra rằng việc quản lý tệp tin hợp lý là một kỹ năng nền tảng nhưng rất quan trọng. Khi dữ liệu được sắp xếp rõ ràng, quá trình học tập và làm việc trở nên hiệu quả hơn nhiều.",
    link: "https://docs.google.com/document/d/1DnKBTsO3k2SGVRjyqhiG_v8IR7k3POb0/edit?usp=drive_link&ouid=103327445161011042221&rtpof=true&sd=true",
    preview: "https://docs.google.com/document/d/1DnKBTsO3k2SGVRjyqhiG_v8IR7k3POb0/preview",
    image: "assets/images/project-1.png",
    imageAlt: "Minh họa quản lý tệp và thư mục",
  },
  {
    id: "tim-kiem-danh-gia-thong-tin",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    goal:
      "Rèn luyện khả năng tìm kiếm thông tin học thuật, sử dụng từ khóa và toán tử tìm kiếm phù hợp, đồng thời đánh giá độ tin cậy của các nguồn thông tin trước khi sử dụng.",
    work:
      "Tôi đã thực hiện tìm kiếm tài liệu liên quan đến chủ đề học tập bằng các công cụ tìm kiếm và toán tử nâng cao. Sau đó, tôi đánh giá nguồn thông tin dựa trên các tiêu chí như tác giả, thời gian công bố, đơn vị xuất bản, mức độ liên quan và độ tin cậy của nội dung.",
    reflection:
      "Bài này giúp tôi hiểu rằng tìm được thông tin chưa đủ, quan trọng hơn là biết chọn lọc, kiểm chứng và đánh giá nguồn. Đây là kỹ năng cần thiết để học tập và nghiên cứu nghiêm túc hơn.",
    link: "https://drive.google.com/file/d/1754ZyrJrJHAEa4rdthxl6I0O-BqUxxCe/view?usp=drive_link",
    preview: "https://drive.google.com/file/d/1754ZyrJrJHAEa4rdthxl6I0O-BqUxxCe/preview",
    image: "assets/images/project-2.png",
    imageAlt: "Minh họa tìm kiếm thông tin học thuật",
  },
  {
    id: "viet-prompt-hieu-qua",
    title: "Viết prompt hiệu quả",
    goal:
      "Tìm hiểu cách viết prompt rõ ràng, có bối cảnh và có yêu cầu cụ thể để AI tạo ra kết quả phù hợp hơn với mục đích học tập.",
    work:
      "Trong bài này, tôi đã so sánh giữa prompt ban đầu và prompt được cải tiến. Prompt cải tiến được bổ sung thêm vai trò, bối cảnh, yêu cầu đầu ra và tiêu chí đánh giá. Từ đó, tôi quan sát sự khác biệt giữa các kết quả do AI tạo ra và rút ra cách viết prompt hiệu quả hơn.",
    reflection:
      "Qua bài này, tôi nhận thấy chất lượng phản hồi của AI phụ thuộc rất nhiều vào cách đặt yêu cầu. Prompt càng rõ ràng thì kết quả nhận được càng có cấu trúc, sát mục tiêu và dễ sử dụng hơn.",
    link: "https://drive.google.com/file/d/1TOW2tBJO_U5QwIdbypUSsxMlQOOWnCpw/view?usp=drive_link",
    preview: "https://drive.google.com/file/d/1TOW2tBJO_U5QwIdbypUSsxMlQOOWnCpw/preview",
    image: "assets/images/project-3.png",
    imageAlt: "Minh họa viết prompt hiệu quả",
  },
  {
    id: "hop-tac-truc-tuyen",
    title: "Hợp tác trực tuyến",
    goal:
      "Rèn luyện kỹ năng sử dụng các công cụ trực tuyến để hỗ trợ giao tiếp, phân công nhiệm vụ, quản lý tài liệu và theo dõi tiến độ trong quá trình làm việc nhóm.",
    work:
      "Tôi đã tìm hiểu và sử dụng các công cụ hỗ trợ làm việc nhóm như nền tảng lưu trữ tài liệu, công cụ soạn thảo trực tuyến, công cụ trao đổi thông tin và công cụ quản lý tiến độ. Những công cụ này giúp quá trình phối hợp giữa các thành viên trở nên rõ ràng và hiệu quả hơn.",
    reflection:
      "Bài này cho tôi thấy rằng làm việc nhóm trực tuyến không chỉ là trao đổi qua tin nhắn. Một nhóm làm việc hiệu quả cần có công cụ phù hợp, phân công rõ ràng và cách theo dõi tiến độ hợp lý.",
    link: "https://drive.google.com/file/d/1OiCRxmOUsgvSgOjfpzwMwLreHnCq1b5p/view?usp=drive_link",
    preview: "https://drive.google.com/file/d/1OiCRxmOUsgvSgOjfpzwMwLreHnCq1b5p/preview",
    image: "assets/images/project-4.png",
    imageAlt: "Minh họa hợp tác trực tuyến",
  },
  {
    id: "sang-tao-noi-dung-ai",
    title: "Sáng tạo nội dung với AI",
    goal:
      "Tìm hiểu cách sử dụng AI tạo sinh để hỗ trợ quá trình lên ý tưởng, tạo bản nháp và hoàn thiện các sản phẩm nội dung số.",
    work:
      "Tôi đã sử dụng công cụ AI để hỗ trợ tạo hoặc cải thiện nội dung số như hình ảnh, văn bản, video hoặc sản phẩm truyền thông. Trong quá trình thực hiện, tôi không chỉ sử dụng kết quả AI tạo ra mà còn chọn lọc, chỉnh sửa và hoàn thiện sản phẩm để phù hợp hơn với mục tiêu sử dụng.",
    reflection:
      "Bài này giúp tôi thấy rõ AI là công cụ hỗ trợ mạnh trong sáng tạo nội dung, đặc biệt ở giai đoạn lên ý tưởng và tạo bản nháp. Tuy nhiên, sản phẩm cuối cùng vẫn cần sự đánh giá và chỉnh sửa của con người.",
    link: "https://drive.google.com/drive/folders/1AAPphkXzxgSCixd1C3YL9YOSKviHi_mM?usp=drive_link",
    preview: "https://drive.google.com/embeddedfolderview?id=1AAPphkXzxgSCixd1C3YL9YOSKviHi_mM#grid",
    image: "assets/images/project-5.png",
    imageAlt: "Minh họa sáng tạo nội dung với AI",
  },
  {
    id: "ai-co-trach-nhiem",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal:
      "Nhận thức rõ hơn về việc sử dụng AI một cách đúng đắn, trung thực và phù hợp trong môi trường học tập, nghiên cứu.",
    work:
      "Tôi đã xây dựng bộ nguyên tắc cá nhân khi sử dụng AI trong học tập và nghiên cứu. Các nguyên tắc tập trung vào việc kiểm chứng thông tin, không sao chép máy móc, không sử dụng AI để gian lận, tôn trọng bản quyền và xem AI như công cụ hỗ trợ thay vì thay thế hoàn toàn tư duy cá nhân.",
    reflection:
      "Qua bài này, tôi hiểu rằng sử dụng AI hiệu quả không chỉ nằm ở kỹ thuật đặt câu hỏi, mà còn nằm ở ý thức, trách nhiệm và sự trung thực của người học.",
    link: "https://drive.google.com/file/d/1nSrX30CQ3sXjHRzThILooDURNG98UYU7/view?usp=drive_link",
    preview: "https://drive.google.com/file/d/1nSrX30CQ3sXjHRzThILooDURNG98UYU7/preview",
    image: "assets/images/project-6.png",
    imageAlt: "Minh họa sử dụng AI có trách nhiệm",
  },
];

const summaryItems = [
  {
    id: "kien-thuc-da-hoc",
    title: "Kiến thức đã học",
    icon: "book",
    body:
      "Qua quá trình thực hiện Portfolio, tôi đã hệ thống lại các kiến thức liên quan đến quản lý tệp tin, tìm kiếm và đánh giá thông tin, viết prompt hiệu quả, sử dụng công cụ hợp tác trực tuyến, ứng dụng AI trong sáng tạo nội dung và nguyên tắc sử dụng AI có trách nhiệm.",
    image: "assets/images/summary-1.png",
    imageAlt: "Minh họa kiến thức đã học",
  },
  {
    id: "kho-khan",
    title: "Khó khăn",
    icon: "alert",
    body:
      "Khó khăn lớn nhất là chọn lọc và sắp xếp lại các bài đã làm sao cho ngắn gọn nhưng vẫn đầy đủ. Bên cạnh đó, tôi cũng cần đảm bảo bố cục rõ ràng, giao diện dễ nhìn và cách trình bày thống nhất giữa các phần trong Portfolio.",
    image: "assets/images/summary-2.png",
    imageAlt: "Minh họa khó khăn trong quá trình thực hiện",
  },
  {
    id: "ky-nang-cai-thien",
    title: "Kỹ năng cải thiện",
    icon: "spark",
    body:
      "Tôi cải thiện được kỹ năng tổ chức thông tin, trình bày nội dung, sử dụng công cụ số, làm việc có hệ thống hơn và biết cách khai thác AI phục vụ học tập một cách hiệu quả hơn trước.",
    image: "assets/images/summary-3.png",
    imageAlt: "Minh họa kỹ năng cải thiện",
  },
  {
    id: "bai-hoc",
    title: "Bài học",
    icon: "check",
    body:
      "Tôi nhận ra rằng một sản phẩm học tập tốt không chỉ cần có nội dung đúng mà còn cần được trình bày logic, mạch lạc và phù hợp với mục tiêu sử dụng. Ngoài ra, AI chỉ thực sự phát huy hiệu quả khi người dùng biết đặt yêu cầu rõ ràng và có tư duy chọn lọc.",
    image: "assets/images/summary-4.png",
    imageAlt: "Minh họa bài học rút ra",
  },
  {
    id: "huong-phat-trien",
    title: "Hướng phát triển",
    icon: "arrow",
    body:
      "Trong thời gian tới, tôi muốn tiếp tục hoàn thiện Portfolio này như một nơi lưu trữ các sản phẩm học tập và dự án cá nhân, đồng thời rèn luyện thêm kỹ năng sử dụng công cụ số, trình bày nội dung và ứng dụng AI trong học tập.",
    image: "assets/images/summary-5.png",
    imageAlt: "Minh họa hướng phát triển",
  },
];

const icons = {
  book:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/></svg>',
  alert:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M10.3 4.2 2.5 18a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"/><path d="M12 9v5"/><path d="M12 17h.01"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M21 7 10 18l-5-5"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/><path d="M5 5v14"/></svg>',
};

const projectList = document.querySelector("#project-list");
const summaryGrid = document.querySelector("#summary-grid");
const navLinks = document.querySelector("#nav-menu");
const menuToggle = document.querySelector(".menu-toggle");
const skillTags = document.querySelectorAll(".skill-tag");
const skillDescriptionText = document.querySelector("#skill-description-text");
const defaultSkillDescription = "Các chủ đề kỹ năng được phát triển trong quá trình thực hiện dự án.";
let skillDescriptionTimer;

function createProject(project, index) {
  const article = document.createElement("article");
  article.id = project.id;
  article.className = `project-card reveal ${index % 2 === 1 ? "is-reverse" : ""}`;
  article.innerHTML = `
    <div class="project-media">
      <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" />
    </div>
    <div class="project-copy">
      <h3>${project.title}</h3>
      <div class="project-field">
        <strong>Mục tiêu</strong>
        <p>${project.goal}</p>
      </div>
      <div class="project-field">
        <strong>Nội dung chính</strong>
        <p>${project.work}</p>
      </div>
      <div class="project-field">
        <strong>Nhận xét</strong>
        <p>${project.reflection}</p>
      </div>
      <div class="project-actions">
        <a
          class="button button-primary project-link"
          href="${project.link}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Xem bài làm: ${project.title}"
        >
          Xem bài làm
        </a>
        <div class="project-preview" aria-hidden="true">
          <iframe
            src="${project.preview}"
            title="Preview bài làm: ${project.title}"
            loading="lazy"
            allow="autoplay"
            tabindex="-1"
          ></iframe>
        </div>
      </div>
    </div>
  `;
  return article;
}

function createSummaryCard(item, index) {
  const article = document.createElement("article");
  article.id = item.id;
  article.className = `summary-card reveal ${index % 2 === 1 ? "is-reverse" : ""}`;
  article.innerHTML = `
    <div class="summary-copy">
      <span class="summary-icon">${icons[item.icon]}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </div>
    <div class="summary-media">
      <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
    </div>
  `;
  return article;
}

if (projectList) {
  projects.forEach((project, index) => {
    projectList.appendChild(createProject(project, index));
  });
}

if (summaryGrid) {
  summaryItems.forEach((item, index) => {
    summaryGrid.appendChild(createSummaryCard(item, index));
  });
}

function setActiveSkill(activeTag) {
  if (!skillDescriptionText) return;

  skillTags.forEach((tag) => {
    tag.classList.toggle("is-active", tag === activeTag);
  });

  const nextText = activeTag?.dataset.description || defaultSkillDescription;
  if (skillDescriptionText.textContent === nextText) return;

  window.clearTimeout(skillDescriptionTimer);
  skillDescriptionText.classList.add("is-changing");
  skillDescriptionTimer = window.setTimeout(() => {
    skillDescriptionText.textContent = nextText;
    skillDescriptionText.classList.remove("is-changing");
  }, 120);
}

skillTags.forEach((tag) => {
  tag.addEventListener("mouseenter", () => setActiveSkill(tag));
  tag.addEventListener("focus", () => setActiveSkill(tag));
});

document.querySelector(".skills-strip")?.addEventListener("mouseleave", () => {
  setActiveSkill(null);
});

document.querySelector(".skills-strip")?.addEventListener("focusout", (event) => {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    setActiveSkill(null);
  }
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

function scrollToProjectHash(hash, behavior = "smooth") {
  if (!hash) return;
  const target = document.querySelector(hash);
  if (target) {
    const headerOffset = 96;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetTop, behavior });
  }
}

document.querySelectorAll(".project-anchor, .summary-anchor").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetUrl = new URL(link.href, window.location.href);
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const targetPath = targetUrl.pathname.split("/").pop() || "index.html";

    if (currentPath === targetPath && targetUrl.hash) {
      event.preventDefault();
      history.pushState(null, "", targetUrl.hash);
      scrollToProjectHash(targetUrl.hash);
    }
  });
});

if ((projectList || summaryGrid) && window.location.hash) {
  [80, 240, 600].forEach((delay) => {
    window.setTimeout(() => {
      scrollToProjectHash(window.location.hash, "auto");
    }, delay);
  });

  window.addEventListener("load", () => {
    [120, 420].forEach((delay) => {
      window.setTimeout(() => {
        scrollToProjectHash(window.location.hash, "auto");
      }, delay);
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
