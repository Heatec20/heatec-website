import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FireplacesFeature() {
  const { t } = useTranslation()

  const products = t('fireplaces.products', { returnObjects: true })
  const images = [
    'https://images.unsplash.com/photo-1545259742-b4fd8fea67ab?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
  ]

  return (
    <section className="bg-white dark:bg-brand-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">
              {t('fireplaces.tag')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white leading-tight">
              {t('fireplaces.heading')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('fireplaces.subtitle')}
            </p>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              <Link to="/solutions/fireplaces">{t('fireplaces.cta')}</Link>
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1574352067721-72d5913bd35c?q=80&w=1000&auto=format&fit=crop" 
              alt="Barbas Bellfires" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.isArray(products) && products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-border dark:bg-muted/30 group">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="h-48 sm:h-full overflow-hidden">
                  <img 
                    src={images[index % images.length]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-dark dark:text-white">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.desc}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
