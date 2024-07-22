import { HHeading } from '@/components'
import styles from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

export const NotFound = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.notFoundContainer}>
      <HHeading level={1}>{t('notFound.title')}</HHeading>
      <HHeading level={5}>{t('notFound.description')}</HHeading>
    </div>
  )
}
