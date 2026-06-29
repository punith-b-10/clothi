/* =============================================
   THESCROPIOCLOTHING — Main JavaScript
   Product Data, Filtering, Admin, UI
   ============================================= */

'use strict';

// ── Constants ──────────────────────────────────────────────────────────────
const WA_NUMBER   = '919876543210'; // Replace with your WhatsApp number
const ADMIN_PASS  = 'admin123';
const LS_KEY      = 'thescropioclothing_products';
const THEME_KEY   = 'thescropioclothing_theme';

// ── SVG Icons ──────────────────────────────────────────────────────────────
const WA_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.13 1.533 5.87L.072 23.998l6.307-1.445A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.39l-.362-.214-3.744.858.93-3.67-.237-.376A9.793 9.793 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.419 0 9.818 4.4 9.818 9.818 0 5.419-4.399 9.818-9.818 9.818z"/>
</svg>`;

// ── Default Products ────────────────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  {
    id: 'p1',
    name: 'Classic Oversized Tee',
    description: 'Premium boxy fit with dropped shoulders. Perfect street-ready silhouette.',
    gsm: '240 GSM 100% Cotton',
    price: 300,
    category: 'oversized',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [],
    emoji: '👕',
    inStock: true,
    isNew: true,
    isPopular: false,
    hasOffer: false,
    addedAt: Date.now() - 86400000,
  },
  {
    id: 'p2',
    name: 'Basic Round Neck',
    description: 'Everyday comfort essential. Ribbed collar, side seams for a clean drape.',
    gsm: '180 GSM Cotton Blend',
    price: 200,
    category: 'round-neck',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [],
    emoji: '👕',
    inStock: true,
    isNew: false,
    isPopular: true,
    hasOffer: false,
    addedAt: Date.now() - 172800000,
  },
  {
    id: 'p3',
    name: 'Polo Club Edition',
    description: 'Two-button placket, tipped collar. Professional meets casual in one tee.',
    gsm: '220 GSM Pique Cotton',
    price: 300,
    category: 'polo',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [],
    emoji: '👔',
    inStock: true,
    isNew: false,
    isPopular: true,
    hasOffer: false,
    addedAt: Date.now() - 259200000,
  },
  {
    id: 'p4',
    name: 'Full Sleeve Essential',
    description: 'Long-sleeve crew neck, ribbed cuffs. Layering season staple.',
    gsm: '200 GSM Cotton',
    price: 300,
    category: 'full-sleeve',
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [],
    emoji: '🧥',
    inStock: true,
    isNew: true,
    isPopular: false,
    hasOffer: true,
    addedAt: Date.now() - 3600000,
  },
  {
    id: 'p5',
    name: 'Value Round Neck',
    description: 'Budget-friendly blank tee for events, printing, uniforms, and gifting.',
    gsm: '160 GSM Cotton Blend',
    price: 200,
    category: 'round-neck',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [],
    emoji: '👕',
    inStock: true,
    isNew: false,
    isPopular: false,
    hasOffer: true,
    addedAt: Date.now() - 432000000,
  },
  {
    id: 'p6',
    name: 'Heavyweight Oversized Drop',
    description: 'Thick, structured shell with a relaxed silhouette. Streetwear grade.',
    gsm: '280 GSM Premium Cotton',
    price: 300,
    category: 'oversized',
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [],
    emoji: '🎽',
    inStock: false,
    isNew: false,
    isPopular: true,
    hasOffer: false,
    addedAt: Date.now() - 518400000,
  },
  {
    id: 'p7',
    name: 'Performance Polo',
    description: 'Moisture-wicking polo for sports, corporate events, and active wear.',
    gsm: '200 GSM Poly-Cotton',
    price: 300,
    category: 'polo',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [],
    emoji: '👔',
    inStock: true,
    isNew: true,
    isPopular: false,
    hasOffer: false,
    addedAt: Date.now() - 7200000,
  },
  {
    id: 'p8',
    name: 'Budget Essentials Pack',
    description: 'Plain tees for bulk printing orders. White, black, grey available.',
    gsm: '150 GSM Cotton',
    price: 200,
    category: 'round-neck',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [],
    emoji: '👕',
    inStock: true,
    isNew: false,
    isPopular: false,
    hasOffer: true,
    addedAt: Date.now() - 604800000,
  },
];

// ── State ────────────────────────────────────────────────────────────────────
const state = {
  products: [],
  filtered: [],
  activeCategory: 'all',
  activePrice: 'all',
  searchQuery: '',
  sortBy: 'newest',
  lightboxImages: [],
  lightboxIndex: 0,
  adminLoggedIn: false,
  editingId: null,
  pendingImages: [],    // base64 images during admin form
};

// ── Storage Helpers ──────────────────────────────────────────────────────────
function loadProducts() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return null;
}
function saveProducts() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state.products)); } catch(e) {}
}
function generateId() {
  return 'p' + Date.now() + Math.random().toString(36).slice(2, 6);
}

// ── Theme ─────────────────────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ── Loading Screen ─────────────────────────────────────────────────────────
function hideLoader() {
  setTimeout(() => {
    document.getElementById('loading-screen')?.classList.add('hidden');
  }, 1500);
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav?.classList.toggle('open');
  });
  // Close on nav link click
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      mobileNav?.classList.remove('open');
    });
  });
}

// ── Scroll Progress + FABs ─────────────────────────────────────────────────
function initScrollBehavior() {
  const progressBar = document.getElementById('scroll-progress');
  const fabTop = document.getElementById('fab-top');
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';
    if (fabTop) fabTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  document.getElementById('fab-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── WhatsApp helpers ─────────────────────────────────────────────────────────
function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
function inquireProduct(product) {
  const msg = `Hi! I'm interested in *${product.name}* (₹${product.price} Wholesale). Please share more details.`;
  window.open(waLink(msg), '_blank');
}

