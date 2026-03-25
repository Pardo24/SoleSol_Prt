// =============================================================
//  DATA — Edit here to add projects, categories, and grid images
// =============================================================

/**
 * CATEGORIES
 * Defines the sidebar tree sections in order.
 * id        — used to match projects; also becomes the "coming soon" view id
 * label_es  — Spanish label shown in the sidebar
 * label_en  — English label shown in the sidebar
 */
const CATEGORIES = [
  {
    id: 'proyectos',
    label_es: 'Proyectos',
    label_en: 'Projects',
  },
  {
    id: 'participativa',
    label_es: 'Fotografía Participativa',
    label_en: 'Participatory Photography',
  }
  // {
  //   id: 'encargos',
  //   label_es: 'Encargos',
  //   label_en: 'Commissions',
  // },
];

/**
 * PROJECTS
 * Add a new project by pushing an object to this array.
 *
 * id         — unique slug used in the URL hash and nav (e.g. 'deamor')
 * title_es   — project title in Spanish
 * title_en   — project title in English
 * category   — must match a CATEGORIES id above
 * year       — shown in the subtitle (leave '' to omit)
 * images     — layout for the detail page.
 *              Each entry is an array of image URLs:
 *                ['url']            → full-width single image
 *                ['url1', 'url2']   → two images side by side
 *                ['url1','url2','url3'] → three images in a row
 * text_es    — body text in Spanish (HTML allowed)
 * text_en    — body text in English (HTML allowed)
 * meta       — array of { es, en } strings shown below the text.
 *              Use identical strings when no translation is needed.
 */
