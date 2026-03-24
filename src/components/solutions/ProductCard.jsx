import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export default function ProductCard({ name, description, features, brand, image, warranty, badge }) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden border-border dark:bg-muted/30 group mb-8">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden bg-muted">
          <img
            src={image || 'https://placehold.co/600x400?text=Product+Image'}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-brand-dark dark:text-white">
                {name}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                {badge && (
                  <Badge className="bg-green-600 hover:bg-green-700 text-white border-none px-3 py-1">
                    {badge}
                  </Badge>
                )}
                <Badge className="bg-brand-orange hover:bg-brand-orange-dark text-white border-none px-3 py-1">
                  {brand}
                </Badge>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>

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

            {warranty && (
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm font-semibold text-brand-orange">
                  {warranty}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
