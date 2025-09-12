import { useState, useEffect } from "react"
import ExperienceCard from "../components/ExperienceCard.jsx"

const Internships = [
  {
    id: "sabudh",
    title: "SABUDH FOUNDATION",
    subtitle: "Data Science Intern",
    duration: "June 2024 - Aug 2024",
    description:
      "Worked on real-world projects involving Data Science, Machine Learning, Deep Learning, and Large Language Models. Hands-on experience with Python, SQL, and Dataiku workflows.",
    thumbnail: "/thumbnails/SABUDH1.png",
    tags: [
      "Python",
      "SQL",
      "Dataiku",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLM",
    ],
    children: [
      {
        title: "Internship Certificate",
        file: "/certificates/sabudh_certificate.pdf",
      },
      { title: "Project Report", file: "/projects/sabudh_project.pdf" },
    ],
  },
  {
    id: "accenture",
    title: "Accenture Forage Program",
    subtitle: "Data Analytics",
    description:
      "Gained hands-on experience in data cleaning, modeling, visualization, and storytelling.",
    thumbnail: "/thumbnails/accenture.png",
    tags: ["Data Cleaning", "Modeling", "Visualization", "Storytelling"],
    children: [
      {
        title: "Internship Certificate",
        file: "/certificates/Accenture_certificate.pdf",
      },
    ],
  },
]

const Education = [
  {
    id: "college",
    title: "KLN COLLEGE OF ENGINEERING",
    subtitle: "B.E. Electronics and Communication Engineering",
    description: "CGPA - 7.89",
    thumbnail: "/thumbnails/klnce.png",
    tags: ["CGPA - 7.89"],
    children: [
      {
        title: "Degree Certificate",
        file: "/certificates/Degree_certificate.pdf",
      },
    ],
  },
]

export default function Experience() {
  const [open, setOpen] = useState(null)

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 
      bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#38bdf8] 
      bg-[length:200%_200%] text-white"
    >
      <h1 className="text-3xl font-bold mb-6">Experience & Education</h1>
      <p className="text-white/80 mb-10 text-center max-w-2xl">
        Click a card to see more details about each section.
      </p>

      {/* Internships Section */}
      <h2 className="text-2xl font-semibold mb-4">💼 Internships</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {Internships.map((intern) => (
          <ExperienceCard key={intern.id} item={intern} onOpen={setOpen} />
        ))}
      </div>

      {/* Education Section */}
      <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {Education.map((edu) => (
          <ExperienceCard key={edu.id} item={edu} onOpen={setOpen} />
        ))}
      </div>

      {/* Drawer Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex"
          role="dialog"
          aria-label={open.title}
        >
          <div className="ml-auto h-full w-full sm:w-[520px] bg-gray-900 text-white rounded-l-2xl shadow-lg p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">{open.title}</h2>
              <button
                onClick={() => setOpen(null)}
                className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20"
              >
                Close
              </button>
            </div>
            <p className="text-white/70 text-sm mb-4">{open.description}</p>
            <div className="mt-4 space-y-2">
              {open.children?.map((c, i) => (
                <a
                  key={i}
                  href={c.file}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <div className="font-medium">{c.title}</div>
                  <div className="text-xs text-white/60 break-all">{c.file}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
