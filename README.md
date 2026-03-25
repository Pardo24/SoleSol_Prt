# Soledad Soler — Portfolio Website

Static site. No build tools, no frameworks. Open `index.html` in a browser.

---

## File structure

```
/
├── index.html        — shell HTML (nav, info page)
├── css/style.css     — all styles
├── js/main.js        — all data + logic
└── README.md
```

---

## How to run locally

Just open `index.html` in any browser. No server needed.

If you need a local server (e.g. to avoid CORS issues with local images):

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## How to add a new project

Open `js/main.js` and add an object to the `PROJECTS` array:

```js
{
  id: 'mi-proyecto',           // unique slug → appears in URL as #mi-proyecto
  title_es: 'Mi Proyecto',
  title_en: 'My Project',
  category: 'proyectos',       // must match a CATEGORIES id (see top of main.js)
  year: '2026',                // shown in subtitle; use '' to omit

  // Image layout for the detail page.
  // Each inner array is a row:
  //   1 URL  → full-width image
  //   2 URLs → side by side
  //   3 URLs → three in a row
  images: [
    ['https://soledadsoler.com/wp-content/uploads/.../image1.jpg'],
    ['https://soledadsoler.com/wp-content/uploads/.../img2.jpg',
     'https://soledadsoler.com/wp-content/uploads/.../img3.jpg'],
  ],

  text_es: `Texto descriptivo en español. Puedes usar <em>HTML</em>.`,
  text_en: `Descriptive text in English. <em>HTML</em> is supported.`,

  meta: [
    { es: 'Serie fotográfica', en: 'Photo series' },
    { es: '2026',              en: '2026' },
  ],
},
```

The project will automatically appear:
- In the sidebar under its category
- In navigation (hash routing, browser back/forward)
- In the project detail view

---

## How to add images to the home grid

Open `js/main.js` and add an entry to the `GRID` array:

```js
{
  projectId: 'mi-proyecto',   // must match a project id above
  src: 'https://soledadsoler.com/wp-content/uploads/.../image.jpg',
},
```

Grid entries can appear in any order and use any image — they don't have to match the `images` array in the project. Reorder entries freely to control the masonry layout.

---

## How to add a new category

Open `js/main.js` and add to the `CATEGORIES` array:

```js
{
  id: 'nueva-categoria',
  label_es: 'Nueva Categoría',
  label_en: 'New Category',
},
```

Then set `category: 'nueva-categoria'` on any project.

---

## Bilingual content

- **Sidebar labels, nav items, captions**: use `data-es` / `data-en` attributes — the JS swaps them on language change. This is handled automatically for anything generated from the data arrays.
- **Long text blocks** (project descriptions, info page): add two separate elements with class `lang-es` / `lang-en` as shown in `index.html` and the project data.

---

## Deployment

Upload all files to Hostinger as-is. No compilation needed. Point the domain to `index.html`.