// ── Filter & Sort ─────────────────────────────────────────────────────────────
function applyFilters() {
  let result = [...state.products];

  // Category
  if (state.activeCategory !== 'all') {
    result = result.filter(p => p.category === state.activeCategory);
  }
  // Price
  if (state.activePrice !== 'all') {
    result = result.filter(p => p.price === parseInt(state.activePrice));
  }
  // Search
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.gsm.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      String(p.price).includes(q)
    );
  }
  // Sort
  result.sort((a, b) => {
    if (state.sortBy === 'price-asc') return a.price - b.price;
    if (state.sortBy === 'price-desc') return b.price - a.price;
    return b.addedAt - a.addedAt; // newest first (default)
  });

  state.filtered = result;
  renderProducts();
}

function initFilters() {
  // Category pills
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.dataset.filter;
      applyFilters();
    });
  });
  // Price pills
  document.querySelectorAll('[data-price]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-price]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activePrice = btn.dataset.price;
      applyFilters();
    });
  });
  // Search
  const searchEl = document.getElementById('search-input');
  searchEl?.addEventListener('input', () => {
    state.searchQuery = searchEl.value.trim();
    applyFilters();
  });
  // Sort
  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFilters();
  });
}

// ── Render Products ──────────────────────────────────────────────────────────
function getCategoryLabel(cat) {
  const map = {
    'round-neck': 'Round Neck', 'oversized': 'Oversized', 'polo': 'Polo',
    'full-sleeve': 'Full Sleeve', 'new-arrivals': 'New Arrival'
  };
  return map[cat] || cat;
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  if (!grid) return;

  const count = state.filtered.length;
  if (countEl) countEl.textContent = `${count} product${count !== 1 ? 's' : ''}`;

  if (count === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try a different search or category filter.</p>
      </div>`;
    return;
  }

  grid.innerHTML = state.filtered.map((p, i) => {
    const imgSrc = p.images && p.images[0];
    const imgHTML = imgSrc
      ? `<img src="${imgSrc}" alt="${p.name}" loading="lazy">`
      : `<div class="img-placeholder"><span>${p.emoji || '👕'}</span><span>NO IMAGE YET</span></div>`;

    const multiImg = p.images && p.images.length > 1
      ? `<span class="img-count-overlay">+${p.images.length - 1} more</span>` : '';

    const badges = [
      p.isNew    ? `<span class="badge badge-new">New</span>` : '',
      p.isPopular? `<span class="badge badge-popular">⭐ Popular</span>` : '',
      p.hasOffer ? `<span class="badge badge-offer">🔥 Offer</span>` : '',
    ].filter(Boolean).join('');

    const stockBadge = p.inStock
      ? `<span class="badge badge-in-stock">● In Stock</span>`
      : `<span class="badge badge-out">○ Out of Stock</span>`;

    const sizePills = (p.sizes || []).map(s => `<span class="size-pill">${s}</span>`).join('');

    const inquireMsg = `Hi! I'm interested in *${p.name}* (₹${p.price} Wholesale). Can you share details?`;

    return `
    <article class="product-card" style="animation-delay:${i * 40}ms" data-id="${p.id}">
      <div class="card-badges">${badges}${stockBadge}</div>
      <div class="card-img-wrap" onclick="openLightbox('${p.id}', 0)">
        ${imgHTML}
        ${multiImg}
        <div class="card-zoom-btn"><div class="zoom-icon">🔍</div></div>
      </div>
      <div class="card-body">
        <div class="card-category">${getCategoryLabel(p.category)}</div>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <p class="card-gsm">${p.gsm}</p>
        <div class="card-sizes">${sizePills}</div>
      </div>
      <div class="card-footer">
        <div class="card-price">
          <span class="price-label">Wholesale</span>
          <span class="price-num">₹${p.price}</span>
        </div>
        <button class="btn-inquire" onclick="event.stopPropagation(); window.open('${waLink(inquireMsg)}', '_blank')">
          ${WA_ICON} Inquire
        </button>
      </div>
    </article>`;
  }).join('');
}

