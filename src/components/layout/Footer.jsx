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
    {
      icon: Facebook,
      name: 'Faceboak"} 
    