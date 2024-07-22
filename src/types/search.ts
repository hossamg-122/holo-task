import { SearchSelectType } from './general'

export type SearchInput = {
  query: string
  entity: SearchSelectType
}

export interface SearchArgs {
  page?: number
  query?: string
  entity?: SearchSelectType
}
