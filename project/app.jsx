/* app.jsx — Mounts ONLY the Tweaks panel. Page content is static HTML. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#0E2A47", "#FAF7F0", "#ECE6D8"],
  "accentMode": "navy",
  "radius": 18,
  "watermark": true,
  "heroHeadline": "Precision Tools for Every Procedure, Every Theatre.",
  "ctaCopy": "Place Your Next Order in Under Two Minutes."
}/*EDITMODE-END*/;

/* Apply a tweak to the page imperatively (page is static HTML, not React). */
function applyTweaks(t) {
  const root = document.documentElement;

  // Palette presets — first color = primary, second = bg, third = surface
  root.style.setProperty('--c-primary', t.palette[0]);
  root.style.setProperty('--c-bg', t.palette[1]);
  root.style.setProperty('--c-surface', t.palette[2]);

  // Derive a slightly lighter on-prim cream from bg
  root.style.setProperty('--c-on-prim', t.palette[1]);

  // Slightly darker primary for hover (mix)
  // (Leave --c-primary-2 fixed; not critical.)

  // Card radius
  root.style.setProperty('--r-card', t.radius + 'px');

  // Watermark visibility
  document.querySelectorAll('.hero-watermark, .foot-watermark').forEach(el => {
    el.style.display = t.watermark ? '' : 'none';
  });

  // Hero headline text — preserve the line breaks by splitting on commas
  const h1 = document.querySelector('.hero h1');
  if (h1 && t.heroHeadline) {
    // Render as 3-line headline by splitting on commas (or just full text if no commas)
    const parts = t.heroHeadline.split(',').map(s => s.trim());
    if (parts.length >= 2) {
      h1.innerHTML = parts.map((p, i) =>
        i === parts.length - 1 ? p : p + ','
      ).join('<br/>');
    } else {
      h1.textContent = t.heroHeadline;
    }
  }

  // Final CTA headline
  const cta = document.querySelector('.cta-mid h3');
  if (cta && t.ctaCopy) {
    const parts = t.ctaCopy.split(',').map(s => s.trim());
    if (parts.length >= 2) {
      cta.innerHTML = parts.map((p, i) =>
        i === parts.length - 1 ? p : p + ','
      ).join('<br/>');
    } else {
      cta.textContent = t.ctaCopy;
    }
  }
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Re-apply on every change
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette" />
      <TweakColor
        label="Theme"
        value={t.palette}
        options={[
          ["#0E2A47", "#FAF7F0", "#ECE6D8"],  // Navy + Cream (default)
          ["#1A3D2E", "#F4F1E8", "#E5E0D2"],  // Forest + Cream
          ["#1F1F1F", "#F6F4EF", "#E8E4DA"],  // Graphite + Cream
          ["#2D4A6B", "#F0F4F7", "#D9E2EA"],  // Clinical Blue
          ["#7A2E1F", "#F7F1EC", "#E8DCD0"],  // Terracotta
        ]}
        onChange={(v) => setTweak('palette', v)}
      />

      <TweakSection label="Layout" />
      <TweakSlider
        label="Card Radius"
        value={t.radius} min={4} max={32} step={1} unit="px"
        onChange={(v) => setTweak('radius', v)}
      />
      <TweakToggle
        label="Show Watermark"
        value={t.watermark}
        onChange={(v) => setTweak('watermark', v)}
      />

      <TweakSection label="Copy" />
      <TweakText
        label="Hero Headline"
        value={t.heroHeadline}
        onChange={(v) => setTweak('heroHeadline', v)}
      />
      <TweakText
        label="Final CTA"
        value={t.ctaCopy}
        onChange={(v) => setTweak('ctaCopy', v)}
      />
    </TweaksPanel>
  );
}

// Mount Tweaks panel into a sandbox div appended to body
const mountPoint = document.createElement('div');
mountPoint.id = '__tweaks_mount';
document.body.appendChild(mountPoint);
ReactDOM.createRoot(mountPoint).render(<App />);
