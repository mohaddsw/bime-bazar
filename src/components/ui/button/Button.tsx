import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import { ButtonFormats} from '@/components/ui/Type'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  format: ButtonFormats
  disabled?: boolean
  loading?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  format,
  type = 'button',
  disabled,
  loading = false,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      type={type}
      className={
        styles['button-class'] +
        ' ' +
        styles[`${format}`] +
        ' ' +
        `${loading ? styles[`${format}-loading`] : ''}` +
        ' ' +
        className
      }
    >
        <>
          {children}
        </>
    </button>
  )
}
export default Button
