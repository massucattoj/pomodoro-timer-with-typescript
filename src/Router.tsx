/**
 * Declare app routes
 */
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

/**
 * To work with outlet need to create a parent router and call the differente
 * layouts
 *
 * ex: with an admin panel could be another AdminLayout
 * and another set of routes that the parent has path="/admin" and element AdminLayout
 */
