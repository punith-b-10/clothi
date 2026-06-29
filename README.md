# TheScropioclothing — Premium Wholesale T-Shirt Catalog

A modern, premium-looking frontend-only wholesale catalog website. No backend, no database. Just open `index.html` and go.

## 🚀 Quick Start

1. **Open locally** — just double-click `index.html` in your browser. Done.
2. **Deploy to GitHub Pages** — push the folder to a GitHub repo, enable GitHub Pages on the `main` branch.
3. **Deploy to Netlify** — drag and drop the folder into [netlify.com/drop](https://netlify.com/drop).
4. **Deploy to Vercel** — `npx vercel` in the folder, or connect your GitHub repo.

## ⚙️ Customise Before Launch

Open `js/main.js` and update these at the top:

```js
const WA_NUMBER  = '919876543210'; // Your WhatsApp number (with country code, no +)
const ADMIN_PASS = 'admin123';     // Change this to a strong password!
```

Also update contact details in `index.html` (phone, Instagram handle, location).

## 🔑 Admin Panel

- Click **Admin** in the navbar (or the tiny "admin" link in the footer).
- Default password: `admin123` — **change this before sharing the link.**
- Add, edit, delete products — changes persist in browser localStorage.
- Upload multiple images per product — they're compressed automatically.

## 📁 Folder Structure

```
tshirt-catalog/
├── index.html          — Main page (all sections)
├── css/
│   └── style.css       — Complete design system
├── js/
│   └── main.js         — Products, filters, admin, lightbox
├── assets/
│   └── images/         — (optional) Store your own image files here
└── README.md
```

## ✨ Features

- Dark / Light mode toggle (persists across sessions)
- Live search (name, description, price, GSM)
- Filter by category and price
- Sort: Newest / Price Low-High / Price High-Low
- Admin panel: add, edit, delete products with image upload
- Image compression (auto resized to 800px JPEG)
- Lightbox with keyboard navigation (←→ Esc)
- Loading screen + skeleton placeholders
- Floating WhatsApp button + scroll-to-top
- Responsive: mobile-first, works on all screen sizes
- Scroll progress bar
- Smooth animations, glassmorphism, soft shadows

## 🎨 Design Tokens

Colours, spacing, and typography are all CSS variables in `css/style.css` under `:root`. Change `--clr-gold` to match your brand colour.

## 📦 No Dependencies

Zero npm, zero build step. Pure HTML + CSS + Vanilla JS.
