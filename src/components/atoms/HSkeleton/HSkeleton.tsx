import { Fragment, HTMLAttributes } from 'react'
import styles from './HSkeleton.module.scss'

interface HSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  length?: number
}

export const HSkeleton = ({ length = 18 }: HSkeletonProps) => {
  const renderSkeleton = () => (
    <div className={`${styles.card} ${styles.skeleton}`}>
      <div className={`${styles.avatar} ${styles.skeleton}`} />
      <div className={styles.info}>
        <div
          style={{ width: '60%', height: '1rem' }}
          className={`${styles.name} ${styles.skeleton}`}
        />
        <div
          className={`${styles.location} ${styles.skeleton}`}
          style={{ width: '50%', height: '1rem', marginTop: '0.5rem' }}
        />
        <div
          className={`${styles.profileLink} ${styles.skeleton}`}
          style={{ width: '40%', height: '1rem', marginTop: '0.5rem' }}
        />
      </div>
    </div>
  )

  return (
    <Fragment>
      {Array.from({ length }, (_, index) => (
        <Fragment key={index}>{renderSkeleton()}</Fragment>
      ))}
    </Fragment>
  )
}
