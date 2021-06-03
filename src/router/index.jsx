import React from 'react'
// import { BrowserRouter as Router } from 'dva/router';
import { HashRouter as Router } from 'dva/router'
import routes from './routes'
import RouterView from './routerView'
export default function SetRouter() {
  if (!routes || routes.length === 0) return null
  return (
    <Router>
      <RouterView routes={routes} />
    </Router>
  )
}
