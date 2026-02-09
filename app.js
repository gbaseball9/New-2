/* ============================================
   suitespottr — app.js
   mock data + all page functionality
   ============================================ */

// ---------- mock listings data ----------
const listings = [
  {
    id: 1,
    name: "unit 4b — lakewood flex",
    address: "2481 w colfax ave",
    city: "denver",
    state: "co",
    sqft: 1800,
    price: 2250,
    type: "flex",
    ceilingHeight: "16 ft",
    loadingType: "grade-level",
    loadingTooltip: "drive-in access from ground level — you can back a truck or van right up to the door",
    minLease: 12,
    moveInReady: true,
    availableDate: "2026-03-01",
    description: "bright flex space with open layout, ideal for small workshops, e-commerce storage, or creative studios. freshly painted with new epoxy floors.",
    included: {
      utilities: true,
      wifi: false,
      parking: true,
      hvac: true,
      trash: true
    },
    deposit: 2250,
    added: "2026-01-28"
  },
  {
    id: 2,
    name: "bay 12 — southeast industrial",
    address: "1350 marietta blvd nw",
    city: "atlanta",
    state: "ga",
    sqft: 3200,
    price: 3800,
    type: "warehouse",
    ceilingHeight: "22 ft",
    loadingType: "dock-high",
    loadingTooltip: "raised loading dock at truck-bed height — for receiving larger shipments with a loading dock",
    minLease: 24,
    moveInReady: true,
    availableDate: "2026-02-15",
    description: "spacious warehouse bay in active industrial park. high ceilings, column-free layout, and great access to i-75.",
    included: {
      utilities: false,
      wifi: false,
      parking: true,
      hvac: false,
      trash: true
    },
    deposit: 3800,
    added: "2026-02-01"
  },
  {
    id: 3,
    name: "suite 201 — midtown office-warehouse",
    address: "4420 n scottsdale rd",
    city: "scottsdale",
    state: "az",
    sqft: 1200,
    price: 1850,
    type: "office-warehouse",
    ceilingHeight: "12 ft",
    loadingType: "grade-level",
    loadingTooltip: "drive-in access from ground level — you can back a truck or van right up to the door",
    minLease: 6,
    moveInReady: true,
    availableDate: "2026-02-20",
    description: "split layout with finished office up front and warehouse in back. perfect for businesses that need both work and storage space.",
    included: {
      utilities: true,
      wifi: true,
      parking: true,
      hvac: true,
      trash: true
    },
    deposit: 1850,
    added: "2026-02-05"
  },
  {
    id: 4,
    name: "unit 7 — eastside small bay",
    address: "809 e pine st",
    city: "seattle",
    state: "wa",
    sqft: 900,
    price: 1600,
    type: "small bay",
    ceilingHeight: "14 ft",
    loadingType: "grade-level",
    loadingTooltip: "drive-in access from ground level — you can back a truck or van right up to the door",
    minLease: 12,
    moveInReady: false,
    availableDate: "2026-04-01",
    description: "compact small bay in up-and-coming eastside neighborhood. great for contractors, artisans, or small storage operations.",
    included: {
      utilities: true,
      wifi: false,
      parking: true,
      hvac: true,
      trash: true
    },
    deposit: 1600,
    added: "2026-01-15"
  },
  {
    id: 5,
    name: "warehouse 3a — port district",
    address: "2200 harbor blvd",
    city: "houston",
    state: "tx",
    sqft: 5000,
    price: 4500,
    type: "warehouse",
    ceilingHeight: "24 ft",
    loadingType: "dock-high",
    loadingTooltip: "raised loading dock at truck-bed height — for receiving larger shipments with a loading dock",
    minLease: 24,
    moveInReady: true,
    availableDate: "2026-03-15",
    description: "large warehouse with two dock-high doors and ample truck court. excellent for distribution, fulfillment, or manufacturing.",
    included: {
      utilities: false,
      wifi: false,
      parking: true,
      hvac: false,
      trash: false
    },
    deposit: 4500,
    added: "2026-02-08"
  },
  {
    id: 6,
    name: "flex suite c — arts district",
    address: "315 s santa fe ave",
    city: "los angeles",
    state: "ca",
    sqft: 2200,
    price: 3400,
    type: "flex",
    ceilingHeight: "18 ft",
    loadingType: "grade-level",
    loadingTooltip: "drive-in access from ground level — you can back a truck or van right up to the door",
    minLease: 12,
    moveInReady: true,
    availableDate: "2026-02-28",
    description: "creative flex space with polished concrete floors, exposed brick, and natural light. ideal for studios, showrooms, or light assembly.",
    included: {
      utilities: true,
      wifi: true,
      parking: false,
      hvac: true,
      trash: true
    },
    deposit: 3400,
    added: "2026-02-03"
  },
  {
    id: 7,
    name: "bay 5 — northgate business park",
    address: "6732 northgate blvd",
    city: "charlotte",
    state: "nc",
    sqft: 1500,
    price: 1950,
    type: "small bay",
    ceilingHeight: "14 ft",
    loadingType: "grade-level",
    loadingTooltip: "drive-in access from ground level — you can back a truck or van right up to the door",
    minLease: 12,
    moveInReady: true,
    availableDate: "2026-03-01",
    description: "well-maintained small bay with roll-up door and private restroom. centrally located near i-85 interchange.",
    included: {
      utilities: true,
      wifi: false,
      parking: true,
      hvac: true,
      trash: true
    },
    deposit: 1950,
    added: "2026-01-20"
  },
  {
    id: 8,
    name: "suite 110 — crossroads commerce",
    address: "1024 grand blvd",
    city: "kansas city",
    state: "mo",
    sqft: 2800,
    price: 2600,
    type: "office-warehouse",
    ceilingHeight: "16 ft",
    loadingType: "grade-level",
    loadingTooltip: "drive-in access from ground level — you can back a truck or van right up to the door",
    minLease: 6,
    moveInReady: false,
    availableDate: "2026-05-01",
    description: "office-warehouse combo in the crossroads district. front office with reception area, back warehouse with roll-up door access.",
    included: {
      utilities: true,
      wifi: true,
      parking: true,
      hvac: true,
      trash: true
    },
    deposit: 2600,
    added: "2026-02-06"
  },
  {
    id: 9,
    name: "unit 22 — industrial park south",
    address: "5501 s congress ave",
    city: "austin",
    state: "tx",
    sqft: 1100,
    price: 1750,
    type: "flex",
    ceilingHeight: "14 ft",
    loadingType: "grade-level",
    loadingTooltip: "drive-in access from ground level — you can back a truck or van right up to the door",
    minLease: 12,
    moveInReady: true,
    availableDate: "2026-03-10",
    description: "versatile flex unit in south austin. open floor plan with one private office and restroom. popular with small makers and online retailers.",
    included: {
      utilities: true,
      wifi: false,
      parking: true,
      hvac: true,
      trash: true
    },
    deposit: 1750,
    added: "2026-02-07"
  },
  {
    id: 10,
    name: "warehouse 8 — riverside logistics",
    address: "800 n river rd",
    city: "chicago",
    state: "il",
    sqft: 4200,
    price: 5200,
    type: "warehouse",
    ceilingHeight: "26 ft",
    loadingType: "dock-high",
    loadingTooltip: "raised loading dock at truck-bed height — for receiving larger shipments with a loading dock",
    minLease: 24,
    moveInReady: true,
    availableDate: "2026-04-15",
    description: "high-ceiling warehouse near the chicago river. three dock doors, sprinklered, and close to major expressways for easy distribution.",
    included: {
      utilities: false,
      wifi: false,
      parking: true,
      hvac: false,
      trash: true
    },
    deposit: 5200,
    added: "2026-01-30"
  }
];

