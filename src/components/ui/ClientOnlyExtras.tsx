'use client'

import dynamic from 'next/dynamic'

const LoadingScreen = dynamic(() => import('./LoadingScreen'), { ssr: false })
const Particles     = dynamic(() => import('./Particles'),     { ssr: false })
const CustomCursor  = dynamic(() => import('./CustomCursor'),  { ssr: false })

export default function ClientOnlyExtras() {
  return (
    <>
      <LoadingScreen />
      <Particles />
      <CustomCursor />
    </>
  )
}
