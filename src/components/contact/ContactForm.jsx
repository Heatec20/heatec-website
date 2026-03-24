import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', phone: '', subject: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-12 gap-4">
        <CheckCircle2 size={48} className="text-green-500" />
        <p className="text-lg font-semibold text-gray-800" dir="auto">
          {t('contact.form.success')}
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setFormData({ name: '', phone: '', subject: '', message: '' })
          }}
          className="mt-2 text-brand-orange hover:underline text-sm"
          dir="auto"
        >
          {t('contact.form.sendAnother')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" dir="auto">
          {t('contact.form.name')}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
          dir="auto"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1" dir="auto">
          {t('contact.form.phone')}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
          dir="auto"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1" dir="auto">
          {t('contact.form.subject')}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
          dir="auto"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1" dir="auto">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition resize-none"
          dir="auto"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm" dir="auto">
          {t('contact.form.error')}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-brand-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg w-full transition disabled:opacity-60 flex items-center justify-center"
      >
        {status === 'loading' ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <span dir="auto">{t('contact.form.send')}</span>
        )}
      </button>
    </form>
  )
}
