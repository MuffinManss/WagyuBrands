'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
  {
    src: '/images/pofuyu-char.png',
    alt: 'Moonmaru character illustration',
    tag: 'Characters',
    unoptimized: false,
    aspect: 'aspect-square',
  },
  {
    src: '/images/mango-sunflowers.gif',
    alt: 'Mango in a sunflower field',
    tag: 'Animated',
    unoptimized: true,
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/mango-sushi.gif',
    alt: 'Mango eating sushi',
    tag: 'Animated',
    unoptimized: true,
    aspect: 'aspect-square',
  },
  {
    src: '/images/mango-void.gif',
    alt: 'Mango floating in the void',
    tag: 'Animated',
    unoptimized: true,
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/character-scene.jpeg',
    alt: 'Wagyu Brands character scene artwork',
    tag: 'Artwork',
    unoptimized: false,
    aspect: 'aspect-video',
  },
  {
    src: '/images/moomaru_banner.png',
    alt: 'Moonmaru brand banner',
    tag: 'Artwork',
    unoptimized: false,
    aspect: 'aspect-video',
  },
]

const FILTERS = ['All', 'Characters', 'Animated', 'Artwork']

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState<typeof images[0] | null>(null)

  const filtered = filter === 'All' ? images : images.filter(i => i.tag === filter)

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      aria-label="Gallery"
    >
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%, #ffd6e7 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-pink text-brown-dark text-sm font-semibold font-body mb-3 border border-pink-medium/30">
            Lookbook
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-3">
            The{' '}
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="font-body text-brown-medium dark:text-brown-light text-lg max-w-xl mx-auto mb-6">
            A peek into Moonmaru's world, one frame at a time. 🎨
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2" role="tablist">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                role="tab"
                aria-selected={filter === f}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold font-body transition-all duration-200
                  ${filter === f
                    ? 'bg-pink-medium text-brown-dark shadow-soft scale-105'
                    : 'glass text-brown-medium hover:bg-pink/30 border border-white/40'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="masonry-item"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -4 }}
                  onClick={() => setLightbox(img)}
                  className={`w-full relative ${img.aspect} rounded-3xl overflow-hidden shadow-soft border-2 border-white/60 glass-card group block`}
                  aria-label={`View ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized={img.unoptimized}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-3">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-body font-semibold text-white bg-black/40 backdrop-blur rounded-full px-3 py-1">
                      {img.alt}
                    </span>
                  </div>
                  {/* Tag */}
                  <span className="absolute top-2 right-2 text-xs font-body font-semibold bg-white/70 backdrop-blur text-brown-dark px-2 py-0.5 rounded-full">
                    {img.tag}
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[85vh] rounded-4xl overflow-hidden shadow-soft-xl"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  unoptimized={lightbox.unoptimized}
                  sizes="672px"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 glass p-3 text-center">
                <p className="font-body text-sm text-brown-dark font-medium">{lightbox.alt}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-brown-dark font-bold text-sm border border-white/50"
                aria-label="Close lightbox"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
