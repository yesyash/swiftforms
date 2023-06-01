import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  ],
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-zinc-50 hover:bg-zinc-700",
        destructive:
          "bg-red-500 text-zinc-50 hover:bg-red-700",
        outline:
          "border border-zinc-900 hover:bg-zinc-100 hover:text-zinc-700 hover:border-zinc-700",
        secondary:
          "bg-zinc-200/70 text-zinc-900 hover:bg-zinc-200",
        ghost: "hover:bg-zinc-100 hover:text-zinc-700",
        link: "underline-offset-2 hover:underline text-zinc-900",
      },
      size: {
        default: "h-10 py-1 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}

export const Button = ({ className, asChild, variant, size, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : "button"

  return (
    <Component
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  )
}

