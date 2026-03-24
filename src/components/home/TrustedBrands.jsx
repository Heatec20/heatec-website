import { useTranslation } from 'react-i18next'

export default function TrustedBrands() {
  const { t } = useTranslation()

  const brands = [
    'Grundfos',
    'A.O. Smith',
    'HENCO',
    'De Dietrich',
    'ThermaSkirt',
    'GIACOMINI',
    'Barbas Bellfires',
    'CosyStone',
    'Heat Flow',
  ]

  return (
    <section className="bg-gray-50 dark:bg-muted py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-10">
          {t('trustedBrands.heading')}
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-60">
          {brands.map((brand) => (
            <div 
              key={brand} 
              className="text-xl md:text-2xl font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap hover:text-brand-orange transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
