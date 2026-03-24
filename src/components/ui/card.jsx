import { cn } from '@/lib/utils'

function Card({ className, ...props }) {
  return (
    <div className={cn("rounded-lg border border-slate-200 bg-white shadow-sm", className)} {...props} />
  )
}
Card.displayName = "Card"

function CardContent({ className, ...props }) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  )
}
CardContent.displayName = "CardContent"

function CardTitle({ className, ...props }) {
  return (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  )
}
CardTitle.displayName = "CardTitle"

function CardDescription({ className, ...props }) {
  return (
    <p className={cn("text-sm text-slate-500", className)} {...props} />
  )
}
CardDescription.displayName = "CardDescription"

export { Card, CardContent, CardDescription, CardTitle }
