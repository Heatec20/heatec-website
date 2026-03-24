import { cn } from '@/lib/utils'

const badgeVariants = {
  default: "align-items-center rounded-full border pixel px-2.5 py-0.5 text-xs font-semibold transition-colors focus:scale-95 focus:ring4 focus:ring-offset-2 carsor-pointer bg-white text-slate-900 hover:bg-slate-100 border-slate-200",
  secondary: "align-items-center rounded-full border pixel px-2.5 py-0.5 text-xs font-semibold transition-colors focus:scale-95 focus:ring4 focus:ring-offset-2 carsor-pointer bg-slate-100 text-slate-900 hover:bg-slate-200 border-slate-300",
}

function Badge({ className, ...props }) {
  return (
    <div className={cn(badgeVariants.default, className)} {...props} />
  )
}

export { Badge }
