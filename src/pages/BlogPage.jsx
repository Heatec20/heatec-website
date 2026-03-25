import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { blogArticles } from '@/data/blog-articles'

function ArticleCard({ article, lang }) {
  const isAr = lang === 'ar'
  const title = isAr ? article.title_ar : article.title_en
  const excerpt = isAr ? article.excerpt_ar : article.excerpt_en
  const category = isAr ? article.category_ar : article.category_en
  const readTime = isAr ? article.readTime_ar : article.readTime_en
  return (
    <Link to={`/blog/${article.slug}`} className="block group">
      <article className="bg-white border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
        {article.image && (
          <div className="h-48 w-full overflow-hidden">
            <img src={article.image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        )}
        <div className="bg-muted px-6 py-3 flex justify-between items-center border-b border-border">
          <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">{category}</span>
          <span className="text-xs text-muted-foreground">
            {new Date(article.date).toLocaleDateString(isAr ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {readTime}
          </span>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-bold text-brand-dark dark:text-white mb-3 leading-snug">{title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{excerpt}</p>
          <p className="text-brand-orange font-semibold text-sm mt-4">{isAr ? 'Read More ←' : 'Read More →'}</p>
        </div>
      </article>
    </Link>
  )
}

export default function BlogPage() {
  const { t, i18n } = useTranslation()
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-brand-dark py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-brand-orange text-sm font-semibold mb-2">{t('blog.page_label')}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('blog.page_heading')}</h1>
          <p className="text-gray-400 text-lg">{t('blog.page_subheading')}</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogArticles.map((article) => (
            <ArticleCard key={article.id} article={article} lang={i18n.language} />
          ))}
        </div>
      </section>
    </main>
  )
}
