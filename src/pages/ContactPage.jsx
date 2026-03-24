import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
