import Hero from '@/components/Hero'
import Marketplace from '@/components/Marketplace'
import AboutBrand from '@/components/AboutBrand'
import Characters from '@/components/Characters'
import Community from '@/components/Community'
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
        <AboutBrand />
        <Characters />
        <Community />
        <Marketplace />
      </main>

      <Footer />
    </>
  )
}
