import { motion } from "framer-motion"

export default function ExperienceCard({ item, onOpen }) {
  return (
    <motion.div
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="cursor-pointer rounded-2xl p-4 bg-gray-800 hover:bg-gray-700 transition shadow-md"
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-sm text-white/70 line-clamp-2">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags?.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
