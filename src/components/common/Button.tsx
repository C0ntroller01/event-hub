import React from 'react'
import {cn} from "../../lib/utils"
interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

function Button({ onClick, children, className }: ButtonProps) {
  return (
    <div>
        <button onClick={onClick} className={cn(" text-white px-4 py-2 gap-1 hover:cursor-pointer", className)}>
          {children}
        </button>
    </div>
  )
}

export default Button