import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext.jsx'

function FireplaceProductCard({ name, body, features, image }) {
  return (
    <Card className="overflow-hidden border-border dark:bg-muted/30 mb-6">
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="md:w-1/3 h-64 md:h-auto overflow-hidden bg-muted">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <CardContent className={`p-6 md:p-8 ${image ? 'md:w-2/3' : ''}`}>
          <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-3">{name}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{body}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features && features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-1 bg-brand-orange/10 rounded-full p-0.5">
                  <Check className="h-3 w-3 text-brand-orange shrink-0" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default function FireplacesPage() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
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
          <p className="text-brand-orange text-sm font-semibold mb-2">{t('fireplaces.page_label')}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4">{t('fireplaces.page_heading')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{t('fireplaces.page_subheading')}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-brand-dark rounded-xl p-8">
          <p className="text-brand-orange font-bold mb-2">{t('fireplaces.brand_intro')}</p>
          <p className="text-gray-300 leading-relaxed">{t('fireplaces.brand_body')}</p>
        </div>
      </section>
      <section className="py-8 md:py-12 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FireplaceProductCard name={t('fireplaces.detail_products.evolux.name')} body={t('fireplaces.detail_products.evolux.body')} features={t('fireplaces.detail_products.evolux.features', { returnObjects: true })} image="https://images.unsplash.com/photo-1545259742-b4fd8fea67ab?q=80&w=800&auto=format&fit=crop" />
          <FireplaceProductCard name={t('fireplaces.detail_products.panorama.name')} body={t('fireplaces.detail_products.panorama.body')} features={t('fireplaces.detail_products.panorama.features', { returnObjects: true })} image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" />
          <FireplaceProductCard name={t('fireplaces.detail_products.wood.name')} body={t('fireplaces.detail_products.wood.body')} features={t('fireplaces.detail_products.wood.features', { returnObjects: true })} image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop" />
        </div>
      </section>
      <section className="bg-brand-orange py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('fireplaces.cta_heading')}</h2>
          <p className="text-white/85 text-lg mb-8">{t('fireplaces.cta_body')}</p>
          <Button asChild size="lg" className="bg-white text-brand-orange hover:bg-gray-100 font-bold">
            <Link to="/contact">{t('fireplaces.cta_button')}</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
