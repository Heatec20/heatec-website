import { useTranslation } from 'react-i18next'

export default function PartnerBrands() {
  const { t } = useTranslation()

  const partners = [
    { name: 'Grundfos', country: 'Denmark', flag: '🇩🇰' },
    { name: 'A.O. Smith', country: 'USA', flag: '🇺🇸' },
    { name: 'HENCO', country: 'Belgium', flag: '🇧🇪' },
    { name: 'De Dietrich', country: 'France', flag: '🇫🇷' },
    { name: 'ThermaSkirt', country: 'UK', flag: '🇬🇧' },
    { name: 'GIACOMINI', country: 'Italy', flag: '🇮🇹' },
    { name: 'Barbas Bellfires', country: 'Netherlands', flag: '🇳🇱' },
    { name: 'CosyStone', country: 'UK', flag: '🇬🇧' },
    { name: 'Heat Flow', country: 'UK', flag: '🇬🇧' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16 leading-tight" dir="auto">
          {t('about.partners.heading')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50/50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-lg hover:border-brand-orange/20"
            >
              <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                {partner.flag}
              </div>
              <div className="text-xl font-bold text-gray-800 text-center mb-2">
                {partner.name}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                {partner.country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
