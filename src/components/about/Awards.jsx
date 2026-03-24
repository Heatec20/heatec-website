import { useTranslation } from 'react-i18next'

export default function Awards() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange" />
      
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight" dir="auto">
          {t('about.awards.heading')}
        </h2>
        
        <div className="flex justify-center">
          <div className="relative group max-w-sm w-full" dir="auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative px-8 py-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-brand-orange/10">
                <svg className="w-10 h-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.013A9 9 0 1 1 3.273 9.23m.808 7.129a9 9 0 0 1 13.614-.306" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3" dir="auto">{t('about.awards.title')}</h3>
              <p className="text-white/70 leading-relaxed" dir="auto">{t('about.awards.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
