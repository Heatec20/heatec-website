import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { blogArticles } from '@/data/blog-articles'

// Simple markdown-to-HTML renderer for blog content
function renderMarkdown(text) {
  if (!text) return ''

  const lines = text.trim().split('\n')
  let html = ''
  let inList = false
  let inTable = false

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim()

    if (!line) {
      if (inList) { html += '</ul>'; inList = false }
      if (inTable) { html += '</tbody></table></div>'; inTable = false }
      continue
    }

    if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false }
      html += `<h2 class="text-xl font-bold text-brand-dark mt-8 mb-3">${applyInline(line.slice(3))}</h2>`
      continue
    }

    if (line.startsWith('### ')) {
      html += `<h3 class="text-lg font-bold text-brand-dark mt-6 mb-2">${applyInline(line.slice(4))}</h3>`
      continue
    }

    if (line.startsWith('- ')) {
      if (!inList) { html += '<ul class="ps-6 text-muted-foreground my-3 space-y-2">'; inList = true }
      html += `<li class="leading-relaxed">${applyInline(line.slice(2))}</li>`
      continue
    }

    if (line.startsWith('|') && lines[i + 1] && lines[i + 1].includes('---')) {
      if (!inTable) {
        html += '<div class="overflow-x-auto my-5"><table class="w-full border-collapse text-sm"><thead><tr>'
        const cells = line.split('|').filter(c => c.trim())
        cells.forEach(c => {
          html += `<th class="bg-brand-dark text-white px-4 py-2.5 text-start">${c.trim()}</th>`
        })
        html += '</tr></thead><tbody>'
        inTable = true
        i++
      }
      continue
    }

    if (inTable && line.startsWith('|')) {
      html += '<tr>'
      const cells = line.split('|').filter(c => c.trim())
      cells.forEach((c, idx) => {
        const bg = idx === 0 ? 'bg-muted ' : ''
        html += `<td class="${bg}px-4 py-2 border-b border-border">${applyInline(c.trim())}</td>`
      })
      html += '</tr>'
      continue
    }

    if (inTable && !line.startsWith('|')) {
      html += '</tbody></table></div>'
      inTable = false
    }

    if (inList) { html += '</ul>'; inList = false }
    html += `<p class="text-muted-foreground leading-relaxed mb-4">${applyInline(line)}</p>`
  }

  if (inList) html += '</ul>'
  if (inTable) html += '</tbody></table></div>'

  return html
}

function applyInline(text) {
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-brand-dark font-semibold">$1</strong>')
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>')
  return text
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const { i18n } = useTranslation()
  const isAr = i18n.language === 'ar'

  const article = blogArticles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="text-center py-24">
        <h1 className="text-2xl font-bold mb-4">404 — Article Not Found</h1>
        <Link to="/blog" className="text-brand-orange font-semibold hover:underline">
          {isAr ? '→ العودة للمدونة' : '← Back to Blog'}
        </Link>
      </div>
    )
  }

  const title    = isAr ? article.title_ar    : article.title_en
  const body     = isAr ? article.body_ar     : article.body_en
  const category = isAr ? article.category_ar : article.category_en
  const readTime = isAr ? article.readTime_ar : article.readTime_en

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-dark py-14 md:py-16 relative">
        {article.image && (
          <div className="absolute inset-0 opacity-20">
            <img src={article.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Link to="/blog" className="text-brand-orange text-sm font-semibold hover:underline block mb-5">
            {isAr ? '→ العودة للمدونة' : '← Back to Blog'}
          </Link>

          <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            {category}
          </span>

          <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug mb-5">
            {title}
          </h1>

          <p className="text-gray-400 text-sm">
            {new Date(article.date).toLocaleDateString(isAr ? 'ar-EG' : 'en-GB', {
              day: 'numeric', month: 'long', year: 'numeric'
            })}
            &nbsp;·&nbsp;{readTime}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div dangerouslySetInnerHTML={{ __html: renderMarkdown(body) }} />

        {/* CTA */}
        <div className="bg-orange-50 border border-brand-orange rounded-xl p-7 mt-12 text-center">
          <p className="font-bold text-lg text-brand-dark mb-2">
            {isAr ? 'هل أنت مستعد لترقية تدفئة منزلك؟' : 'Ready to upgrade your home heating?'}
          </p>
          <p className="text-muted-foreground mb-5">
            {isAr
              ? 'تواصل مع هيتيك سوليوشنز اليوم للحصول على استشارة مجانية.'
              : 'Contact Heatec Solutions today for a free consultation.'}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:01204366660"
              className="bg-brand-orange text-white px-7 py-3 rounded-lg font-bold hover:bg-brand-orange-dark transition-colors"
            >
              01204366660
            </a>
            <a
              href="https://wa.me/201204366660"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white px-7 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
