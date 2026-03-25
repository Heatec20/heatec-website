import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SolutionsOverview() {
  const { t } = useTranslation()

  const solutions = [
    {
      id: 'spaceHeating',
      title: t('solutions.spaceHeating.title'),
      items: t('solutions.spaceHeating.items', { returnObjects: true }),
      cta: t('solutions.spaceHeating.cta'),
      path: '/solutions/space-heating',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'hotWater',
      title: t('solutions.hotWater.title'),
      items: t('solutions.hotWater.items', { returnObjects: true }),
      cta: t('solutions.hotWater.cta'),
      path: '/solutions/domestic-hot-water',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'pool',
      title: t('solutions.pool.title'),
      items: t('solutions.pool.items', { returnObjects: true }),
      cta: t('solutions.pool.cta'),
      path: '/solutions/pool-heating',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <section className="bg-white dark:bg-brand-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">
            {t('solutions.tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mt-4 mb-6 leading-tight">
            {t('solutions.heading')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="overflow-hidden border-border dark:bg-muted/30 group">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-dark dark:text-white">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2">
                  {Array.isArray(solution.items) && solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-brand-orange p-0 h-auto hover:underline font-semibold">
                  <Link to={solution.path}>{solution.cta} Ã¢â â</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
