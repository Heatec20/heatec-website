import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function FeaturedProjects() {
  const { t } = useTranslation()

  const projects = t('featuredProjects.projects', { returnObjects: true })

  return (
    <section className="bg-gray-50 dark:bg-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">
              {t('featuredProjects.tag')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mt-4 leading-tight">
              {t('featuredProjects.heading')}
            </h2>
          </div>
          <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white">
            <Link to="/contact">{t('featuredProjects.cta')}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {Array.isArray(projects) && projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-brand-dark p-6 rounded-xl shadow-sm border border-border flex items-center justify-center text-center group hover:border-brand-orange transition-colors"
            >
              <span className="text-sm md:text-base font-bold text-gray-400 group-hover:text-brand-orange transition-colors">
                {project}
              </span>
            </div>
          ))}
          {/* Placeholder for "and 40+ more" */}
          <div className="bg-brand-orange/5 p-6 rounded-xl border border-brand-orange/20 flex items-center justify-center text-center">
            <span className="text-sm font-bold text-brand-orange uppercase tracking-wider">
              +40 More Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  (ù
