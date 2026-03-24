import { cn } from '@/lib/utils'

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 rounded-md border border-slate-200 bg-transparent px-3 py-2 text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)

export { Input }
