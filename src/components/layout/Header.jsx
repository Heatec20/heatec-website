import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext.jsx'
import { cn } from '@/lib/utils'

export default function Header() {
  const { t } = useTranslation()
  const { language, changeLanguage, isRTL } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: t('nav.home'), path: '/', end: true },
    { name: t('nav.solutions'), path: '/solutions' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.blog'), path: '/blog' },
  ]

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en')
  }

  const activeClassName = ({ isActive }) =>
    cn(
      'text-sm font-medium transition-colors hover:text-brand-orange relative',
      isActive
        ? 'text-brand-orange after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-orange'
        : 'text-muted-foreground'
    )

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-brand-dark dark:text-white">
              HEATEC<span className="text-brand-orange">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.end} className={activeClassName}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="font-semibold">
              {t('nav.language')}
            </Button>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white" size="sm">
              <Link to="/contact">{t('nav.contactCta')}</Link>
            </Button>
          </div>