export default function Timeline({ items = [] }) {
  return (
    <ol className="relative border-s border-white/10 ml-3">
      {items.map((it, idx) => (
        <li key={idx} className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-white/20 bg-card">
            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
          </span>
          <h3 className="font-semibold">{it.title}</h3>
          <p className="text-white/70 text-sm">{it.subtitle}</p>
          <p className="text-white/60 text-sm mt-1">{it.period}</p>
          {it.points && (
            <ul className="list-disc ms-5 mt-2 text-white/80 text-sm space-y-1">
              {it.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
