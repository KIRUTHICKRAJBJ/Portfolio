import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition hover:shadow-soft ${isActive ? 'bg-card text-primary' : 'hover:bg-muted'}`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="text-lg font-semibold tracking-wide">KIRUTHICK RAJ B J • Portfolio</Link>
        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
        <button
          aria-label="Toggle theme"
          onClick={() => setDark(!dark)}
          className="p-2 rounded-xl hover:bg-muted"
        >
          {dark ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
      </div>
    </header>
  )
}
