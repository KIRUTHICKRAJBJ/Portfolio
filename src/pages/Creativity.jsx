import Gallery from '../components/Gallery.jsx'

const items = [
  { src: '/creativity/poster1.jpg', title: 'Poster Concept – Neon Nights', caption: 'Typography + gradients' },
  { src: '/creativity/cover1.jpg', title: 'Cover Art – Calm Waves', caption: 'Minimal palette study' },
  { src: '/creativity/ux1.jpg', title: 'UX Mockups – Finance App', caption: 'Onboarding flow' },
  { src: '/creativity/illustration1.jpg', title: 'Illustration – Data Dragon', caption: 'Vector illustration' },
]

export default function Creativity() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Creativity Space</h1>
      <p className="text-white/80 mb-6">A rotating collection of visual experiments, posters, UI mockups, and illustrations.</p>
      <Gallery items={items} />
    </main>
  )
}