const PROJECTS = [
  // ── De Amor y de Poder ────────────────────────────────────
  {
    id: 'deamor',
    title_es: 'De Amor y de Poder',
    title_en: 'De Amor y de Poder',
    category: 'proyectos',
    year: '2026',

    images: [
      
      [
        'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_004-851x1024.jpg',
        'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_003-798x1024.jpg',
        'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_001-780x1024.jpg',
      ],
      [
        'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_008-2-1024x683.jpg',
      ],
      [
        'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_007-1-1024x683.jpg',
        'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_009-1-1024x683.jpg',
      ],
    ],

    text_es: `Sol Soler Quesada<br>Carlota Ayub, 1924–2021<br><br>
<em>'De Amor y de Poder'</em> es un fotolibro que se despliega como una disección del acto fotográfico, basado en una serie de fotografías realizadas con una cámara analógica de medio formato y con una técnica fotográfica de múltiple exposición.<br><br>
En ella participan fotógrafa y modelo, nieta y abuela. La fotógrafa despliega su imaginario personal proyectado sobre el sujeto fotografiado, acerca de la vejez, la proximidad a la muerte y el exilio. La modelo, en su ejercicio como abuela, se entrega para performar esas propuestas. Así, el acto fotográfico establece un código relacional, asumido tácitamente, que define al acto en sí mismo como un espacio potencial de ejercicio de poder. Éste se desarrolla en base a la ordenación que propone, de acuerdo a un reparto de roles que se desempeñan según unas normas implícitas. Esto es, alguien que mira, que dispone, que decreta forma, ángulo, distancia y posición. Es decir, alguien que decide. Y, en el otro lado, alguien que no ve, que confía, que se presta a las directrices, que entrega su cuerpo a la máquina y a su operador. Para que a cambio, su imagen se haga perdurable.<br><br>
De esta manera, y al mismo tiempo, esta obra constituye un acto de redención al presentarse con coautoría y de reconocimiento a la historia de vida de Carlota Ayub, que desempeñó su labor como Abuela de Plaza de Mayo durante gran parte de su vida.`,

    text_en: `Sol Soler Quesada<br>Carlota Ayub, 1924–2021<br><br>
<em>'De Amor y de Poder'</em> is a photobook that unfolds as a dissection of the photographic act, based on a series of photographs taken with a medium-format analogue camera using a multiple-exposure technique.<br><br>
Photographer and model, granddaughter and grandmother both participate. The photographer projects her personal imaginings onto the photographed subject — imaginings about old age, the proximity of death, and exile. The model, in her role as grandmother, surrenders herself to perform those propositions. In this way, the photographic act establishes a relational code, tacitly assumed, that defines the act itself as a potential space for the exercise of power. It develops through the ordering it proposes, according to a distribution of roles performed by implicit rules. That is: someone who looks, who arranges, who decrees form, angle, distance and position — someone who decides. And on the other side, someone who does not see, who trusts, who submits to the directives, who gives their body to the machine and its operator, so that in return, their image is made lasting.<br><br>
In this way, this work also constitutes an act of redemption by presenting itself with co-authorship and recognition of the life story of Carlota Ayub, who served as a Grandmother of Plaza de Mayo for much of her life.`,

    meta: [
      { es: 'Maqueta de fotolibro',  en: 'Photobook maquette' },
      { es: '2026',                   en: '2026' },
      { es: '240 páginas',            en: '240 pages' },
      {
        es: 'Portada: tapa dura forrada con tela negra con stamping de golpe seco · 16 × 26 cm (8¾ × 12¾ in.)',
        en: 'Cover: hardback bound in black fabric with blind embossing stamping · 16 × 26 cm (8¾ × 12¾ in.)',
      },
      {
        es: 'Páginas interiores: 16 x 23 cm (6¼ x 9 in.)',
        en: 'Interior pages: 16 x 23 cm (6¼ x 9 in.)',
      },
    ],
  },

  // ── La Revelada ───────────────────────────────────────────
  {
    id: 'revelada',
    title_es: 'La Revelada',
    title_en: 'La Revelada',
    category: 'participativa',
    year: '',

    images: [
      [
        'https://soledadsoler.com/wp-content/uploads/2025/05/plate_number_775.__adjutant_flying_run_2014.79.698-1.webp'
      ],
      [
        'https://soledadsoler.com/wp-content/uploads/2024/01/SALMON_LECTURA_57-scaled.jpg',
        'https://soledadsoler.com/wp-content/uploads/2024/01/SALMON_LECTURA_31-scaled.jpg',
      ],
    ],

   text_es: "<em>La Revelada</em> forma parte de la práctica de fotografía participativa de Soledad Soler, una metodología propia basada en la facilitación de grupos con colectivos vulnerabilizados, donde la fotografía actúa como herramienta de transformación social.<div style='text-align: center;'><br><a href='https://larevelada.com' style='font-weight: bold; color: inherit; text-decoration: none;'>https://larevelada.com</a></div>",

text_en: "<em>La Revelada</em> is part of Soledad Soler's participatory photography practice — a personal methodology based on group facilitation with marginalised communities, where photography operates as a tool for social transformation.<div style='text-align: center;'><br><a href='https://larevelada.com' style='font-weight: bold; color: inherit; text-decoration: none;'>https://larevelada.com</a></div>",
meta: [],
  },

  // ── Add new projects below this line ─────────────────────
  // Example:
  // {
  //   id: 'nuevo-proyecto',
  //   title_es: 'Nombre del Proyecto',
  //   title_en: 'Project Name',
  //   category: 'proyectos',        // must match a CATEGORIES id
  //   year: '2026',
  //   images: [
  //     ['https://soledadsoler.com/wp-content/uploads/...jpg'],
  //     ['https://...jpg', 'https://...jpg'],
  //   ],
  //   text_es: `Texto descriptivo en español.`,
  //   text_en: `Descriptive text in English.`,
  //   meta: [
  //     { es: 'Año', en: 'Year' },
  //   ],
  // },
];

/**
 * GRID
 * Controls which images appear on the home page and in what order.
 * Add or reorder entries freely — they do not have to match the
 * project images array exactly.
 *
 * projectId — must match a project id above
 * src       — image URL (can be any image from the project)
 */
