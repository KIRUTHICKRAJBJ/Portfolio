import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    id: 'stress-eeg',
    title: 'EEG-Based Stress Level Detection',
    description: 'ML/DL model to classify stress levels from EEG signals using 32-channel data.',
    thumbnail: '/thumbnails/EEG.jpg',
    tags: ['Python', 'TensorFlow', 'Scikit-learn'],
    children: [
      { title: 'Code (GitHub)', file: 'https://github.com/KIRUTHICKRAJBJ/EEG-Based-stress-detection' },
      { title: 'Report (PDF)', file: '/dashboards/eeg_report.pdf' }
    ]
  },
  {
    id: 'doc-llm',
    title: 'Document Analysis using LLM',
    description: 'Built a document analysis pipeline with LLM + FAISS for semantic search.',
    thumbnail: '/thumbnails/llm.png',
    tags: ['LangChain', 'FAISS', 'LLMs'],
    children: [
      { title: 'GitHub Repo', file: 'https://github.com/SabudhFoundation/passion-project-doc_analysis_using_llms-mr-akshay' }
    ]
  },
    {
    id: 'customer-behavior',
    title: 'Customer Behaviour Analysis',
    description: 'Data Analysis of Customer Behavior using Python, Sql, PowerBI.',
    thumbnail: '/thumbnails/cba.jpg',
    tags: ['Python', 'SQL', 'PowerBI'],
    children: [
      { title: 'GitHub Repo', file: 'https://github.com/KIRUTHICKRAJBJ/Customer_Behavior_Analysis' }
    ]
  },
  {
    id: 'Amazon Prime Video Analysis',
    title: 'Amazon Prime Video Analysis',
    description: 'Interactive dashboards with Power BI on Movies and series',
    thumbnail: '/thumbnails/Prime video.png',
    tags: ['MICROSOFT PowerBI', 'Data Visualization'],
    children: [
      { title: 'Prime Video Dashboard', file: '/dashboards/Prime video.png' }
    ]
  },
  {
    id: 'netflix-analysis',
    title: 'Netflix Data Analysis',
    description: 'Analyzed Netflix data in Python to identify trends & preferences.',
    thumbnail: '/thumbnails/dashboards.jpg',
    tags: ['Python', 'Pandas', 'Seaborn'],
    children: [
      { title: 'Notebook (GitHub)', file: 'https://github.com/KIRUTHICKRAJBJ' }
    ]
  },
  {
    id: 'Zomato Analysis',
    title: 'ZOMATO Analysis',
    description: 'Analyze the user experience',
    thumbnail: '/thumbnails/ZOMATO.png',
    tags: ['MICROSOFT PowerBI','Data Visualization'],
    children: [
      { title: 'Zomato Dashboard', file: '/dashboards/ZOMATO.pbix' }
    ]
  }
]


export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 
    bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#38bdf8] 
    bg-[length:200%_200%] text-white">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <p className="text-white/80 mb-6">Click a card to open a folder-like view with sub-items (dashboards/files/links).</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpen} />
        ))}
      </div>

      {/* Animated Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/60 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 1 }}
              className="ml-auto h-full w-full sm:w-[520px] bg-card shadow-soft p-5 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">{open.title}</h2>
                <button onClick={()=>setOpen(null)} className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20">Close</button>
              </div>
              <p className="text-white/70 text-sm">{open.description}</p>
              <div className="mt-4 space-y-2">
                {open.children?.map((c, i)=>(
                  <a key={i} href={c.file} target="_blank" rel="noreferrer" className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs text-white/60 break-all">{c.file}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
