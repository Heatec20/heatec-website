import { useTranslation } from 'react-i18next'
import { Zap, Ruler, Users, Settings, Layout, ShieldCheck } from 'lucide-react'

export default function Benefits() {
  const { t } = useTranslation()

  const benefitsItems = t('benefits.items', { returnObjects: true })
  const icons = [Zap, Layout, Users, Settings, Ruler, ShieldCheck]

  return (
    <section className="bg-gray-50 dark:bg-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-6">
            {t('benefits.heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Array.isArray(benefitsItems) && benefitsItems.map((benefit, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-6 bg-white dark:bg-brand-dark rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-brand-dark dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-su text-muted-foreground dark:text-gray-400">
                  {benefit.desc)
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