// ---------- utility helpers ----------
function formatPrice(price) {
  return "$" + price.toLocaleString();
}

function formatSqft(sqft) {
  return sqft.toLocaleString() + " sq ft";
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-us", { month: "short", day: "numeric", year: "numeric" }).toLowerCase();
}

function isAvailableNow(dateStr) {
  return new Date(dateStr) <= new Date();
}

function getAvailabilityBadge(listing) {
  if (listing.moveInReady && new Date(listing.availableDate) <= new Date()) {
    return '<span class="badge badge-available">available now</span>';
  }
  return `<span class="badge badge-soon">available ${formatDate(listing.availableDate)}</span>`;
}

function getMoveInBadge(listing) {
  if (listing.moveInReady) {
    return '<span class="badge badge-available">move-in ready</span>';
  }
  return "";
}

function getURLParams() {
  return new URLSearchParams(window.location.search);
}

// ---------- navbar scroll effect ----------
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ---------- landing page ----------
function initLanding() {
  const searchForm = document.getElementById("hero-search-form");
  if (!searchForm) return;

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = searchForm.querySelector("input");
    const query = input.value.trim();
    if (query) {
      window.location.href = `listings.html?city=${encodeURIComponent(query)}`;
    } else {
      window.location.href = "listings.html";
    }
  });
}

