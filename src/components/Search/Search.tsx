import _ from 'lodash'
import styles from './Search.module.scss'

import { RootState, IDispatch } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeEvent, useCallback, useEffect } from 'react'
import { fetchItems, resetItems, setEntity, setQuery } from '@/store/githubSlice'
import { HHeading, HIcon, HInput, HSelect, SelectOption } from '../atoms'
import { useTranslation } from 'react-i18next'

export type SearchSelectType = 'users' | 'repositories'

export const Search = () => {
  const { t } = useTranslation()
  const dispatch: IDispatch = useDispatch()
  const { query, entity } = useSelector((state: RootState) => state.github)

  const debouncedSearch = useCallback(
    _.debounce((searchQuery, searchEntity) => {
      if (searchQuery.length >= 3) {
        dispatch(fetchItems({ query: searchQuery, entity: searchEntity }))
      } else {
        dispatch(resetItems())
      }
    }, 500),
    []
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value
    dispatch(setQuery(searchQuery))
  }

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const searchEntity = e.target.value as SearchSelectType
    dispatch(setEntity(searchEntity))
  }

  useEffect(() => {
    debouncedSearch(query, entity)
  }, [query, entity, debouncedSearch])

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])
  const options: SelectOption[] = [
    {
      label: t('search.select.users'),
      value: 'users'
    },
    {
      label: t('search.select.repositories'),
      value: 'repositories'
    }
  ]
  return (
    <div className={styles.searchContainer}>
      <HInput
        label={
          <div className={styles.inputLabelWrapper}>
            <HIcon className={styles.icon} name="github" size={50} viewBox="0 0 24 24" />
            <div>
              <HHeading level={3}>{t('search.title')}</HHeading>
              <p className={styles.subTitle}>{t('search.subTitle')}</p>
            </div>
          </div>
        }
        id="search-input"
        type="text"
        value={query}
        placeholder="Start typing to search ..."
        onChange={handleSearch}
      />

      <HSelect value={entity} options={options} onChange={handleTypeChange} />
    </div>
  )
}
