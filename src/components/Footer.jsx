export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} KIRUTHICK RAJ B J. All rights reserved.</p>
        <p className="opacity-80">Built with React • Tailwind • Framer Motion</p>
      </div>
    </footer>
  )
}
