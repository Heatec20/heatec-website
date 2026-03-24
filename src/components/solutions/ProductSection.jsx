import { useTranslation } from 'react-i18next'

export default function ProductSection({ solution }) {
  const { t } = useTranslation()
  const data = t(`solutions.${solution}`, { returnObjects: true }) || {}
  const products = data.products || []

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.subtitle && (
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto" dir="auto">
            {data.subtitle}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
              {product.image && (
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-2" dir="auto">{product.name}</h3>
              <p className="text-gray-500 text-sm" dir="auto">{product.description || product.body}</p>
              {product.features && (
                <ul className="mt-3 space-y-1">
                  {product.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2" dir="auto">
                      <span className="text-brand-orange mt-0.5">&#x2713;</span>{f}
                    </li>
                  ))}
                </ul>
              )}
              {product.brand && (
                <p className="mt-3 text-xs text-gray-400 font-medium" dir="auto">{product.brand}</p>
              )}
            </div>
          ))}
        </div>
        {data.cta && (
          <div className="text-center mt-12">
            <a href="/contact" className="inline-block bg-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-orange-dark transition-colors" dir="auto">
              {data.cta}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
