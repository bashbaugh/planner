// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import AppLayout from './components/layouts/AppLayout/AppLayout'
import AuthLayout from './components/layouts/AuthLayout/AuthLayout'
import HomePage from './pages/HomePage/HomePage.mdx'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AppLayout}>
        <Route path="/today" page={AppTodayPage} name="today" />
        <Route path="/plan" page={AppPlanPage} name="plan" />
      </Set>
      <Set wrap={AuthLayout}>
        <Route path="/login" page={AuthLoginPage} name="login" prerender />
        <Route path="/signup" page={AuthSignupPage} name="signup" prerender />
      </Set>
      <Route path="/" page={HomePage} name="home" prerender />

      <Route notfound page={NotFoundPage} prerender />
    </Router>
  )
}

export default Routes
