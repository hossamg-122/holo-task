import axios from 'axios'

export const useApi = (handleErrors = true) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (!handleErrors) {
        return Promise.reject(error)
      }

      switch (error.response.status) {
        case 503:
        case 520:
        case 500:
          console.error('Something went wrong!')
          break

        case 401:
          window.location.href = '/login'
          break

        case 403:
          window.location.href = `/forbidden`

          break

        case 404:
          window.location.href = `/404`

          break
        case 405:
          console.error('You have made a bad request')

          break
        case 423: // locked exception
          window.location.href = '/unauthorized'

          break
      }

      return Promise.reject(error)
    }
  )

  return instance
}
