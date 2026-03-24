import { Helmet } from 'react-helmet-async'
import ProjectsHero from '@/components/projects/ProjectsHero'
import CompoundLogos from '@/components/projects/CompoundLogos'
import ProjectCTA from '@/components/projects/ProjectCTA'

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects - Heatec</title>
      </Helmet>
      <ProjectsHero />
      <CompoundLogos />
      <ProjectCTA />
    </>
  )
}
