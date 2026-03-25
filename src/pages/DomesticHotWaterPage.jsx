import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/solutions/ProductCard.jsx'
import { useLanguage } from '@/contexts/LanguageContext.jsx'

export default function DomesticHotWaterPage() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const products = t('solutions.hotWater.products', { returnObjects: true })
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Button asChild variant="ghost" size="sm" className="p-0 hover:bg-transparent text-brand-orange hover:underline">
              <Link to="/solutions" className="flex items-center gap-1">
                {isRTL ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                {t('footer.solutions.heading')}
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6">{t('solutions.hotWater.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{t('solutions.subtitle')}</p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products && products.map((product, index) => (
              <ProductCard key={index} name={product.name} description={product.description} features={product.features} brand={product.brand} warranty={product.warranty} badge={product.badge} image={product.image} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
