import Hero from '@/components/home/Hero.jsx'
import StatsBar from '@/components/home/StatsBar.jsx'
import WhoWeAre from '@/components/home/WhoWeAre.jsx'
import TrustedBrands from '@/components/home/TrustedBrands.jsx'
import SolutionsOverview from '@/components/home/SolutionsOverview.jsx'
import Benefits from '@/components/home/Benefits.jsx'
import FireplacesFeature from '@/components/home/FireplacesFeature.jsx'
import FeaturedProjects from '@/components/home/FeaturedProjects.jsx'
import GetInTouch from '@/components/home/GetInTouch.jsx'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <StatsBar />
      <WhoWeAre />
      <TrustedBrands />
      <SolutionsOverview />
      <Benefits />
      <FireplacesFeature />
      <FeaturedProjects />
      <GetInTouch />
    </div>
  )
}
