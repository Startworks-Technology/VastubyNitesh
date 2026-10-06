/**
 * Vastu by Nitesh - Blog & Medium Integration Script
 */

document.addEventListener("DOMContentLoaded", () => {
  initBlogNavigation();
  initBlogFilter();
  renderBlogPosts("all");
});

/* ==========================================================================
   WhatsApp URL Helper
   ========================================================================== */
function getWhatsAppUrl(message) {
  const number = SITE_CONFIG.whatsappNumber;
  const encodedText = encodeURIComponent(message || SITE_CONFIG.whatsappDefaultMsg);
  return `https://wa.me/${number}?text=${encodedText}`;
}

function handleWhatsAppClick(message) {
  const url = getWhatsAppUrl(message);
  window.open(url, "_blank");
}

/* ==========================================================================
   Navigation
   ========================================================================== */
function initBlogNavigation() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      const isOpen = navLinks.classList.contains("mobile-open");
      toggleBtn.innerHTML = isOpen ? "✕" : "☰";
    });
  }
}

/* ==========================================================================
   Blog Posts Rendering & Category Filtering
   ========================================================================== */
function initBlogFilter() {
  const filterTabs = document.getElementById("blogFilterTabs");
  if (!filterTabs) return;

  const buttons = filterTabs.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category") || "all";
      renderBlogPosts(category);
    });
  });
}

function renderBlogPosts(category) {
  const container = document.getElementById("blogCardsGrid");
  if (!container || !BLOG_POSTS_DATA) return;

  const filteredPosts = category === "all" 
    ? BLOG_POSTS_DATA 
    : BLOG_POSTS_DATA.filter(post => post.category === category);

  if (filteredPosts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p>No articles found under this topic yet. Check back soon or visit our Medium profile!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredPosts.map(post => `
    <article class="blog-card">
      <div class="blog-card-media">
        <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='assets/vastu-it-building.jpg'">
        <span class="blog-card-tag">${post.categoryLabel}</span>
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${post.readTime}
          </span>
          <span>•</span>
          <span>${post.date}</span>
        </div>
        
        <h3 class="blog-card-title">
          <a href="${post.mediumUrl}" target="_blank" rel="noopener noreferrer">${post.title}</a>
        </h3>

        <p class="blog-card-summary">${post.summary}</p>

        <ul class="blog-card-bullets">
          ${post.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>

        <div class="blog-card-actions">
          <a href="${post.mediumUrl}" target="_blank" rel="noopener noreferrer" class="blog-medium-link">
            <!-- Medium Monogram -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <span>Read on Medium</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button class="btn btn-sm btn-outline" style="border-radius: var(--radius-full); font-size: 0.78rem; padding: 0.4rem 0.85rem;" onclick="handleWhatsAppClick('Namaste Nitesh ji, I read your article \'${post.title.replace(/'/g, "\\'")}\' and have a question regarding my space.')">
            Discuss via WhatsApp
          </button>
        </div>
      </div>
    </article>
  `).join("");
}
