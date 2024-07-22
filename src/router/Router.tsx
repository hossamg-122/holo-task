import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route {...route} key={`route-${i}`} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