// ---------- listings page ----------
function initListings() {
  const grid = document.getElementById("listings-grid");
  if (!grid) return;

  const params = getURLParams();
  const filters = {
    city: params.get("city") || "",
    sizeMin: params.get("sizeMin") || "",
    sizeMax: params.get("sizeMax") || "",
    priceMin: params.get("priceMin") || "",
    priceMax: params.get("priceMax") || "",
    type: params.get("type") || ""
  };

  // populate filter inputs
  const cityFilter = document.getElementById("filter-city");
  const sizeMinFilter = document.getElementById("filter-size-min");
  const sizeMaxFilter = document.getElementById("filter-size-max");
  const priceMinFilter = document.getElementById("filter-price-min");
  const priceMaxFilter = document.getElementById("filter-price-max");
  const typeFilter = document.getElementById("filter-type");
  const sortSelect = document.getElementById("sort-select");

  if (cityFilter) cityFilter.value = filters.city;
  if (sizeMinFilter) sizeMinFilter.value = filters.sizeMin;
  if (sizeMaxFilter) sizeMaxFilter.value = filters.sizeMax;
  if (priceMinFilter) priceMinFilter.value = filters.priceMin;
  if (priceMaxFilter) priceMaxFilter.value = filters.priceMax;
  if (typeFilter) typeFilter.value = filters.type;

  function applyFilters() {
    filters.city = cityFilter ? cityFilter.value : "";
    filters.sizeMin = sizeMinFilter ? sizeMinFilter.value : "";
    filters.sizeMax = sizeMaxFilter ? sizeMaxFilter.value : "";
    filters.priceMin = priceMinFilter ? priceMinFilter.value : "";
    filters.priceMax = priceMaxFilter ? priceMaxFilter.value : "";
    filters.type = typeFilter ? typeFilter.value : "";

    // update URL
    const newParams = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => {
      if (v) newParams.set(k, v);
    });
    const newUrl = `${window.location.pathname}${newParams.toString() ? "?" + newParams.toString() : ""}`;
    window.history.replaceState({}, "", newUrl);

    renderListings();
  }

  // attach change handlers
  [cityFilter, sizeMinFilter, sizeMaxFilter, priceMinFilter, priceMaxFilter, typeFilter].forEach(el => {
    if (el) {
      el.addEventListener("change", applyFilters);
      if (el.tagName === "INPUT") {
        el.addEventListener("keyup", debounce(applyFilters, 400));
      }
    }
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", renderListings);
  }

  function getFilteredListings() {
    return listings.filter(l => {
      if (filters.city && !l.city.includes(filters.city.toLowerCase()) && !l.state.includes(filters.city.toLowerCase())) return false;
      if (filters.sizeMin && l.sqft < parseInt(filters.sizeMin)) return false;
      if (filters.sizeMax && l.sqft > parseInt(filters.sizeMax)) return false;
      if (filters.priceMin && l.price < parseInt(filters.priceMin)) return false;
      if (filters.priceMax && l.price > parseInt(filters.priceMax)) return false;
      if (filters.type && l.type !== filters.type) return false;
      return true;
    });
  }

  function sortListings(list) {
    const sort = sortSelect ? sortSelect.value : "newest";
    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "size":
        sorted.sort((a, b) => b.sqft - a.sqft);
        break;
      case "newest":
      default:
        sorted.sort((a, b) => new Date(b.added) - new Date(a.added));
        break;
    }
    return sorted;
  }

  function renderChips() {
    const chipsContainer = document.getElementById("filter-chips");
    if (!chipsContainer) return;

    let html = "";
    if (filters.city) {
      html += `<div class="filter-chip">${filters.city} <button data-filter="city">&times;</button></div>`;
    }
    if (filters.sizeMin || filters.sizeMax) {
      const label = filters.sizeMin && filters.sizeMax
        ? `${parseInt(filters.sizeMin).toLocaleString()} – ${parseInt(filters.sizeMax).toLocaleString()} sq ft`
        : filters.sizeMin
          ? `${parseInt(filters.sizeMin).toLocaleString()}+ sq ft`
          : `up to ${parseInt(filters.sizeMax).toLocaleString()} sq ft`;
      html += `<div class="filter-chip">${label} <button data-filter="size">&times;</button></div>`;
    }
    if (filters.priceMin || filters.priceMax) {
      const label = filters.priceMin && filters.priceMax
        ? `${formatPrice(parseInt(filters.priceMin))} – ${formatPrice(parseInt(filters.priceMax))}/mo`
        : filters.priceMin
          ? `${formatPrice(parseInt(filters.priceMin))}+/mo`
          : `up to ${formatPrice(parseInt(filters.priceMax))}/mo`;
      html += `<div class="filter-chip">${label} <button data-filter="price">&times;</button></div>`;
    }
    if (filters.type) {
      html += `<div class="filter-chip">${filters.type} <button data-filter="type">&times;</button></div>`;
    }
    chipsContainer.innerHTML = html;

    // attach remove handlers
    chipsContainer.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        const f = btn.dataset.filter;
        if (f === "city") {
          filters.city = "";
          if (cityFilter) cityFilter.value = "";
        }
        if (f === "size") {
          filters.sizeMin = "";
          filters.sizeMax = "";
          if (sizeMinFilter) sizeMinFilter.value = "";
          if (sizeMaxFilter) sizeMaxFilter.value = "";
        }
        if (f === "price") {
          filters.priceMin = "";
          filters.priceMax = "";
          if (priceMinFilter) priceMinFilter.value = "";
          if (priceMaxFilter) priceMaxFilter.value = "";
        }
        if (f === "type") {
          filters.type = "";
          if (typeFilter) typeFilter.value = "";
        }
        applyFilters();
      });
    });
  }

  function renderListings() {
    const filtered = getFilteredListings();
    const sorted = sortListings(filtered);

    // update count
    const countEl = document.getElementById("result-count");
    if (countEl) {
      countEl.innerHTML = `showing <strong>${sorted.length}</strong> of <strong>${listings.length}</strong> spaces`;
    }

    renderChips();

    if (sorted.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">&#x1f50d;</div>
          <h3>no spaces match your search</h3>
          <p>try adjusting your filters or searching a different city</p>
          <button class="btn btn-secondary btn-sm" onclick="window.location.href='listings.html'">clear all filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = sorted.map(l => `
      <a href="listing.html?id=${l.id}" class="listing-card">
        <div class="listing-card-img">
          <span class="img-icon">&#x1f3ed;</span>
        </div>
        <div class="listing-card-body">
          <div class="listing-card-type">${l.type}</div>
          <h3>${l.name}</h3>
          <div class="listing-card-address">${l.address}, ${l.city}, ${l.state}</div>
          <div class="listing-card-meta">
            <span>${formatSqft(l.sqft)}</span>
            <span>·</span>
            ${getAvailabilityBadge(l)}
          </div>
          <div class="listing-card-price">${formatPrice(l.price)}<small>/mo</small></div>
        </div>
      </a>
    `).join("");
  }

  renderListings();
}

