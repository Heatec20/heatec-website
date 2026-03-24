import { Helmet } from 'react-helmet-async'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import SolutionsOverview from '@/components/home/SolutionsOverview'
import ProjectCTA from '@/components/projects/ProjectCTA'

export default function SolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Shows & Training - Heatec Solutions</title>
      </Helmet>
      <SolutionsHero />
      <SolutionsOverview />
      <ProjectCTA />
    </>
  )
}
