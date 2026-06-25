import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-mono text-xs uppercase font-bold tracking-widest transition-all duration-150 outline-none select-none disabled:pointer-events-none disabled:opacity-30 border rounded-none",
  {
    variants: {
      variant: {
        /* Flat, high contrast solid blocks matching the structural square arrows */
        default: 'bg-foreground text-background border-foreground hover:bg-neutral-800 hover:text-white',
        outline: 'border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background',
        /* Industrial Vermilion Color Pop Block */
        primaryBlock: 'bg-primary text-white border-primary hover:bg-black hover:border-black',
        secondary: 'bg-muted text-foreground border-muted hover:bg-foreground hover:text-background hover:border-foreground',
        ghost: 'border-transparent text-foreground hover:bg-neutral-200',
        destructive: 'bg-red-600 text-white border-red-600 hover:bg-black hover:border-black',
        link: 'text-foreground underline underline-offset-4 hover:text-primary border-transparent p-0 bg-transparent',
      },
      size: {
        default: 'h-10 px-5 gap-2',
        xs: 'h-7 px-3 text-[10px] gap-1',
        sm: 'h-8 px-4 text-[11px] gap-1.5',
        lg: 'h-12 px-6 text-sm tracking-wider gap-3',
        icon: 'w-10 h-10',
        'icon-sm': 'w-8 h-8',
        'icon-lg': 'w-12 h-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }