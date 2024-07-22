export interface User {
  login: string
  id: number
  avatar_url: string
  html_url: string
  type: string
  name: string
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
}

export interface Repository {
  id: number
  name: string
  full_name: string
  owner: User
  html_url: string
  description: string
  fork: boolean
  url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  watchers_count: number
  forks_count: number
  open_issues_count: number
}

export type GithubItem = User | Repository

export type FetchItemsResponse = {
  total_count: number
  items: GithubItem[]
}

export interface FetchItemsError {
  message?: string
}
