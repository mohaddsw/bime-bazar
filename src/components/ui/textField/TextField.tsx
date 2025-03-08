import {   TextFieldType } from '../Type'
import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './TextField.module.scss'
import Typography from '../typography/Typography'
interface TextFieldPropType extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: TextFieldType
  description?: string
  error?: boolean
  value?: string | number
  className?: string
  id?: string
}
const TextField = forwardRef(
  (
    {
      label,
      type = 'text',
      description,
      error,
      value,
      className = '',
      id,
      ...props
    }: TextFieldPropType,
  ) => {
    return (
      <div
        className={`${styles['textfield-class']} ${className}`}
        id={id}
      >
        <div
          className={
            styles['input-container'] +
            ' ' +
            `${error ? styles['error'] : ''}` 
          }
        >
         
          <input
            className={styles['input']}
            type={type}
            value={value}
            placeholder={label}
            {...props}
          />
      
     
        </div>
        {(error) && (
          <Typography
            component="span"
            variant="description"
            className={
              `${error ? styles['error-text'] : ''}`
            }
          >
            {description}
          </Typography>
        )}
      </div>
    )
  },
)

TextField.displayName = 'TextField'
export default TextField
