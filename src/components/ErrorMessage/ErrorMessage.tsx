import React, { useState, useEffect } from 'react'
import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps {
  message?: string | null
  isPersistent?: boolean
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong',
  isPersistent = false
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!isPersistent) {
      const timer = setTimeout(() => setVisible(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [message, isPersistent])

  if (!visible) return null

  return (
    <div className={styles.errorMessageContainer} role="alert">
      <div className={styles.errorMessage}>
        {isPersistent && (
          <button className={styles.closeButton} onClick={() => setVisible(false)}>
            &times;
          </button>
        )}
        {message}
      </div>
    </div>
  )
}
