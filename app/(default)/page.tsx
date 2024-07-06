export const metadata = {
  title: 'VA Enterprises',
  description: 'Your trusted partner in Electrical, Mechanical, Plumbing, and Fire Safety solutions.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
{/*       <Zigzag /> */}
      <Testimonials />
      <Newsletter />
    </>
  )
}
