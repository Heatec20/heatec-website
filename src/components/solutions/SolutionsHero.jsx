import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SolutionsHero({ solution }) {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const data = t(`solutions.${solution}`, { returnObjects: true }) || {}

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-brand-orange/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-4">
          {data.tag || t('nav.' + solution)}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" dir="auto">
          {data.heading || data.title || ''}
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto" dir="auto">
          {data.subtitle || ''}
        </p>
      </div>
    </section>
  )
}
