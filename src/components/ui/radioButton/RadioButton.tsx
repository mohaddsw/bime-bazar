import React, { FC, InputHTMLAttributes } from 'react'
import styles from './RadioButton.module.scss'

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  id?: string
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  id,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <label
      id={id}
      className={`${styles['radio-button']} ${disabled ? styles['disabled'] : ''} ${className}`}
    >
      <input type="radio" {...props} />
      <span className={styles['custom-radio']} />
      {label && <span className={styles['label-container']}>{label}</span>}
    </label>
  )
}

export default RadioButton
