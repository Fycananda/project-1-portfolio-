import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-[48px] rounded-md border border-white/10 focus:border-customAccent
          font-light bg-customPrimary px-4 py-5 text-base placeholderr:text-white/60
          outline-none`,
          className
        )
        }
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
