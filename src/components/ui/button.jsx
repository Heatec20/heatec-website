import { cn } from '@/lib/utils'

const buttonVariants = {
  default: "bg-slate-900 text-slate-50 hover:bg-slate-800",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-slate-200 bg-white hover:bg-slate-100",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  ghost: "hover:bg-slate-100",
  link: "text-slate-900 underline-offset-4 hover:underline",
}

const Button = ({ className, variant = 'default', disabled, ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2",
        buttonVariants[variant],
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
}
Button.displayName = "Button"

export { Button }
