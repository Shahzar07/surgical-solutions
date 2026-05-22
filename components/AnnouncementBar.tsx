const ITEMS = [
  'Free P&P on UK orders over £100',
  'NHS & framework supplier',
  'Same-day dispatch before 14:00',
  'ISO 13485 certified',
  'Bespoke instrument design available',
];

export function AnnouncementBar() {
  return (
    <div className="bar" aria-label="Announcements">
      <div className="bar-track">
        {[...ITEMS, ...ITEMS].map((text, i) => (
          <span key={i}>{text}&nbsp;&nbsp;</span>
        ))}
      </div>
    </div>
  );
}
