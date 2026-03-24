import { Helmet } from 'react-helmet-async'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import ProductSection from '@/components/solutions/ProductSection'
import ProjectCTA from '@/components/projects/ProjectCTA'

export default function PoolHeatingPage() {
  return (
    <>
      <Helmet>
        <title>Pool Heating Solutions - Heatec</title>
      </Helmet>
      <SolutionsHero solution="pool" />
      <ProductSection solution="pool" />
      <ProjectCTA />
    </>
  )
}
