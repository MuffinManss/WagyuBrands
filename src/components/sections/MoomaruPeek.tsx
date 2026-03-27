'use client'

import Image from 'next/image'

export default function MoomaruPeek() {
  return (
    <section
      aria-hidden="true"
      style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0, display: 'flex', justifyContent: 'center' }}
    >
      <Image
        src="/images/moomaru-peek-banner.png"
        alt="Moonmaru peeking"
        width={1200}
        height={860}
        style={{ width: '55%', height: 'auto', display: 'block' }}
      />
    </section>
  )
}
