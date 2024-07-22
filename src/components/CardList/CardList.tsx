import { useCallback, useMemo } from 'react'
import { GithubItem } from '@/types'
import styles from './CardList.module.scss'
import { IDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchItems, setIsFetchingMore } from '@/store/githubSlice'
import { ExternalLink, HSkeleton, ErrorMessage } from '@/components'
import { useTranslation } from 'react-i18next'

export const CardList = () => {
  const { t } = useTranslation()
  const dispatch: IDispatch = useDispatch()
  const { error, items, hasMore, perPage, isLoading, isFetchingMore } = useSelector(
    (state: RootState) => state.github
  )

  const fetchMoreItems = useCallback(() => {
    if (hasMore) {
      setTimeout(() => {
        dispatch(setIsFetchingMore(true))
        const nextPage = Math.ceil(items.length / perPage) + 1
        dispatch(fetchItems({ page: nextPage }))
      }, 1000)
    }
  }, [items.length, hasMore, dispatch, perPage])

  const renderItem = useCallback(
    (item: GithubItem, index: number) =>
      'login' in item ? (
        // Render user item
        <div key={index} className={styles.card}>
          <img src={item.avatar_url} alt={`${item.login}'s avatar`} className={styles.avatar} />
          <div className={styles.info}>
            <h2 className={styles.name}>{item.login}</h2>
            <p className={styles.location}>{item.location || 'No location'}</p>
            <ExternalLink url={item.html_url} label="View Profile" className={styles.profileLink} />
          </div>
        </div>
      ) : (
        // Render repository item
        <div key={index} className={`${styles.card} ${styles.justifyCenter}`}>
          <div className={styles.info}>
            <h2 className={styles.name}>{item.name}</h2>
            <p className={styles.name}>By {item.owner.login}</p>
            <p>⭐ {item.stargazers_count} stars</p>
            <ExternalLink
              url={item.html_url}
              label="View Repository"
              className={styles.profileLink}
            />
          </div>
        </div>
      ),
    []
  )

  const renderedItems = useMemo(() => items.map(renderItem), [items, renderItem])

  if (error) return <ErrorMessage message={error} />

  if (isLoading && !isFetchingMore)
    return (
      <div className={styles.resultsGrid}>
        <HSkeleton />
      </div>
    )

  if (!items.length) return

  const endMessage = () => (
    <p className={styles.endMessage}>
      <b>{t('search.noMoreResults')}</b>
    </p>
  )

  return (
    <div id="resultListContainer" className={styles.resultListContainer}>
      <InfiniteScroll
        hasMore={hasMore}
        next={fetchMoreItems}
        dataLength={items.length}
        endMessage={endMessage()}
        className={styles.resultsGrid}
        loader={<HSkeleton length={6} />}
        scrollableTarget="resultListContainer"
      >
        {renderedItems}
      </InfiniteScroll>
    </div>
  )
}
