import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 
    bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#38bdf8] 
    bg-[length:200%_200%] text-white">
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Ready to explore my journey?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}
          className="mt-4 text-white/80 max-w-2xl"
        >
          Choose your path below and step into a crafted blend of data, design, and delightful interactions.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/projects" className="px-5 py-3 rounded-2xl bg-primary/20 hover:bg-primary/30 border border-primary/30">I’m here for projects</Link>
          <Link to="/about" className="px-5 py-3 rounded-2xl bg-accent/20 hover:bg-accent/30 border border-accent/30">I’m here to know you</Link>
          <Link to="/experience" className="px-5 py-3 rounded-2xl bg-primary/20 hover:bg-primary/30 border border-primary/30">Experience</Link>
          <Link to="/contact" className="px-5 py-3 rounded-2xl bg-accent/20 hover:bg-accent/30 border border-accent/30">Connect with Me</Link>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(130,209,255,0.15),transparent_60%)]"></div>
      </section>
    </main>
  )
}
