import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {/* children eh o filho do elemento button, ex: texto Entrar */}
      {children}
    </button>
  )
}

export default Button