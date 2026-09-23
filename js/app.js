/**
 * Vastu by Nitesh - Main Application Logic
 * Pure Vanilla JavaScript: Interactive filters, WhatsApp linking, modals, and dynamic rendering
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTattvaElements();
  initServicesFilter();
  initTestimonials();
  initInquiryForm();
  initFaqAccordion();
  initFloatingWhatsApp();
  initModal();
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
function initNavigation() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      const isOpen = navLinks.classList.contains("mobile-open");
      toggleBtn.innerHTML = isOpen ? "✕" : "☰";
    });

    // Close when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        toggleBtn.innerHTML = "☰";
      });
    });
  }

  // Header quick WhatsApp button
  const navWaBtn = document.getElementById("navWhatsAppBtn");
  if (navWaBtn) {
    navWaBtn.addEventListener("click", () => {
      handleWhatsAppClick("Namaste Nitesh ji, I am visiting your website and would like to inquire about your Vastu & Astrology consultations.");
    });
  }
}

/* ==========================================================================
   Pancha Tattva (5 Elements of Vastu) Rendering
   ========================================================================== */
function initTattvaElements() {
  const container = document.getElementById("tattvaContainer");
  if (!container || !VASTU_ELEMENTS) return;

  const icons = {
    droplet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    wind: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`,
    flame: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    mountain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    sun: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
  };

  const elementKeys = ["jal", "vayu", "agni", "prithvi", "akasha"];

  container.innerHTML = VASTU_ELEMENTS.map((item, index) => `
    <div class="tattva-card" data-element="${elementKeys[index] || 'akasha'}">
      <div class="tattva-icon-box">
        ${icons[item.icon] || icons.sun}
      </div>
      <h4>${item.element}</h4>
      <div class="tattva-zone">${item.zone}</div>
      <p>${item.description}</p>
    </div>
  `).join("");
}

/* ==========================================================================
   Services Grid & Filter Logic
   ========================================================================== */
let activeCategory = "all";

function initServicesFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderServices();
    });
  });

  renderServices();
}

function renderServices() {
  const container = document.getElementById("servicesGrid");
  if (!container || !SERVICES_DATA) return;

  const filtered = activeCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const checkIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
  const waIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

  container.innerHTML = filtered.map(service => `
    <div class="service-card ${service.highlight ? 'highlight' : ''}" data-service-id="${service.id}">
      <div class="service-badge-strip">
        <span class="service-type">${service.type}</span>
        ${service.tag ? `<span class="service-featured-tag">${service.tag}</span>` : ''}
      </div>

      <h3 class="service-title">${service.title}</h3>

      <div class="service-pricing">
        <span class="service-price">${service.formattedPrice}</span>
        <span class="service-tax">INR / session</span>
      </div>

      <p class="service-summary">${service.summary}</p>

      <ul class="service-features">
        ${service.features.slice(0, 3).map(f => `
          <li>${checkIcon} <span>${f}</span></li>
        `).join("")}
      </ul>

      <div class="service-actions">
        <button class="btn btn-whatsapp" onclick="handleWhatsAppClick('${escapeQuotes(service.whatsappMsg)}')">
          ${waIcon}
          <span>Book via WhatsApp</span>
        </button>
        <button class="btn btn-outline btn-sm" onclick="openServiceModal('${service.id}')">
          View Deliverables & Details
        </button>
      </div>
    </div>
  `).join("");
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* ==========================================================================
   Service Details Modal
   ========================================================================== */
function initModal() {
  const overlay = document.getElementById("serviceModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }
}

function openServiceModal(serviceId) {
  const service = SERVICES_DATA.find(s => s.id === serviceId);
  if (!service) return;

  const overlay = document.getElementById("serviceModalOverlay");
  const titleEl = document.getElementById("modalTitle");
  const categoryEl = document.getElementById("modalCategory");
  const priceEl = document.getElementById("modalPrice");
  const summaryEl = document.getElementById("modalSummary");
  const featuresList = document.getElementById("modalFeaturesList");
  const waBtn = document.getElementById("modalWhatsAppBtn");

  titleEl.textContent = service.title;
  categoryEl.textContent = `${service.categoryLabel} • ${service.type}`;
  priceEl.textContent = `${service.formattedPrice} INR`;
  summaryEl.textContent = service.summary;

  const checkIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
  featuresList.innerHTML = service.features.map(f => `
    <li style="display:flex; align-items:flex-start; gap:0.6rem; margin-bottom:0.75rem; font-size:0.9rem;">
      <span style="color:var(--primary); margin-top:2px;">${checkIcon}</span>
      <span>${f}</span>
    </li>
  `).join("");

  waBtn.onclick = () => {
    handleWhatsAppClick(service.whatsappMsg);
  };

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("serviceModalOverlay");
  if (overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

/* ==========================================================================
   Testimonials Rendering
   ========================================================================== */
function initTestimonials() {
  const container = document.getElementById("testimonialsGrid");
  if (!container || !TESTIMONIALS_DATA) return;

  const starIcon = `<span style="color:var(--accent-brass);">★</span>`;

  container.innerHTML = TESTIMONIALS_DATA.map(t => {
    const initials = t.name.split(" ").map(n => n[0]).slice(0, 2).join("");
    return `
      <div class="testimonial-card ${t.pinned ? 'pinned' : ''}">
        <div>
          ${t.pinned ? `<div class="testimonial-pinned-tag">📌 Verified Client Highlight</div>` : ''}
          <div class="testimonial-stars">
            ${starIcon.repeat(t.rating)}
          </div>
          <p class="testimonial-quote">"${t.text}"</p>
        </div>
        <div class="testimonial-author">
          <div class="author-avatar">${initials}</div>
          <div class="author-info">
            <h5>${t.name}</h5>
            <span>${t.role}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   WhatsApp Inquiry Form
   ========================================================================== */
function initInquiryForm() {
  const select = document.getElementById("inquiryServiceSelect");
  const form = document.getElementById("whatsappInquiryForm");

  if (select && SERVICES_DATA) {
    SERVICES_DATA.forEach(s => {
      const option = document.createElement("option");
      option.value = s.title;
      option.textContent = `${s.title} (${s.formattedPrice})`;
      select.appendChild(option);
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("clientName").value.trim() || "Visitor";
      const service = document.getElementById("inquiryServiceSelect").value;
      const notes = document.getElementById("clientNotes").value.trim();

      const composedMessage = `Namaste Nitesh ji,
My name is ${name}.
I am interested in consulting with you for: *${service}*.
${notes ? `Additional details: ${notes}` : 'Please share the consultation process and available timings.'}`;

      handleWhatsAppClick(composedMessage);
    });
  }
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById("faqContainer");
  if (!container || !FAQS_DATA) return;

  const arrowIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;

  container.innerHTML = FAQS_DATA.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question">
        <span>${faq.q}</span>
        ${arrowIcon}
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".faq-question").forEach(qBtn => {
    qBtn.addEventListener("click", () => {
      const parent = qBtn.closest(".faq-item");
      const wasActive = parent.classList.contains("active");

      // Close all others
      container.querySelectorAll(".faq-item").forEach(item => item.classList.remove("active"));

      if (!wasActive) {
        parent.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   Floating WhatsApp Button
   ========================================================================== */
function initFloatingWhatsApp() {
  const floatingBtn = document.getElementById("floatingWhatsAppBtn");
  if (floatingBtn) {
    floatingBtn.addEventListener("click", () => {
      handleWhatsAppClick("Namaste Nitesh ji, I am on your website and would like to quickly connect regarding a consultation.");
    });
  }
}
