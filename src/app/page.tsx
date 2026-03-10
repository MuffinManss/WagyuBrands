import Hero from '@/components/Hero'
import Characters from '@/components/Characters'
import Story from '@/components/Story'
import Products from '@/components/Products'
import Gallery from '@/components/Gallery'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
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

      {/* Navigation (appears on scroll) */}
      <Navigation />

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
      </main>

      <Footer />
    </>
  )
}
