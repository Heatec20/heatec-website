import AboutHero from '@/components/about/AboutHero'
import CompanyStory from 'A/components/about/CompanyStory'
import Values from '@/components/about/Values'
import PartnerBrands from '@/components/about/PartnerBrands'
import Awards from '@/components/about/Awards'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <CompanyStory />
      <Values />
      <PartnerBrands />
      <Awards />
    </main>
  )
}
