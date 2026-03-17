import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moonmaru.com'),
  title: 'Moonmaru | Where Every Day Gets a Little More Kawaii ✨',
  description:
    'Meet Moonmaru & Macarune — the softest, sweetest characters from Wagyu Brands. Join the herd and be first to know when our kawaii collectibles drop!',
  keywords: [
    'kawaii', 'cute characters', 'collectibles', 'plushies', 'stickers',
    'Sanrio', 'San-X', 'blind box', 'Wagyu Brands', 'Moonmaru', 'Macarune',
  ],
  authors: [{ name: 'Wagyu Brands' }],
  openGraph: {
    title: 'Moonmaru | Where Every Day Gets a Little More Kawaii ✨',
    description: 'Soft characters. Sweet dreams. Collectible magic.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moonmaru.com',
    siteName: 'Moonmaru by Wagyu Brands',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Moonmaru — kawaii collectible characters by Wagyu Brands',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moonmaru | Where Every Day Gets a Little More Kawaii ✨',
    description: 'Soft characters. Sweet dreams. Collectible magic.',
    images: ['/images/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:wght@300;400;500;600;700;800&family=Bubblegum+Sans&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('moonmaru-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body bg-cream dark:bg-[#1a1117] text-brown-deep dark:text-cream transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
