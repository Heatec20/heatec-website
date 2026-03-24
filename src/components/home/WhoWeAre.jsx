import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function WhoWeAre() {
  const { t } = useTranslation()

  return (
    <section className="bg-white dark:bg-brand-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
              alt="Heatec Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-dark/10" />
          </div>

          {/* Text Column */}
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">
              {t('whoWeAre.tag')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white leading-tight">
              {t('whoWeAre.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('whoWeAre.body')}
            </p>
            <Button asChild variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white mt-4">
              <Link to="/about">{t('whoWeAre.cta')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
