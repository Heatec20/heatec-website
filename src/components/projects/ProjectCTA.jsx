import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function ProjectCTA() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight" dir="auto">
          {t('projects.cta')}
        </h2>
        
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white px-10 h-14 rounded-full text-lg font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95">
            <Link to="/contact">{t('projects.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
