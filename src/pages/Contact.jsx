import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:kiruthickrajbj@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 
    bg-gradient-to-r from-[#0f172a] via-[#0f766e] to-[#38bdf8] 
    bg-[length:200%_200%] text-white">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        
        <section className="glass p-6 rounded-2xl">
          <h2 className="font-semibold">Get in touch</h2>
          <p className="text-white/70 text-sm mt-1">
            This will open your email app with the message pre-filled.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
            />
            <textarea
              required
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-3 rounded-2xl bg-primary/20 hover:bg-primary/30 border border-primary/30"
            >
              Send message
            </button>
          </form>
        </section>

        <section className="glass p-6 rounded-2xl space-y-2">
          <h2 className="font-semibold">Links</h2>
          <a className="block underline" href="mailto:kiruthickrajbj@gmail.com">Gmail</a>
          <a className="block underline" href="https://github.com/KIRUTHICKRAJBJ" target="_blank" rel="noreferrer">GitHub</a>
          <a className="block underline" href="http://www.linkedin.com/in/kiruthickrajbj" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="block underline" href="https://x.com/your" target="_blank" rel="noreferrer">X (Twitter)</a>
        </section>
      </div>
    </main>
  );
}
