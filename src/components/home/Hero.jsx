import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative h-[80vh] min-h-150 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1615873968403-89e068628265?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white min-w-50">
            <Link to="/solutions">{t('hero.ctaExplore')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text- border-white hover:bg-white/10 min-w-50">
            <Link to="/contact">{t('hero.ctaQuote')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
