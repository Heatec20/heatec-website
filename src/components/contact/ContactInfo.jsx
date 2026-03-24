import { useTranslation } from 'react-i18next'
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react'

export default function ContactInfo() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-6'>
      {/* Contact rows */}
      <div className='flex flex-col gap-4'>
        {/* Address */}
        <div className='flex items-start gap-3'>
          <MapPin size={20} className='text-brand-orange mt-0.5 shrink-0' />
          <span className='text-gray-700' dir='auto'>
            {t('contact.address')}
          </span>
        </div>

        {/* Phone */}
        <div className='flex items-center gap-3'>
          <Phone size={20} className='text-brand-orange shrink-0' />
          <a
            href='tel:01204366660'
            className='text-gray-700 hover:text-brand-orange transition-colors'
            dir='auto'
          >
            {t('contact.phone')}
          </a>
        </div>

        {/* Email */}
        <div className='flex items-center gap-3'>
          <Mail size={20} className='text-brand-orange shrink-0' />
          <a
            href='mailto:info@heatec-eg.com'
            className='text-gray-700 hover:text-brand-orange transition-colors'
            dir='auto'
          >
            {t('contact.email')}
          </a>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href='https://wa.me/201204366660'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-5 w-full font-medium transition-colors'
        dir='auto'
      >
        <MessageCircle size={20} />
        <span>{t('contact.whatsapp')}</span>
      </a>

      {/* Social icons row */}
      <div className='flex gap-3 mt-2'>
        <a
          href='https://www.facebook.com/heatec.eg'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t('contact.social.facebook')}
          className='rounded-full border border-gray-200 p-2 text-gray-600 hover:border-brand-orange hover:text-brand-orange transition-colors'
        >
          <Facebook size={20} />
        </a>
        <a
          href='https://www.instagram.com/heatec_eg/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t('contact.social.instagram')}
          className='rounded-full border border-gray-200 p-2 text-gray-600 hover:border-brand-orange hover:text-brand-orange transition-colors'
        >
          <Instagram size={20} />
        </a>
        <a
          href='https://www.linkedin.com/company/heatec-solutions/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t('contact.social.linkedin')}
          className='rounded-full border border-gray-200 p-2 text-gray-600 hover:border-brand-orange hover:text-brand-orange transition-colors'
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  )
}