const GRID = [
  {
    projectId: 'deamor',
    src: 'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_004-851x1024.jpg',
  },
  {
    projectId: 'revelada',
    src: 'https://soledadsoler.com/wp-content/uploads/2024/01/SALMON_LECTURA_57-scaled.jpg',
  },
  {
    projectId: 'deamor',
    src: 'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_003-798x1024.jpg',
  },
  {
    projectId: 'revelada',
    src: 'https://soledadsoler.com/wp-content/uploads/2025/05/plate_number_775.__adjutant_flying_run_2014.79.698-1.webp',
  },
  {
    projectId: 'deamor',
    src: 'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_008-2-1024x683.jpg',
  },
  {
    projectId: 'revelada',
    src: 'https://soledadsoler.com/wp-content/uploads/2024/01/SALMON_LECTURA_31-scaled.jpg',
  },
  {
    projectId: 'deamor',
    src: 'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_001-780x1024.jpg',
  },
  {
    projectId: 'deamor',
    src: 'https://soledadsoler.com/wp-content/uploads/2026/03/DE_MOR_Y_DE_PODER_009-1-1024x683.jpg',
  },
  {
    projectId: 'revelada',
    src: 'https://soledadsoler.com/wp-content/uploads/2025/05/plate_number_484._a_sweeping._b_dusting_a_room_2014.79.474-2-783x1024.webp',
  },
];

// =============================================================
//  State
// =============================================================

let currentLang = 'es';
let currentView = 'home';

// =============================================================
//  Bootstrap
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHomeGrid();
  renderProjectViews();

  // Static element events
  document.getElementById('site-name').addEventListener('click', () => navigate('home'));
  document.getElementById('btn-es').addEventListener('click', () => setLang('es'));
  document.getElementById('btn-en').addEventListener('click', () => setLang('en'));
  document.getElementById('mob-toggle').addEventListener('click', toggleSidebar);

  // Browser back / forward
  window.addEventListener('popstate', () => {
    const view = location.hash.replace('#', '') || 'home';
    navigate(view, false);
  });

  // Initial route from URL hash
  const initial = location.hash.replace('#', '') || 'home';
  navigate(initial, false);
});

// =============================================================
//  Render: sidebar nav
// =============================================================

function renderNav() {
  const nav = document.getElementById('tree-nav');
  let html = '';

  CATEGORIES.forEach(cat => {
    const projects = PROJECTS.filter(p => p.category === cat.id);

    html += `
      <div class="tree-section">
        <div class="tree-header">
          <span class="tree-arrow">&#9662;</span>
          <span data-es="${cat.label_es}" data-en="${cat.label_en}">${cat.label_es}</span>
        </div>
        <div class="tree-children">`;

    if (projects.length === 0) {
      html += `<div class="tree-empty" data-es="&#8212; pr&#243;ximamente" data-en="&#8212; coming soon">&#8212; pr&#243;ximamente</div>`;
    } else {
      projects.forEach(p => {
        html += `
          <a class="tree-item" id="nav-${p.id}" data-project="${p.id}" role="button" tabindex="0">
            <span class="tree-item-dot"></span>
            <span data-es="${escAttr(p.title_es)}" data-en="${escAttr(p.title_en)}">${p.title_es}</span>
          </a>`;
      });
    }

    html += `</div></div>`;
  });

  html += `<div class="tree-divider"></div>`;
  html += `<a class="tree-info-link" id="nav-info" role="button" tabindex="0">
             <span data-es="Info" data-en="Info">Info</span>
           </a>`;

  nav.innerHTML = html;

  // Wire clicks
  nav.querySelectorAll('.tree-item[data-project]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.project));
    el.addEventListener('keydown', e => { if (e.key === 'Enter') navigate(el.dataset.project); });
  });

  const infoLink = nav.querySelector('#nav-info');
  infoLink.addEventListener('click', () => navigate('info'));
  infoLink.addEventListener('keydown', e => { if (e.key === 'Enter') navigate('info'); });
}

// =============================================================
//  Render: home masonry grid
// =============================================================

