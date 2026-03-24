import { useTranslation } from 'react-i18next'

/**
 * CompoundLogos
 *
 * Displays a responsive grid of 45+ compound and residential project names
 * that Heatec Solutions has served. Each card uses a placeholder box with
 * brand orange accent on hover, ready for real logos when supplied by client.
 *
 * Grid: 5 columns on large, 4 on medium, 3 on small, 2 on xs screens.
 */
export default function CompoundLogos() {
  const { t } = useTranslation()

  const compounds = [
    'Mountain View',
    'Hyde Park',
    'Diplomates Compound',
    'El Garnatel 5',
    'Al Masra',
    'Belle Ville',
    'Emerald Village',
    'The Square',
    'Kayan',
    'Cairo View',
    'Palm Hills',
    'Madinaty',
    'New Cairo',
    'El Tagammoa',
    'Mostakbal City',
    'Obour City',
    'El Sherouk City',
    'Al Ahly Club Compound',
    'The Water Way',
    'El Gouna',
    'Soma Bay',
    'Marassi',
    'Al Alamein City',
    'Borg El Arab',
    'Dreamland',
    'Green Hills',
    'Bella Vista',
    'Golden Heights',
    'Sky View',
    'City View',
    'Gardenia',
    'Jasmine',
    'Violet',
    'Orchid',
    'Lotus',
    'Nile View',
    'River Side',
    'Sea View',
    'Mountain Ridge',
    'Valley View',
    'Royal Gardens',
    'Princess Compound',
    'The Crown',
    'Elite Residence',
    'Comfort Zone',
  ]

  return (
    <section className="py-20 bg-white dark:bg-brand-dark/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-2">
            {compounds.length}+ {t('projects.tag')}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            {t('projects.subtitle')}
          </p>
        </div>
        {/* Compound grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {compounds.map((name, i) => (
            <div
              key={i}
              className="group flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 hover:border-brand-orange hover:bg-brand-orange/5 transition-all duration-200 px-3 py-4 text-center"
            >
              <span className="text-sm font-medium text-gray-700 group-hover:text-brand-orange transition-colors" dir="auto">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
