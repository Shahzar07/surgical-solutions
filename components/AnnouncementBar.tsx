const ITEMS = [
  'Supplying the NHS & private healthcare sector',
  'Single-use instruments in boxes of 10',
  'Cleanroom-packed & fully traceable',
  'Bespoke procedure packs to your spec',
  'Dermatology · ENT · General Surgery · Gynaecology',
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
