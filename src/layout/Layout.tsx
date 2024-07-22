import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import styles from './Layout.module.scss'
import { RootState } from '@/store'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isLoading, items } = useSelector((state: RootState) => state.github)

  return (
    <main data-ui-is-loading={!!isLoading || !!items.length} className={styles.layout}>
      {children}
    </main>
  )
}
