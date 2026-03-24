import { useTranslation } from 'react-i18next'

export default function CompanyStory() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div dir="auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('about.heading')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.body')}
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
              alt="Heatec Solutions Cairo HQ"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