// ── Skeletons ─────────────────────────────────────────────────────────────────
function showSkeletons() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = Array(6).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton skeleton-line short"></div>
        <div class="skeleton skeleton-line tall"></div>
        <div class="skeleton skeleton-line med"></div>
        <div class="skeleton skeleton-line short"></div>
      </div>
    </div>`).join('');
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function openLightbox(productId, startIndex) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  if (!product.images || !product.images.length) {
    showToast('No images uploaded for this product yet.');
    return;
  }

  state.lightboxImages = product.images;
  state.lightboxIndex = startIndex || 0;
  updateLightbox();
  document.getElementById('lightbox')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('open');
  document.body.style.overflow = '';
}
function updateLightbox() {
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (img) img.src = state.lightboxImages[state.lightboxIndex];
  if (cap) cap.textContent = `${state.lightboxIndex + 1} / ${state.lightboxImages.length}`;
}
function lightboxNav(dir) {
  const len = state.lightboxImages.length;
  state.lightboxIndex = (state.lightboxIndex + dir + len) % len;
  updateLightbox();
}
function initLightbox() {
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });
}

// ── Toast ──────────────────────────────────────────────────────────────────────
function showToast(msg, duration = 2800) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), duration);
}

// ── Admin Auth ─────────────────────────────────────────────────────────────────
function openAdminLogin() {
  if (state.adminLoggedIn) { openAdminPanel(); return; }
  document.getElementById('modal-admin-login')?.classList.add('open');
}
function closeAdminLogin() {
  document.getElementById('modal-admin-login')?.classList.remove('open');
  document.getElementById('admin-pass-input').value = '';
  document.getElementById('admin-pass-error').textContent = '';
}
function submitAdminLogin() {
  const val = document.getElementById('admin-pass-input')?.value;
  if (val === ADMIN_PASS) {
    state.adminLoggedIn = true;
    closeAdminLogin();
    openAdminPanel();
  } else {
    document.getElementById('admin-pass-error').textContent = 'Incorrect password. Try again.';
    document.getElementById('admin-pass-input').value = '';
  }
}

// ── Admin Panel ────────────────────────────────────────────────────────────────
function openAdminPanel() {
  document.getElementById('admin-panel')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderAdminTable();
  updateAdminStats();
}
function closeAdminPanel() {
  document.getElementById('admin-panel')?.classList.remove('open');
  document.body.style.overflow = '';
}
function updateAdminStats() {
  document.getElementById('admin-stat-total').textContent = state.products.length;
  document.getElementById('admin-stat-instock').textContent = state.products.filter(p => p.inStock).length;
  document.getElementById('admin-stat-prices').textContent = '₹200 & ₹300';
}
function renderAdminTable() {
  const tbody = document.getElementById('admin-tbody');
  if (!tbody) return;
  if (!state.products.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--clr-text-3);padding:40px">No products yet. Add your first product!</td></tr>`;
    return;
  }
  tbody.innerHTML = state.products.map(p => {
    const thumb = p.images && p.images[0]
      ? `<div class="admin-thumb"><img src="${p.images[0]}" alt="${p.name}"></div>`
      : `<div class="admin-thumb">${p.emoji || '👕'}</div>`;
    return `
    <tr>
      <td>
        <div class="admin-item-info">
          ${thumb}
          <div>
            <div class="admin-item-name">${p.name}</div>
            <div class="admin-item-cat">${getCategoryLabel(p.category)}</div>
          </div>
        </div>
      </td>
      <td><span style="font-family:var(--font-mono);font-weight:600;color:var(--clr-gold)">₹${p.price}</span></td>
      <td>${p.inStock ? '<span class="badge badge-in-stock">In Stock</span>' : '<span class="badge badge-out">Out</span>'}</td>
      <td><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--clr-text-3)">${p.images ? p.images.length : 0} imgs</span></td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn-edit" onclick="editProduct('${p.id}')">Edit</button>
          <button class="btn-delete" onclick="deleteProduct('${p.id}')">Delete</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

// ── Product Form ───────────────────────────────────────────────────────────────
function openAddProduct() {
  state.editingId = null;
  state.pendingImages = [];
  document.getElementById('form-modal-title').textContent = 'Add Product';
  document.getElementById('product-form').reset();
  document.getElementById('form-img-preview').innerHTML = '';
  document.getElementById('modal-product-form')?.classList.add('open');
}
function editProduct(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  state.editingId = id;
  state.pendingImages = [...(p.images || [])];
  document.getElementById('form-modal-title').textContent = 'Edit Product';
  document.getElementById('form-name').value = p.name;
  document.getElementById('form-desc').value = p.description;
  document.getElementById('form-gsm').value = p.gsm;
  document.getElementById('form-price').value = p.price;
  document.getElementById('form-category').value = p.category;
  document.getElementById('form-sizes').value = (p.sizes || []).join(', ');
  document.getElementById('form-stock').value = p.inStock ? 'true' : 'false';
  document.getElementById('form-emoji').value = p.emoji || '👕';
  document.getElementById('form-is-new').checked = p.isNew;
  document.getElementById('form-is-popular').checked = p.isPopular;
  document.getElementById('form-has-offer').checked = p.hasOffer;
  renderImgPreviews();
  document.getElementById('modal-product-form')?.classList.add('open');
}
function closeProductForm() {
  document.getElementById('modal-product-form')?.classList.remove('open');
  state.editingId = null;
  state.pendingImages = [];
}

function handleImageUpload(files) {
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    // Compress by resizing to max 800px
    const reader = new FileReader();
    reader.onload = (e) => {
      compressImage(e.target.result, 800, 0.82, (compressed) => {
        state.pendingImages.push(compressed);
        renderImgPreviews();
      });
    };
    reader.readAsDataURL(file);
  });
}

function compressImage(src, maxWidth, quality, callback) {
  const img = new Image();
  img.onload = () => {
    const scale = Math.min(1, maxWidth / img.width);
    const w = img.width * scale, h = img.height * scale;
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
    callback(canvas.toDataURL('image/jpeg', quality));
  };
  img.src = src;
}

function renderImgPreviews() {
  const container = document.getElementById('form-img-preview');
  if (!container) return;
  container.innerHTML = state.pendingImages.map((src, i) => `
    <div class="img-preview-item">
      <img src="${src}" alt="Preview">
      <button class="img-preview-remove" onclick="removePreviewImg(${i})">✕</button>
    </div>`).join('');
}
function removePreviewImg(index) {
  state.pendingImages.splice(index, 1);
  renderImgPreviews();
}

function saveProduct() {
  const name = document.getElementById('form-name').value.trim();
  const desc = document.getElementById('form-desc').value.trim();
  const gsm  = document.getElementById('form-gsm').value.trim();
  const price = parseInt(document.getElementById('form-price').value);
  const cat   = document.getElementById('form-category').value;
  const sizesRaw = document.getElementById('form-sizes').value;
  const sizes = sizesRaw.split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
  const inStock = document.getElementById('form-stock').value === 'true';
  const emoji = document.getElementById('form-emoji').value || '👕';
  const isNew = document.getElementById('form-is-new').checked;
  const isPopular = document.getElementById('form-is-popular').checked;
  const hasOffer = document.getElementById('form-has-offer').checked;

  if (!name || !price || !cat) { showToast('⚠️ Please fill required fields.'); return; }

  if (state.editingId) {
    const idx = state.products.findIndex(p => p.id === state.editingId);
    if (idx !== -1) {
      state.products[idx] = { ...state.products[idx], name, description: desc, gsm, price, category: cat, sizes, inStock, emoji, isNew, isPopular, hasOffer, images: state.pendingImages };
    }
    showToast('✅ Product updated!');
  } else {
    state.products.unshift({
      id: generateId(), name, description: desc, gsm, price, category: cat,
      sizes, inStock, emoji, isNew, isPopular, hasOffer,
      images: state.pendingImages, addedAt: Date.now(),
    });
    showToast('✅ Product added!');
  }

  saveProducts();
  applyFilters();
  renderAdminTable();
  updateAdminStats();
  closeProductForm();
}

function deleteProduct(id) {
  if (!confirm('Delete this product? This cannot be undone.')) return;
  state.products = state.products.filter(p => p.id !== id);
  saveProducts();
  applyFilters();
  renderAdminTable();
  updateAdminStats();
  showToast('🗑️ Product deleted.');
}

// ── Init ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Theme
  initTheme();
  document.getElementById('theme-btn')?.addEventListener('click', toggleTheme);

  // Load products from localStorage or defaults
  const saved = loadProducts();
  state.products = saved || DEFAULT_PRODUCTS;

  // Nav
  initNavbar();
  initScrollBehavior();
  initFilters();
  initLightbox();

  // Show skeletons briefly then render
  showSkeletons();
  setTimeout(() => {
    applyFilters();
    hideLoader();
  }, 800);

  // Smooth scroll from nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Admin login form enter key
  document.getElementById('admin-pass-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitAdminLogin();
  });

  // Image upload listener
  document.getElementById('img-upload-input')?.addEventListener('change', (e) => {
    handleImageUpload(e.target.files);
  });

  // Drag & drop on upload area
  const uploadArea = document.getElementById('img-upload-area');
  uploadArea?.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.style.borderColor = 'var(--clr-gold)'; });
  uploadArea?.addEventListener('dragleave', () => { uploadArea.style.borderColor = ''; });
  uploadArea?.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    handleImageUpload(e.dataTransfer.files);
  });

  // Keyboard navigation for lightbox
  document.getElementById('hero-view-btn')?.addEventListener('click', () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Expose functions to global for onclick handlers
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.lightboxNav = lightboxNav;
  window.openAdminLogin = openAdminLogin;
  window.closeAdminLogin = closeAdminLogin;
  window.submitAdminLogin = submitAdminLogin;
  window.openAdminPanel = openAdminPanel;
  window.closeAdminPanel = closeAdminPanel;
  window.openAddProduct = openAddProduct;
  window.editProduct = editProduct;
  window.deleteProduct = deleteProduct;
  window.closeProductForm = closeProductForm;
  window.saveProduct = saveProduct;
  window.removePreviewImg = removePreviewImg;
  window.inquireProduct = inquireProduct;
});

// ── Intersection Observer for lazy-reveal ─────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Re-observe on product render (called after render)
function observeCards() {
  document.querySelectorAll('.product-card').forEach(card => {
    revealObserver.observe(card);
  });
}
