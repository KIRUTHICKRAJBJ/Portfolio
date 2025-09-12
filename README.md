# Creative Portfolio (React + Vite + Tailwind + Framer Motion)

A polished, creative, and professional portfolio. Edit the content, drop in your dashboards and creations, and deploy.

## ▶️ Quick Start
```bash
npm install
npm run dev
```

## ✍️ Where to Edit
- Landing page question/buttons: `src/pages/Landing.jsx`
- About, Internships, Education, Skills, Certifications: `src/pages/About.jsx`
- Projects (cards + folder-like sub-items): `src/pages/Projects.jsx`
- Creativity gallery: `src/pages/Creativity.jsx`
- Contact form + social links: `src/pages/Contact.jsx`
- Navbar title / links: `src/components/Navbar.jsx`
- Colors & theme: `tailwind.config.js`

## 📁 Add Your Files
- Dashboards images/PDFs: `public/dashboards/` (update paths in `Projects.jsx`)
- Creativity images: `public/creativity/`
- Resume PDF: place as `public/resume.pdf` (button in About page)

## 💌 Contact Form
- Uses Formspree. Replace the action URL in `Contact.jsx` with your own endpoint.

## 🌐 Deploy
- **Vercel** (recommended): Import the repo → Framework: Vite → Build Command: `npm run build` → Output: `dist`
- **Netlify**: New site from Git → Build: `npm run build` → Publish dir: `dist`
- Add a custom domain for a professional URL.

## 🧰 Stack
- React 18, Vite, Tailwind CSS, Framer Motion, React Router
