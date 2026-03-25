import { cn } from '@/lib/utils'

function Card({ className, ...props }) {
  return (
    <div className={cn("rounded-lg border border-slate-200 bg-white shadow-sm", className)} {...props} />
  )
}
Card.displayName = "Card"

function CardHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
}
CardHeader.displayName = "CardHeader"

function CardContent({ className, ...props }) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  )
}
CardContent.displayName = "CardContent"

function CardFooter({ className, ...props }) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
}
CardFooter.displayName = "CardFooter"

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

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription }
