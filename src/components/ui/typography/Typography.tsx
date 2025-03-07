import {  TypographyComponent, TypographyVariants } from '../Type'
import style from './Typography.module.scss'
type TypographyDefaultProps<E extends React.ElementType> = {
  component?: E
  variant: TypographyVariants
}

type TypographyProps<E extends React.ElementType> = TypographyDefaultProps<E> &
  Omit<React.ComponentProps<E>, keyof TypographyDefaultProps<E>>

const Typography = <E extends TypographyComponent>({
  component,
  children,
  className,
  variant,
  ...props
}: TypographyProps<E>) => {
  const Component = (component || 'span') as React.ElementType
  return (
    <Component
      className={
        style[`${variant}`] +
        ' ' +
        `${className ? className : ''}` 
      }
      {...props}
    >
      {children}
    </Component>
  )
}
export default Typography
