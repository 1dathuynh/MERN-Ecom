import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center active:scale-95 gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        btnUser:
          "",
        btnUserOutline: "bg-background shadow-xs cursor-pointer hover:text-accent-foreground",  
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        custom:
          "hover:bg-white cursor-pointer hover:scale-[1.03]",
        custom3:
         "text-[#000] cursor-pointer rounded-none hover:bg-[#f1f1f1] border-t-1 border-b-1 border-r-1 border-[#222] ",
        btnOrg: "text-white uppercase rounded-sm py-3 px-6 bg-[#ff5353] hover:bg-black",
        custom2: 'text-black/80 w-full justify-start text-left bg-white text-black cursor-pointer hover:text-white',
        customIconProductItem: 'text-black/80 w-full justify-start text-left bg-white cursor-pointer hover:bg-[#ff5252] hover:text-white',
        effect:
          "bg-white border-0 outline outline-1 outline-gray-300 px-8 py-6 shadow-[rgba(255,83,83,0.4)] transition duration-300 cursor-pointer rounded-md border-b-[4px] border-b-gray-200 hover:shadow-[0px_15px_25px_-5px_rgba(255,83,83,0.4)] hover:scale-[1.03] active:shadow-[0px_4px_8px_rgba(255,83,83,0.6)] active:scale-95",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
