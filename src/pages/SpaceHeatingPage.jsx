import { Helmet } from 'react-helmet-async'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import ProductSection from '@/components/solutions/ProductSection'
import ProjectCTA from '@/components/projects/ProjectCTA'

export default function SpaceHeatingPage() {
  return (
    <>
      <Helmet>
        <title>Space Heating Solutions - Heatec</title>
      </Helmet>
      <SolutionsHero solution="space" />
      <ProductSection solution="space" />
      <ProjectCTA />
    </>
  )
}
