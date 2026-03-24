import { Helmet } from 'react-helmet-async'
import ProjectsHero from 'A/components/projects/ProjectsHero'
import CompoundLogos from 'A/components/projects/CompoundLogos'
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