// ---------- detail page ----------
function initDetail() {
  const container = document.getElementById("detail-container");
  if (!container) return;

  const params = getURLParams();
  const id = parseInt(params.get("id"));
  const listing = listings.find(l => l.id === id);

  if (!listing) {
    container.innerHTML = `
      <div class="empty-state" style="padding-top: 120px;">
        <div class="empty-state-icon">&#x1f614;</div>
        <h3>listing not found</h3>
        <p>we couldn't find the space you're looking for</p>
        <a href="listings.html" class="btn btn-primary btn-sm">browse all spaces</a>
      </div>
    `;
    return;
  }

  // update page title
  document.title = `suitespottr — ${listing.name}`;

  const includedItems = [
    { key: "utilities", label: "utilities included" },
    { key: "wifi", label: "wifi included" },
    { key: "parking", label: "parking included" },
    { key: "hvac", label: "heating & cooling" },
    { key: "trash", label: "trash removal" }
  ];

  const includedHTML = includedItems.map(item => {
    const included = listing.included[item.key];
    return `
      <div class="included-item ${included ? "" : "not-included"}">
        <span class="${included ? "check" : "cross"}">${included ? "✓" : "✗"}</span>
        ${item.label}
      </div>
    `;
  }).join("");

  const deposit = listing.deposit || listing.price;
  const totalMoveIn = listing.price + deposit;

  container.innerHTML = `
    <div class="breadcrumb">
      <a href="listings.html">← back to listings</a>
    </div>

    <div class="detail-layout">
      <div class="detail-left">
        <div class="detail-photo">
          <span class="img-icon">&#x1f3ed;</span>
        </div>

        <div class="detail-badges">
          <span class="listing-card-type" style="margin-bottom:0">${listing.type}</span>
          ${getMoveInBadge(listing)}
          ${getAvailabilityBadge(listing)}
        </div>

        <h1 class="detail-title">${listing.name}</h1>
        <p class="detail-address">${listing.address}, ${listing.city}, ${listing.state}</p>

        <div class="detail-price">${formatPrice(listing.price)}<small style="font-size:0.5em; font-weight:500; color:var(--text-muted)">/mo</small></div>
        <p class="detail-price-label">total monthly cost — everything in one number</p>

        <div class="detail-meta">
          <div class="detail-meta-item">
            <label>size</label>
            <div class="value">${formatSqft(listing.sqft)}</div>
          </div>
          <div class="detail-meta-item">
            <label>minimum lease</label>
            <div class="value">${listing.minLease} months</div>
          </div>
          <div class="detail-meta-item">
            <label>ceiling height</label>
            <div class="value">${listing.ceilingHeight}</div>
          </div>
          <div class="detail-meta-item">
            <label>
              <span class="tooltip-wrap">
                loading type
                <span class="tooltip-icon">?</span>
                <span class="tooltip-text">${listing.loadingTooltip}</span>
              </span>
            </label>
            <div class="value">${listing.loadingType}</div>
          </div>
        </div>

        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.7; margin-bottom: 32px;">${listing.description}</p>

        <div class="included-section">
          <h3>what's included</h3>
          <div class="included-grid">
            ${includedHTML}
          </div>
        </div>
      </div>

      <div class="detail-right">
        <div class="cost-box">
          <h3>estimated move-in cost</h3>
          <div class="cost-line">
            <span class="label">first month</span>
            <span class="amount">${formatPrice(listing.price)}</span>
          </div>
          <div class="cost-line">
            <span class="label">estimated deposit</span>
            <span class="amount">${formatPrice(deposit)}</span>
          </div>
          <div class="cost-total">
            <span class="label">estimated total</span>
            <span class="amount">${formatPrice(totalMoveIn)}</span>
          </div>
        </div>

        <div class="contact-form-box">
          <h3>contact operator</h3>
          <form id="contact-form">
            <div class="form-group">
              <label>your name</label>
              <input type="text" name="name" placeholder="jane smith" required>
              <div class="form-error">please enter your name</div>
            </div>
            <div class="form-group">
              <label>your email</label>
              <input type="email" name="email" placeholder="jane@example.com" required>
              <div class="form-error">please enter a valid email</div>
            </div>
            <div class="form-group">
              <label>message</label>
              <textarea name="message" placeholder="i'm interested in this space and would love to schedule a tour..." required></textarea>
              <div class="form-error">please enter a message</div>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">send message</button>
          </form>
          <div id="contact-confirmation" class="confirmation-message" style="margin-top:16px;">
            <div class="confirmation-icon">✓</div>
            <h3>message sent!</h3>
            <p>the operator will get back to you soon</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // contact form handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        contactForm.style.display = "none";
        document.getElementById("contact-confirmation").classList.add("show");
      }
    });
  }
}

// ---------- list-space page ----------
function initListSpace() {
  const form = document.getElementById("list-space-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      form.style.display = "none";
      document.getElementById("list-confirmation").classList.add("show");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// ---------- form validation ----------
function validateForm(form) {
  let valid = true;
  const groups = form.querySelectorAll(".form-group[data-required]");

  groups.forEach(group => {
    const input = group.querySelector("input, select, textarea");
    if (!input) return;

    group.classList.remove("has-error");
    input.classList.remove("error");

    if (!input.value.trim()) {
      group.classList.add("has-error");
      input.classList.add("error");
      valid = false;
    }

    // email validation
    if (input.type === "email" && input.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(input.value.trim())) {
        group.classList.add("has-error");
        input.classList.add("error");
        valid = false;
      }
    }
  });

  // also validate required inputs without data-required wrapper
  const requiredInputs = form.querySelectorAll("[required]");
  requiredInputs.forEach(input => {
    const group = input.closest(".form-group");
    if (!group) return;
    if (group.hasAttribute("data-required")) return; // already handled

    group.classList.remove("has-error");
    input.classList.remove("error");

    if (!input.value.trim()) {
      group.classList.add("has-error");
      input.classList.add("error");
      valid = false;
    }

    if (input.type === "email" && input.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(input.value.trim())) {
        group.classList.add("has-error");
        input.classList.add("error");
        valid = false;
      }
    }
  });

  return valid;
}

// ---------- debounce ----------
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ---------- init ----------
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initLanding();
  initListings();
  initDetail();
  initListSpace();
});
