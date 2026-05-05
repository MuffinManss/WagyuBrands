import Hero from '@/components/sections/Hero'
import Marketplace from '@/components/sections/Marketplace'
import AboutBrand from '@/components/sections/AboutBrand'
import Characters from '@/components/sections/Characters'
import Community from '@/components/sections/Community'
import Footer from '@/components/sections/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import ClientOnlyExtras from '@/components/ui/ClientOnlyExtras'

export default function Home() {
  return (
    <>
      {/* Client-only: loading screen, particles, custom cursor */}
      <ClientOnlyExtras />

      {/* Scroll progress bar */}
      <ScrollProgress />

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
