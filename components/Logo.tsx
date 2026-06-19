/**
 * Crisp, vector logo lockup that replaces the low-resolution .webm video logo
 * (which rendered blurry when scaled). The mark animates with a gentle pulse;
 * the wordmark uses real fonts so it stays sharp at any size / pixel density.
 */
export function Logo({ size = 'header' }: { size?: 'header' | 'footer' }) {
  return (
    <span className={`logo logo-${size}`}>
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="42" height="42" rx="13" fill="url(#logo-grad)" />
          <rect x="1.5" y="1.5" width="41" height="41" rx="12.5" fill="none" stroke="rgba(255,255,255,.28)" />
          {/* Medical cross */}
          <path d="M22 11.5V32.5M11.5 22H32.5" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" />
          {/* Pulsing ring */}
          <circle className="logo-pulse" cx="22" cy="22" r="13.5" stroke="#fff" strokeWidth="1.4" />
          <defs>
            <linearGradient id="logo-grad" x1="2" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2FA3A3" />
              <stop offset="0.55" stopColor="#1F8A8A" />
              <stop offset="1" stopColor="#0E2A47" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="logo-word">
        <span className="logo-1">Surgical</span>
        <span className="logo-2">Solutions</span>
      </span>
    </span>
  );
}
