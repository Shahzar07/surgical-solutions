export const CHROME_DEFS = `
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
  </defs>`;

export const ART: Record<string, string> = {
  forceps: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <g transform="rotate(-12 120 120)">
      <path d="M108 30 Q104 26 102 30 L88 198 Q86 208 92 214 L100 220 Q106 222 108 216 L108 30Z" fill="url(#chrome)" stroke="#4a5358" stroke-width="0.8"/>
      <path d="M132 30 Q136 26 138 30 L152 198 Q154 208 148 214 L140 220 Q134 222 132 216 L132 30Z" fill="url(#chrome)" stroke="#4a5358" stroke-width="0.8"/>
      <ellipse cx="120" cy="30" rx="22" ry="10" fill="url(#chrome-h)" stroke="#4a5358" stroke-width="0.8"/>
      <ellipse cx="120" cy="28" rx="14" ry="4" fill="rgba(255,255,255,0.4)"/>
      <g stroke="rgba(40,48,52,0.45)" stroke-width="0.6">
        <line x1="98" y1="80" x2="118" y2="80"/><line x1="98" y1="100" x2="118" y2="100"/>
        <line x1="98" y1="120" x2="118" y2="120"/><line x1="98" y1="140" x2="118" y2="140"/>
        <line x1="122" y1="80" x2="142" y2="80"/><line x1="122" y1="100" x2="142" y2="100"/>
        <line x1="122" y1="120" x2="142" y2="120"/><line x1="122" y1="140" x2="142" y2="140"/>
      </g>
      <path d="M88 200 L92 218 L100 220 Z" fill="#2a3236"/>
      <path d="M152 200 L148 218 L140 220 Z" fill="#2a3236"/>
      <ellipse cx="105" cy="100" rx="3" ry="80" fill="rgba(255,255,255,0.45)"/>
      <ellipse cx="135" cy="100" rx="3" ry="80" fill="rgba(255,255,255,0.25)"/>
    </g>
  </svg>`,

  scalpel: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <g transform="rotate(-28 120 120)">
      <rect x="60" y="120" width="100" height="20" rx="3" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
      <g stroke="rgba(40,48,52,0.45)" stroke-width="0.7">
        <line x1="68" y1="124" x2="68" y2="136"/><line x1="74" y1="124" x2="74" y2="136"/>
        <line x1="80" y1="124" x2="80" y2="136"/><line x1="86" y1="124" x2="86" y2="136"/>
        <line x1="92" y1="124" x2="92" y2="136"/><line x1="98" y1="124" x2="98" y2="136"/>
        <line x1="104" y1="124" x2="104" y2="136"/><line x1="110" y1="124" x2="110" y2="136"/>
      </g>
      <rect x="155" y="124" width="6" height="12" fill="#2a3236"/>
      <path d="M161 122 L210 118 Q220 120 222 128 L222 132 Q220 140 210 142 L161 138 Z" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
      <path d="M165 132 Q190 134 218 130" stroke="rgba(255,255,255,0.7)" stroke-width="0.8" fill="none"/>
      <rect x="62" y="122" width="96" height="2" fill="rgba(255,255,255,0.5)"/>
    </g>
  </svg>`,

  pack: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <g transform="rotate(-4 120 120)">
      <path d="M40 50 L200 50 L200 200 L40 200 Z" fill="url(#chrome)" stroke="#3a4146" stroke-width="1"/>
      <path d="M40 75 L200 70" stroke="rgba(255,255,255,0.55)" stroke-width="0.8" fill="none"/>
      <path d="M40 110 L200 108" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" fill="none"/>
      <path d="M40 155 L200 158" stroke="rgba(40,48,52,0.3)" stroke-width="0.6" fill="none"/>
      <g stroke="rgba(40,48,52,0.45)" stroke-width="0.8" stroke-dasharray="2 3">
        <line x1="40" y1="60" x2="200" y2="60"/><line x1="40" y1="190" x2="200" y2="190"/>
      </g>
      <rect x="74" y="100" width="92" height="50" rx="3" fill="#0E2A47"/>
      <rect x="74" y="100" width="92" height="50" rx="3" fill="url(#hilite)"/>
      <text x="120" y="120" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="9" font-weight="600" letter-spacing="2" fill="#F6F1E6">STERILE</text>
      <text x="120" y="138" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="7" letter-spacing="1.5" fill="rgba(246,241,230,0.7)">PROCEDURE PACK</text>
      <path d="M200 50 L186 64 L200 64 Z" fill="#2a3236" opacity="0.6"/>
    </g>
  </svg>`,

  punch: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <g transform="rotate(-8 120 120)">
      <ellipse cx="120" cy="34" rx="34" ry="14" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
      <rect x="86" y="34" width="68" height="6" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
      <rect x="108" y="40" width="24" height="120" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
      <rect x="112" y="42" width="3" height="116" fill="rgba(255,255,255,0.55)"/>
      <rect x="125" y="42" width="2" height="116" fill="rgba(40,48,52,0.3)"/>
      <ellipse cx="120" cy="160" rx="22" ry="8" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
      <path d="M98 160 L98 200 Q98 210 120 212 Q142 210 142 200 L142 160" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
      <ellipse cx="120" cy="206" rx="18" ry="5" fill="#0a1418"/>
      <ellipse cx="120" cy="204" rx="14" ry="3" fill="#1d2a30"/>
      <rect x="86" y="36" width="68" height="3" fill="url(#brass)"/>
    </g>
  </svg>`,

  gown: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <path d="M80 50 L120 62 L160 50 L196 80 L178 100 L178 200 L62 200 L62 100 L44 80 Z" fill="#F6F1E6" stroke="#3a4146" stroke-width="1" stroke-linejoin="round"/>
    <path d="M104 58 L120 70 L136 58 L136 80 Q120 86 104 80 Z" fill="#0E2A47"/>
    <path d="M120 70 L120 200" stroke="rgba(40,48,52,0.18)" stroke-width="1" stroke-dasharray="3 4"/>
    <path d="M80 100 L80 200" stroke="rgba(40,48,52,0.18)" stroke-width="0.8"/>
    <path d="M160 100 L160 200" stroke="rgba(40,48,52,0.18)" stroke-width="0.8"/>
    <path d="M62 100 L62 130 L78 130" fill="none" stroke="rgba(40,48,52,0.2)" stroke-width="0.8"/>
    <path d="M178 100 L178 130 L162 130" fill="none" stroke="rgba(40,48,52,0.2)" stroke-width="0.8"/>
    <rect x="62" y="155" width="116" height="12" fill="#0E2A47"/>
    <text x="120" y="164" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="7" font-weight="600" letter-spacing="2" fill="#F6F1E6">STERILE · SIZE L</text>
    <path d="M48 80 L80 60 L82 64 L50 84 Z" fill="rgba(255,255,255,0.5)"/>
  </svg>`,

  iodine: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <rect x="92" y="28" width="56" height="22" rx="2" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
    <g stroke="rgba(40,48,52,0.45)" stroke-width="0.6">
      <line x1="98" y1="30" x2="98" y2="48"/><line x1="104" y1="30" x2="104" y2="48"/>
      <line x1="110" y1="30" x2="110" y2="48"/><line x1="116" y1="30" x2="116" y2="48"/>
      <line x1="122" y1="30" x2="122" y2="48"/><line x1="128" y1="30" x2="128" y2="48"/>
      <line x1="134" y1="30" x2="134" y2="48"/><line x1="140" y1="30" x2="140" y2="48"/>
    </g>
    <rect x="100" y="50" width="40" height="14" fill="#5a3a14" stroke="#3a4146" stroke-width="0.8"/>
    <path d="M80 64 L160 64 L160 200 Q160 212 148 212 L92 212 Q80 212 80 200 Z" fill="#7A3F12" stroke="#3a1f08" stroke-width="0.8"/>
    <path d="M84 70 L84 200 Q84 206 90 208" fill="none" stroke="rgba(255,200,140,0.55)" stroke-width="3"/>
    <path d="M156 70 L156 200" fill="none" stroke="rgba(20,8,0,0.4)" stroke-width="2"/>
    <rect x="90" y="110" width="60" height="72" fill="#F6F1E6" stroke="#3a4146" stroke-width="0.6"/>
    <text x="120" y="128" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="9" font-weight="700" fill="#7A3F12">IODINE</text>
    <text x="120" y="140" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="6" letter-spacing="1.5" fill="#7A3F12">SKIN PREP</text>
    <line x1="96" y1="148" x2="144" y2="148" stroke="#7A3F12" stroke-width="0.6"/>
    <text x="120" y="160" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="7" font-weight="600" fill="#0E2A47">10%</text>
    <text x="120" y="172" text-anchor="middle" font-family="Instrument Sans, sans-serif" font-size="6" fill="rgba(14,42,71,0.7)">30 ml</text>
  </svg>`,

  speculum: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <g>
      <rect x="108" y="160" width="24" height="58" rx="4" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
      <g stroke="rgba(40,48,52,0.5)" stroke-width="0.7">
        <line x1="110" y1="170" x2="130" y2="170"/><line x1="110" y1="178" x2="130" y2="178"/>
        <line x1="110" y1="186" x2="130" y2="186"/><line x1="110" y1="194" x2="130" y2="194"/>
        <line x1="110" y1="202" x2="130" y2="202"/><line x1="110" y1="210" x2="130" y2="210"/>
      </g>
      <circle cx="120" cy="155" r="10" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="0.8"/>
      <circle cx="120" cy="155" r="3" fill="#2a3236"/>
      <path d="M120 150 L60 50 Q56 44 62 42 L72 40 L130 145 Z" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
      <path d="M120 150 L180 50 Q184 44 178 42 L168 40 L110 145 Z" fill="url(#chrome)" stroke="#3a4146" stroke-width="0.8"/>
      <ellipse cx="66" cy="44" rx="8" ry="3" fill="url(#chrome-h)"/>
      <ellipse cx="174" cy="44" rx="8" ry="3" fill="url(#chrome-h)"/>
      <path d="M115 145 L70 56" stroke="rgba(255,255,255,0.55)" stroke-width="1.2"/>
      <path d="M125 145 L170 56" stroke="rgba(255,255,255,0.55)" stroke-width="1.2"/>
      <rect x="113" y="165" width="3" height="50" fill="rgba(255,255,255,0.4)"/>
    </g>
  </svg>`,

  tray: `<svg class="instrument" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${CHROME_DEFS}
    <path d="M30 100 Q30 70 80 70 L160 70 Q210 70 210 100 L210 140 Q210 170 160 170 L130 170 Q120 180 110 170 L80 170 Q30 170 30 140 Z" fill="url(#chrome-h)" stroke="#3a4146" stroke-width="1"/>
    <path d="M40 105 Q40 80 80 80 L160 80 Q200 80 200 105 L200 135 Q200 160 160 160 L130 160 Q120 168 110 160 L80 160 Q40 160 40 135 Z" fill="rgba(40,48,52,0.18)"/>
    <rect x="60" y="110" width="60" height="6" rx="2" fill="url(#chrome)" transform="rotate(-8 90 113)"/>
    <circle cx="60" cy="110" r="4" fill="#2a3236" transform="rotate(-8 90 113)"/>
    <g transform="translate(115 105) rotate(15)">
      <circle cx="0" cy="0" r="6" fill="none" stroke="url(#chrome)" stroke-width="2"/>
      <circle cx="14" cy="0" r="6" fill="none" stroke="url(#chrome)" stroke-width="2"/>
      <path d="M5 5 L45 25 M9 5 L45 19" stroke="url(#chrome-h)" stroke-width="2" stroke-linecap="round"/>
    </g>
    <rect x="150" y="95" width="40" height="40" fill="#F6F1E6" opacity="0.85"/>
    <g stroke="rgba(40,48,52,0.3)" stroke-width="0.5">
      <line x1="150" y1="103" x2="190" y2="103"/><line x1="150" y1="111" x2="190" y2="111"/>
      <line x1="150" y1="119" x2="190" y2="119"/><line x1="150" y1="127" x2="190" y2="127"/>
      <line x1="158" y1="95" x2="158" y2="135"/><line x1="166" y1="95" x2="166" y2="135"/>
      <line x1="174" y1="95" x2="174" y2="135"/><line x1="182" y1="95" x2="182" y2="135"/>
    </g>
    <path d="M50 75 Q90 72 130 72" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" fill="none"/>
  </svg>`,
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  cat: 'Singles' | 'Packs' | 'Consumables';
  price: number;
  unit: string;
  badge: 'BEST SELLER' | 'NEW' | 'IN STOCK' | null;
  art: keyof typeof ART;
};

export const PRODUCTS: Product[] = [
  { id: 'p1', sku: 'SS-FOR-ADS', name: 'Adson Tissue Forceps',         cat: 'Singles',     price: 4.50,  unit: 'pack of 10', badge: 'BEST SELLER', art: 'forceps' },
  { id: 'p2', sku: 'SS-SCL-15',  name: 'Disposable Scalpel No.15',     cat: 'Singles',     price: 2.20,  unit: 'each',       badge: null,          art: 'scalpel' },
  { id: 'p3', sku: 'SS-PCK-MNR', name: 'Minor Surgery Procedure Pack', cat: 'Packs',       price: 18.00, unit: 'sterile',    badge: 'NEW',         art: 'pack' },
  { id: 'p4', sku: 'SS-PCK-ENT', name: 'ENT Examination Kit',          cat: 'Packs',       price: 32.00, unit: 'sterile',    badge: null,          art: 'speculum' },
  { id: 'p5', sku: 'SS-TRY-SUT', name: 'Sterile Suture Tray',          cat: 'Packs',       price: 24.50, unit: 'tray',       badge: null,          art: 'tray' },
  { id: 'p6', sku: 'SS-PUN-4MM', name: 'Skin Biopsy Punch 4mm',        cat: 'Singles',     price: 3.80,  unit: 'box of 10',  badge: null,          art: 'punch' },
  { id: 'p7', sku: 'SS-GWN-STR', name: 'Sterile Surgical Gown — L',    cat: 'Consumables', price: 6.40,  unit: 'each',       badge: 'IN STOCK',    art: 'gown' },
  { id: 'p8', sku: 'SS-IOD-PRP', name: 'Iodine Skin Prep 30ml',        cat: 'Consumables', price: 4.20,  unit: 'bottle',     badge: null,          art: 'iodine' },
];

export const fmtGBP = (n: number): string => '£' + n.toFixed(2);
