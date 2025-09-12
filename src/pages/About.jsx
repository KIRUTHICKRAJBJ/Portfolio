import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `Aspiring Data Analyst with strong proficiency in Python and SQL,
experienced in data analysis, visualization, and statistical modeling.
Currently enhancing expertise in Machine Learning, Deep Learning, NLP,
and LLMs to derive meaningful insights from complex datasets. Skilled in
solving real-world problems through analytical thinking and data-driven
approaches. Eager to contribute to impactful projects in a collaborative,
innovation-focused environment.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
     }
    }, 30);

    return () => clearInterval(interval);
  }, []);


  const skills = [
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "RAG",
    "LLM",
    "MongoDB",
    "VectorDB",
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 
    bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#38bdf8] 
    bg-[length:200%_200%] text-white"
    >
      <h1 className="text-4xl font-bold mb-6">KIRUTHICK RAJ B J</h1>

      {/* ✅ Skills as Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-3xl">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="px-4 py-2 text-sm font-medium bg-white/10 border border-white/20 
              rounded-full shadow-md hover:scale-105 transition"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* ✅ Profile Picture with Blend/Fade + Zoom Animation */}
        <motion.img
          src="/thumbnails/portfolio.png"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-64 h-100 object-cover rounded-2xl shadow-lg border-4 border-primary/20"
        />

        {/* ✅ Typing Text Animation */}
        <p className="text-lg leading-relaxed max-w-2xl text-center md:text-left">
          {displayedText}
        </p>
      </div>

      {/* ✅ Resume Download Button */}
      <a
        href="/resume.pdf"
        download
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl 
        bg-cyan-200 text-green-900 font-semibold shadow-lg 
        hover:bg-cyan-300 hover:scale-105 transition"
      >
        <Download size={30} />
        Download Resume
      </a>
    </section>
  );
}
