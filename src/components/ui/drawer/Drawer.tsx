import React, { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Drawer.module.scss'
import { createPortal } from 'react-dom'

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  open: boolean
  onClose: () => void
  anchor?: 'bottom' | 'top' | 'left' | 'right'
  fullHeight?: boolean
  maxWidth?: string
  dataAttribute?: string
}

const Drawer: FC<DrawerProps> = ({
  children,
  open,
  onClose,
  anchor = 'bottom',
  fullHeight = false,
  maxWidth = '100%',
  dataAttribute,
  className = '',
  ...props
}) => {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    if (e.target === e.currentTarget && onClose) {
      onClose()
    }
  }


  if (!open) return null

  return createPortal(
    <div
      data-modal={dataAttribute}
      className={styles['drawer']}
    >
      <div className={styles['backdrop']} onClick={handleBackdropClick}></div>
      <div
        {...props}
        className={`${styles['content']} ${styles[anchor]} ${open ? styles['open'] : ''} ${fullHeight ? styles['fullHeight'] : ''} ${className}`}
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Drawer