function renderHomeGrid() {
  const grid = document.getElementById('home-grid');

  grid.innerHTML = GRID.map(item => {
    const project = PROJECTS.find(p => p.id === item.projectId);
    const title_es = project ? project.title_es : '';
    const title_en = project ? project.title_en : '';

    return `
      <div class="grid-item" data-project="${item.projectId}" role="button" tabindex="0">
        <img src="${item.src}" alt="${escAttr(title_es)}" loading="lazy">
        <div class="grid-caption" data-es="${escAttr(title_es)}" data-en="${escAttr(title_en)}">${title_es}</div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.grid-item').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.project));
    el.addEventListener('keydown', e => { if (e.key === 'Enter') navigate(el.dataset.project); });
  });
}

// =============================================================
//  Render: project detail views (appended to #main by JS)
// =============================================================

function renderProjectViews() {
  const main = document.getElementById('main');

  PROJECTS.forEach(p => {
    const cat = CATEGORIES.find(c => c.id === p.category);
    const catEs = cat ? cat.label_es : '';
    const catEn = cat ? cat.label_en : '';
    const subtitleEs = p.year ? `${catEs} · ${p.year}` : catEs;
    const subtitleEn = p.year ? `${catEn} · ${p.year}` : catEn;

    // Build image layout
    const imagesHtml = p.images.map(row => {
      if (row.length === 1) {
        return `<img src="${row[0]}" alt="${escAttr(p.title_es)}" loading="lazy">`;
      }
      const imgs = row.map(src =>
        `<img src="${src}" alt="${escAttr(p.title_es)}" loading="lazy">`
      ).join('');
      return `<div class="project-images-row">${imgs}</div>`;
    }).join('');

    // Build meta block
    let metaHtml = '';
    if (p.meta.length > 0) {
      const lines = p.meta.map(m => {
        if (m.es === m.en) {
          return `<div class="project-meta-line">${m.es}</div>`;
        }
        return `<div class="project-meta-line" data-es="${escAttr(m.es)}" data-en="${escAttr(m.en)}">${m.es}</div>`;
      }).join('');
      metaHtml = `<div class="project-meta">${lines}</div>`;
    }

    const div = document.createElement('div');
    div.id = `view-${p.id}`;
    div.className = 'view';
    div.innerHTML = `
      <div class="project-view">
        <h2 data-es="${escAttr(p.title_es)}" data-en="${escAttr(p.title_en)}">${p.title_es}</h2>
        <p class="project-subtitle" data-es="${escAttr(subtitleEs)}" data-en="${escAttr(subtitleEn)}">${subtitleEs}</p>
        <div class="project-images">${imagesHtml}</div>
        <div class="project-text lang-es">${p.text_es}</div>
        <div class="project-text lang-en" style="display:none">${p.text_en}</div>
        ${metaHtml}
      </div>`;

    main.appendChild(div);
  });

  // Empty (coming soon) views for categories with no projects
  CATEGORIES.forEach(cat => {
    const hasProjects = PROJECTS.some(p => p.category === cat.id);
    if (!hasProjects) {
      const div = document.createElement('div');
      div.id = `view-${cat.id}`;
      div.className = 'view';
      div.innerHTML = `
        <div class="empty-view">
          <span data-es="&#8212; pr&#243;ximamente" data-en="&#8212; coming soon">&#8212; pr&#243;ximamente</span>
        </div>`;
      main.appendChild(div);
    }
  });
}

// =============================================================
//  Navigation
// =============================================================

function navigate(view, pushState = true) {
  // Deactivate all views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  // Activate target (fall back to home)
  const target = document.getElementById('view-' + view) || document.getElementById('view-home');
  if (target) {
    target.classList.add('active');
    currentView = target.id.replace('view-', '');
  }

  document.getElementById('main').scrollTo(0, 0);
  updateNavActive();
  document.getElementById('sidebar').classList.remove('open');

  // Update URL hash
  if (pushState) {
    const newHash = currentView === 'home' ? window.location.pathname : `#${currentView}`;
    history.pushState(null, '', newHash);
  }
}

function updateNavActive() {
  document.querySelectorAll('.tree-item, .tree-info-link').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById(`nav-${currentView}`);
  if (navEl) navEl.classList.add('active');
}

// =============================================================
//  Language toggle
// =============================================================

function setLang(lang) {
  currentLang = lang;

  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  // Swap text in all bilingual elements
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Show/hide lang-specific blocks
  document.querySelectorAll('.lang-es').forEach(el => {
    el.style.display = lang === 'es' ? '' : 'none';
  });
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = lang === 'en' ? '' : 'none';
  });
}

// =============================================================
//  Mobile sidebar
// =============================================================

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// =============================================================
//  Utility
// =============================================================

function escAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
