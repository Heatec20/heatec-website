import { useTranslation } from 'react-i18next'

export default function StatsBar() {
  const { t } = useTranslation()

  const stats = [
    { value: t('stats.years'), label: t('stats.yearsLabel') },
    { value: t('stats.team'), label: t('stats.teamLabel') },
    { value: t('stats.service'), label: t('stats.serviceLabel') },
  ]

  return (
    <section className="bg-white dark:bg-brand-dark border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-semibold text-brand-dark dark:text-white uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  (ù
