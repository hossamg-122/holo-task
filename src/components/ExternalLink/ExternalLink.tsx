import React from 'react'
import styles from './ExternalLink.module.scss'

interface ExternalLinkProps {
  url: string
  label?: string
  target?: string
  className?: string
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  className,
  label = 'Link',
  target = '_blank'
}) => {
  return (
    <a
      href={url}
      target={target}
      rel="noopener noreferrer"
      className={`${styles.ExternalLink} ${className}`}
    >
      {label}
    </a>
  )
}
