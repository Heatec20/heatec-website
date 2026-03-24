import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  const solutions = [
    { name: t('footer.solutions.spaceHeating'), path: '/solutions/space-heating' },
    { name: t('footer.solutions.hotWater'), path: '/solutions/domestic-hot-water' },
    { name: t('footer.solutions.poolHeating'), path: '/solutions/pool-heating' },
  ]

  const company = [
    { name: t('footer.company.about'), path: '/about' },
    { name: t('footer.company.contact'), path: '/contact' },
    { name: t('footer.company.privacy'), path: '/privacy' },
  ]

  const socials = [
    { icon: Facebook, name: t('footer.social.facebook'), href: '#' },
    { icon: Instagram, name: t('footer.social.instagram'), href: '#' },
    { icon: Linkedin, name: t('footer.social.linkedin'), href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{t('footer.solutions.heading')}</h3>
            <ul className="space-y-2">
              {solutions.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-white">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company.heading')}</h3>
            <ul className="space-y-2">
              {company.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-white">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.social.heading')}</h3>
            <ul className="space-y-2">
              {socials.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white flex items-center gap-2">
                    <item.icon size={16} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
