import Hero from '@/components/Hero'
import Characters from '@/components/Characters'
import Story from '@/components/Story'
import Products from '@/components/Products'
import Gallery from '@/components/Gallery'
import Community from '@/components/Community'
import MoomaruPeek from '@/components/MoomaruPeek'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import ClientOnlyExtras from '@/components/ClientOnlyExtras'

export default function Home() {
  return (
    <>
      {/* Client-only: loading screen, particles, custom cursor */}
      <ClientOnlyExtras />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Back to top */}
      <BackToTop />

      {/* ── Sections ─────────────────────────────── */}
      <main>
        <Hero />
        <Characters />
        <Story />
        <Products />
        <Gallery />
        <Community />
        <MoomaruPeek />
      </main>

      <Footer />
    </>
  )
}
