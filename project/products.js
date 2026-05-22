/* Products data, grid rendering, and cart logic — vanilla JS.
   Each product gets a unique chrome-look SVG instrument on a teal backdrop —
   matches the reference surgical-tray photography aesthetic.        */
(function () {

  // ── Chrome SVG palette: silver gradients reused across every instrument ─
  const CHROME_DEFS = `
    <defs>
      <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0"   stop-color="#F4F8FA"/>
        <stop offset="0.35" stop-color="#C8D2D6"/>
        <stop offset="0.55" stop-color="#6F7B82"/>
        <stop offset="0.75" stop-color="#A8B3B9"/>
        <stop offset="1"   stop-color="#E2EAEE"/>
      </linearGradient>
      <linearGradient id="chrome-h" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0"   stop-color="#E0E8EC"/>
        <stop offset="0.4" stop-color="#7A858B"/>
        <stop offset="0.6" stop-color="#C0CBD0"/>
        <stop offset="1"   stop-color="#F0F4F6"/>
      </linearGradient>
      <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F0E6C8"/>
        <stop offset="0.5" stop-color="#B89968"/>
        <stop offset="1" stop-color="#876E3F"/>
      </linearGradient>
      <radialGradient id="hilite" cx="0.3" cy="0.2" r="0.6">
        <stop offset="0" stop-color="rgba(255,255,255,0.55)"/>
        <stop offset="1" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
      <filter id="metal" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="b"/>
        <feSpecularLighting in="b" surfaceScale="2" specularConstant="0.6" specularExponent="20" lighting-color="white" result="s">
          <feDistantLight azimuth="225" elevation="55"/>
        </feSpecularLighting>
        <feComposite in="s" in2="SourceGraphic" operator="in" result="s2"/>
        <feComposite in="SourceGraphic" in2="s2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
      </filter>
    </defs>`;

  // ── Each instrument: tightly composed within 240×240 viewBox ──────────
  // Drawn with a metallic silver gradient + highlight pass. Two-handled
  // instruments use a slight angle so they read as 3D, not flat icons.

  const ART = {
    // Adson tissue forceps — two tapered blades joined at top
    forceps: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <g transform="rotate(-12 120 120)">
        <!-- left blade -->
        <path d="M108 30 Q104 26 102 30 L88 198 Q86 208 92 214 L100 220 Q106 222 108 216 L108 30Z"
              fill="url(#chrome)" stroke="#4a5358" stroke-width="0.8"/>
        <!-- right blade -->
        <path d="M132 30 Q136 26 138 30 L152 198 Q154 208 148 214 L140 220 Q134 222 132 216 L132 30Z"
              fill="url(#chrome)" stroke="#4a5358" stroke-width="0.8"/>
        <!-- top hinge -->
        <ellipse cx="120" cy="30" rx="22" ry="10" fill="url(#chrome-h)" stroke="#4a5358" stroke-width="0.8"/>
        <ellipse cx="120" cy="28" rx="14" ry="4" fill="rgba(255,255,255,0.4)"/>
        <!-- serration marks on shaft -->
        <g stroke="rgba(40,48,52,0.45)" stroke-width="0.6">
          <line x1="98" y1="80" x2="118" y2="80"/>
          <line x1="98" y1="100" x2="118" y2="100"/>
          <line x1="98" y1="120" x2="118" y2="120"/>
          <line x1="98" y1="140" x2="118" y2="140"/>
          <line x1="122" y1="80" x2="142" y2="80"/>
          <line x1="122" y1="100" x2="142" y2="100"/>
          <line x1="122" y1="120" x2="142" y2="120"/>
          <line x1="122" y1="140" x2="142" y2="140"/>
        </g>
        <!-- tip points -->
        <path d="M88 200 L92 218 L100 220 Z" fill="#2a3236"/>
        <path d="M152 200 L148 218 L140 220 Z" fill="#2a3236"/>
        <!-- specular highlight -->
        <ellipse cx="105" cy="100" rx="3" ry="80" fill="rgba(255,255,255,0.45)"/>
        <ellipse cx="135" cy="100" rx="3" ry="80" fill="rgba(255,255,255,0.25)"/>
      </g>
    </svg>`,

    // Scalpel — handle + angled blade
    scalpel: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <g transform="rotate(-28 120 120)">
        <!-- handle (flat metal) -->
        <rect x="60" y="120" width="100" height="20" rx="3"
              fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
        <!-- handle texture ridges -->
        <g stroke="rgba(40,48,52,0.45)" stroke-width="0.7">
          <line x1="68" y1="124" x2="68" y2="136"/>
          <line x1="74" y1="124" x2="74" y2="136"/>
          <line x1="80" y1="124" x2="80" y2="136"/>
          <line x1="86" y1="124" x2="86" y2="136"/>
          <line x1="92" y1="124" x2="92" y2="136"/>
          <line x1="98" y1="124" x2="98" y2="136"/>
          <line x1="104" y1="124" x2="104" y2="136"/>
          <line x1="110" y1="124" x2="110" y2="136"/>
        </g>
        <!-- blade attachment notch -->
        <rect x="155" y="124" width="6" height="12" fill="#2a3236"/>
        <!-- blade -->
        <path d="M161 122 L210 118 Q220 120 222 128 L222 132 Q220 140 210 142 L161 138 Z"
              fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
        <!-- cutting edge highlight -->
        <path d="M165 132 Q190 134 218 130" stroke="rgba(255,255,255,0.7)" stroke-width="0.8" fill="none"/>
        <!-- handle highlight -->
        <rect x="62" y="122" width="96" height="2" fill="rgba(255,255,255,0.5)"/>
      </g>
    </svg>`,

    // Procedure pack — a sterile foil pouch with label
    pack: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <g transform="rotate(-4 120 120)">
        <!-- pouch -->
        <path d="M40 50 L200 50 L200 200 L40 200 Z"
              fill="url(#chrome)" stroke="#3a4146" stroke-width="1"/>
        <!-- crinkle highlight bands -->
        <path d="M40 75 L200 70" stroke="rgba(255,255,255,0.55)" stroke-width="0.8" fill="none"/>
        <path d="M40 110 L200 108" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" fill="none"/>
        <path d="M40 155 L200 158" stroke="rgba(40,48,52,0.3)" stroke-width="0.6" fill="none"/>
        <!-- perforated seal edge -->
        <g stroke="rgba(40,48,52,0.45)" stroke-width="0.8" stroke-dasharray="2 3">
          <line x1="40" y1="60" x2="200" y2="60"/>
          <line x1="40" y1="190" x2="200" y2="190"/>
        </g>
        <!-- label window -->
        <rect x="74" y="100" width="92" height="50" rx="3" fill="#0E2A47"/>
        <rect x="74" y="100" width="92" height="50" rx="3" fill="url(#hilite)"/>
        <text x="120" y="120" text-anchor="middle" font-family="Instrument Sans, sans-serif"
              font-size="9" font-weight="600" letter-spacing="2" fill="#F6F1E6">STERILE</text>
        <text x="120" y="138" text-anchor="middle" font-family="Instrument Sans, sans-serif"
              font-size="7" letter-spacing="1.5" fill="rgba(246,241,230,0.7)">PROCEDURE PACK</text>
        <!-- corner tear -->
        <path d="M200 50 L186 64 L200 64 Z" fill="#2a3236" opacity="0.6"/>
      </g>
    </svg>`,

    // Suture needle with thread — curved needle + flowing thread
    suture: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <!-- thread -->
      <path d="M20 180 Q60 140 100 150 Q140 160 170 130 Q190 115 200 95"
            fill="none" stroke="#2a3236" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M20 180 Q60 140 100 150 Q140 160 170 130 Q190 115 200 95"
            fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="0.6" stroke-linecap="round"/>
      <!-- thread shadow loops -->
      <path d="M28 175 L24 182" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>
      <!-- curved needle -->
      <path d="M200 95 A40 40 0 1 1 145 130"
            fill="none" stroke="url(#chrome-h)" stroke-width="6" stroke-linecap="round"/>
      <path d="M200 95 A40 40 0 1 1 145 130"
            fill="none" stroke="rgba(40,48,52,0.6)" stroke-width="6.5" stroke-linecap="round" opacity="0.3"/>
      <!-- needle tip (sharp) -->
      <circle cx="145" cy="130" r="2.5" fill="#2a3236"/>
      <!-- needle eye -->
      <circle cx="200" cy="95" r="6" fill="#2a3236"/>
      <circle cx="200" cy="95" r="3.5" fill="#1F6B6B"/>
      <!-- specular -->
      <path d="M180 60 A40 40 0 0 1 220 105" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.2"/>
    </svg>`,

    // Biopsy punch — circular cutter on a handle
    punch: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <g transform="rotate(-8 120 120)">
        <!-- finger grip cap -->
        <ellipse cx="120" cy="34" rx="34" ry="14" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
        <rect x="86" y="34" width="68" height="6" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
        <!-- shaft -->
        <rect x="108" y="40" width="24" height="120" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
        <!-- shaft highlights -->
        <rect x="112" y="42" width="3" height="116" fill="rgba(255,255,255,0.55)"/>
        <rect x="125" y="42" width="2" height="116" fill="rgba(40,48,52,0.3)"/>
        <!-- cutting cylinder -->
        <ellipse cx="120" cy="160" rx="22" ry="8" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
        <path d="M98 160 L98 200 Q98 210 120 212 Q142 210 142 200 L142 160"
              fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
        <!-- cutting hole (dark interior) -->
        <ellipse cx="120" cy="206" rx="18" ry="5" fill="#0a1418"/>
        <ellipse cx="120" cy="204" rx="14" ry="3" fill="#1d2a30"/>
        <!-- cap brand band -->
        <rect x="86" y="36" width="68" height="3" fill="url(#brass)"/>
      </g>
    </svg>`,

    // Sterile gown — folded surgical gown silhouette
    gown: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <!-- gown shape -->
      <path d="M80 50 L120 62 L160 50 L196 80 L178 100 L178 200 L62 200 L62 100 L44 80 Z"
            fill="#F6F1E6" stroke="#3a4146" stroke-width="1" stroke-linejoin="round"/>
      <!-- neckline -->
      <path d="M104 58 L120 70 L136 58 L136 80 Q120 86 104 80 Z" fill="#0E2A47"/>
      <!-- fold lines -->
      <path d="M120 70 L120 200" stroke="rgba(40,48,52,0.18)" stroke-width="1" stroke-dasharray="3 4"/>
      <path d="M80 100 L80 200" stroke="rgba(40,48,52,0.18)" stroke-width="0.8"/>
      <path d="M160 100 L160 200" stroke="rgba(40,48,52,0.18)" stroke-width="0.8"/>
      <!-- sleeve seams -->
      <path d="M62 100 L62 130 L78 130" fill="none" stroke="rgba(40,48,52,0.2)" stroke-width="0.8"/>
      <path d="M178 100 L178 130 L162 130" fill="none" stroke="rgba(40,48,52,0.2)" stroke-width="0.8"/>
      <!-- sterile band -->
      <rect x="62" y="155" width="116" height="12" fill="#0E2A47"/>
      <text x="120" y="164" text-anchor="middle" font-family="Instrument Sans, sans-serif"
            font-size="7" font-weight="600" letter-spacing="2" fill="#F6F1E6">STERILE · SIZE L</text>
      <!-- highlight -->
      <path d="M48 80 L80 60 L82 64 L50 84 Z" fill="rgba(255,255,255,0.5)"/>
    </svg>`,

    // Iodine prep bottle — amber bottle with cap
    iodine: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <!-- cap -->
      <rect x="92" y="28" width="56" height="22" rx="2" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
      <g stroke="rgba(40,48,52,0.45)" stroke-width="0.6">
        <line x1="98" y1="30" x2="98" y2="48"/>
        <line x1="104" y1="30" x2="104" y2="48"/>
        <line x1="110" y1="30" x2="110" y2="48"/>
        <line x1="116" y1="30" x2="116" y2="48"/>
        <line x1="122" y1="30" x2="122" y2="48"/>
        <line x1="128" y1="30" x2="128" y2="48"/>
        <line x1="134" y1="30" x2="134" y2="48"/>
        <line x1="140" y1="30" x2="140" y2="48"/>
      </g>
      <!-- neck -->
      <rect x="100" y="50" width="40" height="14" fill="#5a3a14" stroke="#3a4146" stroke-width="0.8"/>
      <!-- bottle (amber) -->
      <path d="M80 64 L160 64 L160 200 Q160 212 148 212 L92 212 Q80 212 80 200 Z"
            fill="#7A3F12" stroke="#3a1f08" stroke-width="0.8"/>
      <!-- glass highlight -->
      <path d="M84 70 L84 200 Q84 206 90 208" fill="none" stroke="rgba(255,200,140,0.55)" stroke-width="3"/>
      <path d="M156 70 L156 200" fill="none" stroke="rgba(20,8,0,0.4)" stroke-width="2"/>
      <!-- label -->
      <rect x="90" y="110" width="60" height="72" fill="#F6F1E6" stroke="#3a4146" stroke-width="0.6"/>
      <text x="120" y="128" text-anchor="middle" font-family="Instrument Sans, sans-serif"
            font-size="9" font-weight="700" fill="#7A3F12">IODINE</text>
      <text x="120" y="140" text-anchor="middle" font-family="Instrument Sans, sans-serif"
            font-size="6" letter-spacing="1.5" fill="#7A3F12">SKIN PREP</text>
      <line x1="96" y1="148" x2="144" y2="148" stroke="#7A3F12" stroke-width="0.6"/>
      <text x="120" y="160" text-anchor="middle" font-family="Instrument Sans, sans-serif"
            font-size="7" font-weight="600" fill="#0E2A47">10%</text>
      <text x="120" y="172" text-anchor="middle" font-family="Instrument Sans, sans-serif"
            font-size="6" fill="rgba(14,42,71,0.7)">30 ml</text>
    </svg>`,

    // ENT speculum — Y-shaped with threaded handle
    speculum: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <g transform="rotate(0 120 120)">
        <!-- handle -->
        <rect x="108" y="160" width="24" height="58" rx="4" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
        <g stroke="rgba(40,48,52,0.5)" stroke-width="0.7">
          <line x1="110" y1="170" x2="130" y2="170"/>
          <line x1="110" y1="178" x2="130" y2="178"/>
          <line x1="110" y1="186" x2="130" y2="186"/>
          <line x1="110" y1="194" x2="130" y2="194"/>
          <line x1="110" y1="202" x2="130" y2="202"/>
          <line x1="110" y1="210" x2="130" y2="210"/>
        </g>
        <!-- middle hinge -->
        <circle cx="120" cy="155" r="10" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
        <circle cx="120" cy="155" r="3" fill="#2a3236"/>
        <!-- left blade -->
        <path d="M120 150 L60 50 Q56 44 62 42 L72 40 L130 145 Z"
              fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
        <!-- right blade -->
        <path d="M120 150 L180 50 Q184 44 178 42 L168 40 L110 145 Z"
              fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
        <!-- blade tip rounded -->
        <ellipse cx="66" cy="44" rx="8" ry="3" fill="url(#chrome-h)"/>
        <ellipse cx="174" cy="44" rx="8" ry="3" fill="url(#chrome-h)"/>
        <!-- highlight strips -->
        <path d="M115 145 L70 56" stroke="rgba(255,255,255,0.55)" stroke-width="1.2"/>
        <path d="M125 145 L170 56" stroke="rgba(255,255,255,0.55)" stroke-width="1.2"/>
        <rect x="113" y="165" width="3" height="50" fill="rgba(255,255,255,0.4)"/>
      </g>
    </svg>`,

    // Surgical gloves — paired latex gloves
    gloves: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <!-- left glove -->
      <g transform="rotate(-12 80 140)">
        <path d="M50 200 L50 130 Q50 120 58 120 L58 80 Q58 72 66 72 Q74 72 74 80 L74 116 Q74 110 82 110 Q90 110 90 118 L90 110 Q90 102 98 102 Q106 102 106 110 L106 120 Q106 114 114 114 Q122 114 122 122 L122 175 Q122 200 100 200 Z"
              fill="#F6F1E6" stroke="#3a4146" stroke-width="0.8" stroke-linejoin="round"/>
        <!-- cuff band -->
        <rect x="50" y="190" width="72" height="10" fill="rgba(14,42,71,0.15)"/>
      </g>
      <!-- right glove (overlapping) -->
      <g transform="rotate(14 160 140)">
        <path d="M118 200 L118 122 Q118 114 126 114 L126 110 Q126 102 134 102 Q142 102 142 110 L142 118 Q142 110 150 110 Q158 110 158 118 L158 80 Q158 72 166 72 Q174 72 174 80 L174 120 Q182 120 182 130 L182 200 Z"
              fill="#F0EBE0" stroke="#3a4146" stroke-width="0.8" stroke-linejoin="round"/>
        <rect x="118" y="190" width="64" height="10" fill="rgba(14,42,71,0.15)"/>
      </g>
      <!-- highlights -->
      <path d="M62 100 Q70 90 78 100" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>
      <path d="M148 100 Q156 90 164 100" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1"/>
    </svg>`,

    // Suture tray — kidney dish with instruments laid inside
    tray: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
      <!-- kidney dish -->
      <path d="M30 100 Q30 70 80 70 L160 70 Q210 70 210 100 L210 140 Q210 170 160 170 L130 170 Q120 180 110 170 L80 170 Q30 170 30 140 Z"
            fill="url(#chrome-h)" stroke="#3a4146" stroke-width="1"/>
      <!-- inner shadow -->
      <path d="M40 105 Q40 80 80 80 L160 80 Q200 80 200 105 L200 135 Q200 160 160 160 L130 160 Q120 168 110 160 L80 160 Q40 160 40 135 Z"
            fill="rgba(40,48,52,0.18)"/>
      <!-- needle holder inside -->
      <rect x="60" y="110" width="60" height="6" rx="2" fill="url(#chrome)" transform="rotate(-8 90 113)"/>
      <circle cx="60" cy="110" r="4" fill="#2a3236" transform="rotate(-8 90 113)"/>
      <!-- scissors inside -->
      <g transform="translate(115 105) rotate(15)">
        <circle cx="0" cy="0" r="6" fill="none" stroke="url(#chrome)" stroke-width="2"/>
        <circle cx="14" cy="0" r="6" fill="none" stroke="url(#chrome)" stroke-width="2"/>
        <path d="M5 5 L45 25 M9 5 L45 19" stroke="url(#chrome-h)" stroke-width="2" stroke-linecap="round"/>
      </g>
      <!-- gauze square -->
      <rect x="150" y="95" width="40" height="40" fill="#F6F1E6" opacity="0.85"/>
      <g stroke="rgba(40,48,52,0.3)" stroke-width="0.5">
        <line x1="150" y1="103" x2="190" y2="103"/>
        <line x1="150" y1="111" x2="190" y2="111"/>
        <line x1="150" y1="119" x2="190" y2="119"/>
        <line x1="150" y1="127" x2="190" y2="127"/>
        <line x1="158" y1="95" x2="158" y2="135"/>
        <line x1="166" y1="95" x2="166" y2="135"/>
        <line x1="174" y1="95" x2="174" y2="135"/>
        <line x1="182" y1="95" x2="182" y2="135"/>
      </g>
      <!-- highlight on dish rim -->
      <path d="M50 75 Q90 72 130 72" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" fill="none"/>
    </svg>`,
  };

  const PRODUCTS = [
    { id:'p1', sku:'SS-FOR-ADS', name:'Adson Tissue Forceps',          cat:'Singles',     price:4.50,  unit:'pack of 10',  badge:'BEST SELLER', art:'forceps' },
    { id:'p2', sku:'SS-SCL-15',  name:'Disposable Scalpel No.15',      cat:'Singles',     price:2.20,  unit:'each',        badge:null,          art:'scalpel' },
    { id:'p3', sku:'SS-PCK-MNR', name:'Minor Surgery Procedure Pack',  cat:'Packs',       price:18.00, unit:'sterile',     badge:'NEW',         art:'pack' },
    { id:'p4', sku:'SS-PCK-ENT', name:'ENT Examination Kit',           cat:'Packs',       price:32.00, unit:'sterile',     badge:null,          art:'speculum' },
    { id:'p5', sku:'SS-TRY-SUT', name:'Sterile Suture Tray',           cat:'Packs',       price:24.50, unit:'tray',        badge:null,          art:'tray' },
    { id:'p6', sku:'SS-PUN-4MM', name:'Skin Biopsy Punch 4mm',         cat:'Singles',     price:3.80,  unit:'box of 10',   badge:null,          art:'punch' },
    { id:'p7', sku:'SS-GWN-STR', name:'Sterile Surgical Gown — L',     cat:'Consumables', price:6.40,  unit:'each',        badge:'IN STOCK',    art:'gown' },
    { id:'p8', sku:'SS-IOD-PRP', name:'Iodine Skin Prep 30ml',         cat:'Consumables', price:4.20,  unit:'bottle',      badge:null,          art:'iodine' },
  ];

  // ── Render product grid ────────────────────────────────────────────────
  const grid = document.getElementById('prod-grid');
  if (grid) {
    grid.innerHTML = PRODUCTS.map(p => {
      const badgeClass = p.badge === 'IN STOCK' ? 'is-stock'
                       : p.badge === 'NEW'      ? 'is-new'
                       : '';
      return `
      <article class="prod" data-id="${p.id}">
        <div class="prod-media">
          ${p.badge ? `<span class="prod-badge ${badgeClass}">${p.badge}</span>` : ''}
          ${ART[p.art] || ''}
          <button class="prod-quick" data-add="${p.id}">+ Quick Add</button>
        </div>
        <div class="prod-body">
          <span class="prod-cat">${p.cat} · ${p.sku}</span>
          <span class="prod-name">${p.name}</span>
          <div class="prod-foot">
            <span class="prod-price">£${p.price.toFixed(2)}</span>
            <span class="prod-unit">${p.unit}</span>
          </div>
        </div>
      </article>`;
    }).join('');
  }

  // ── Cart state ────────────────────────────────────────────────────────
  const cart = new Map();  // id → qty
  const $ = (s) => document.querySelector(s);

  function fmt(n) { return '£' + n.toFixed(2); }

  function thumbArt(art) {
    // Strip class so the cart thumb can scale it smaller
    return (ART[art] || '').replace('class="instrument"', '');
  }

  function render() {
    const body = $('#drawer-body');
    const foot = $('#drawer-foot');
    const count = [...cart.values()].reduce((a,b)=>a+b,0);
    $('#cart-count').textContent = count;

    if (cart.size === 0) {
      body.innerHTML = `<div class="drawer-empty">
        <div style="font-size:36px; margin-bottom:14px;">🛒</div>
        Your cart is empty.<br/>
        <span style="opacity:.65; font-size:12px;">Browse the catalogue to add products.</span>
      </div>`;
      foot.style.display = 'none';
      return;
    }

    const rows = [...cart.entries()].map(([id, qty]) => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return '';
      return `<div class="drawer-row" data-id="${id}">
        <div class="thumb">${thumbArt(p.art)}</div>
        <div>
          <div class="n">${p.name}</div>
          <div class="m">
            <span>${p.cat} · ${p.unit}</span>
            <span class="qty">
              <button data-dec="${id}" aria-label="Decrease">−</button>
              <span>${qty}</span>
              <button data-inc="${id}" aria-label="Increase">+</button>
            </span>
          </div>
        </div>
        <div class="price">${fmt(p.price * qty)}</div>
      </div>`;
    }).join('');
    body.innerHTML = rows;

    const sub = [...cart.entries()].reduce((s,[id,qty]) => {
      const p = PRODUCTS.find(x => x.id === id);
      return s + (p ? p.price * qty : 0);
    }, 0);
    const ship = sub >= 100 ? 0 : 4.95;
    $('#sub-total').textContent  = fmt(sub);
    $('#ship-total').textContent = ship === 0 ? 'FREE' : fmt(ship);
    $('#grand-total').textContent = fmt(sub + ship);
    foot.style.display = 'block';
  }

  function add(id) {
    cart.set(id, (cart.get(id) || 0) + 1);
    render();
    open();
  }

  function open()  { $('#drawer').classList.add('open'); $('#drawer-mask').classList.add('open'); }
  function close() { $('#drawer').classList.remove('open'); $('#drawer-mask').classList.remove('open'); }

  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) { add(addBtn.dataset.add); return; }
    const inc = e.target.closest('[data-inc]');
    if (inc) { cart.set(inc.dataset.inc, cart.get(inc.dataset.inc) + 1); render(); return; }
    const dec = e.target.closest('[data-dec]');
    if (dec) {
      const v = cart.get(dec.dataset.dec) - 1;
      if (v <= 0) cart.delete(dec.dataset.dec); else cart.set(dec.dataset.dec, v);
      render(); return;
    }
    if (e.target.closest('#open-cart')) { open(); return; }
    if (e.target.closest('#close-cart') || e.target.closest('#drawer-mask')) { close(); return; }

    const chip = e.target.closest('.filter-chip');
    if (chip) {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const filter = chip.textContent.trim();
      document.querySelectorAll('.prod').forEach(card => {
        const p = PRODUCTS.find(x => x.id === card.dataset.id);
        if (filter === 'All' || (p && p.cat === filter)) card.style.display = '';
        else card.style.display = 'none';
      });
    }
  });

  render();
})();
