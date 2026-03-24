import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  subject: z.string().optional(),
  message: z.string().min(5, { message: 'Message must be at least 5 characters.' }),
})

export default function GetInTouch() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  function onSubmit(values) {
    setIsSubmitting(true)
    console.log('Form data:', values)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    { icon: Phone, text: t('getInTouch.phone'), href: `tel:${t('getInTouch.phone')}` },
    { icon: Mail, text: t('getInTouch.email'), href: `mailto:${t('getInTouch.email')}` },
    { icon: MapPin, text: t('getInTouch.address'), href: '#' },
  ]

  return (
    <section className="bg-white dark:bg-brand-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white leading-tight mb-6">
                {t('getInTouch.heading')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('getInTouch.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <a 
                    key={idx} 
                    href={info.href} 
                    className="flex items-center gap-4 text-brand-dark dark:text-white hover:text-brand-orange transition-colors group"
                  >
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{info.text}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-gray-50 dark:bg-muted/30 p-8 rounded-2xl border border-border">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-white">
                  {t('getInTouch.form.success')}
                </h3>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-brand-dark dark:text-white">
                          {t('getInTouch.form.name')}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-white dark:bg-brand-dark" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-brand-dark dark:text-white">
                          {t('getInTouch.form.phone')}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="012XXXXXXXX" {...field} className="bg-white dark:bg-brand-dark" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-brand-dark dark:text-white">
                          {t('getInTouch.form.subject')}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Request for Quote" {...field} className="bg-white dark:bg-brand-dark" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-brand-dark dark:text-white">
                          {t('getInTouch.form.message')}
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="I'm interested in..." 
                            rows={4} 
                            {...field} 
                            className="bg-white dark:bg-brand-dark resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      t('getInTouch.form.send')
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
