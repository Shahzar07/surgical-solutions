import Link from 'next/link';

export type Crumb = { label: string; href?: string };

/**
 * Full-width hero banner shown first on every inner page, directly under the
 * header. Gives each page a consistent, branded lead-in image + title.
 */
export function PageBanner({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="page-banner">
      <div className="page-banner-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <div className="wrap page-banner-inner">
        {crumbs && crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <span className="crumb-sep">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow page-banner-eyebrow">{eyebrow}</p>}
        <h1 className="display page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
