import { HHeading } from '@/components'
import styles from './Forbidden.module.scss'
import { useTranslation } from 'react-i18next'

export const Forbidden = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.notFoundContainer}>
      <HHeading level={1}>{t('forbidden.title')}</HHeading>
      <HHeading level={5}>{t('forbidden.description')}</HHeading>
    </div>
  )
}
