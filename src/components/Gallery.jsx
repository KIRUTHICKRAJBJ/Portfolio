export default function Gallery({ items = [] }) {
  return (
    <div className="grid-masonry">
      {items.map((it, idx) => (
        <div key={idx} className="break-inside-avoid mb-4 rounded-2xl overflow-hidden bg-card shadow-soft">
          <img src={it.src} alt={it.title} className="w-full object-cover" />
          <div className="p-3">
            <h4 className="font-semibold text-sm">{it.title}</h4>
            {it.caption && <p className="text-xs text-white/70 mt-1">{it.caption}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
