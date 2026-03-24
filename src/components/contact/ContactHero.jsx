import { useTranslation } from 'react-i18next'

export default function ContactHero() {
  const { t } = useTranslation()

  return (
    <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span
          className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-medium mb-4"
          dir="auto"
        >
          {t('contact.tag')}
        </span>
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          dir="auto"
        >
          {t('contact.heading')}
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          dir="auto"
        >
          {t('contact.subtitle')}
        </p>
      </div>
    </section>
  )
}
