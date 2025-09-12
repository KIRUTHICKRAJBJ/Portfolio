import { motion } from 'framer-motion'

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="cursor-pointer rounded-2xl p-4 bg-card hover:bg-cardHover transition shadow-soft"
    >
      <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-3" />
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-white/70 line-clamp-2">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags?.map((t,i)=>(
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}
