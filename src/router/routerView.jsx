import React from 'react'
import { Switch, Route } from 'dva/router'

function RouterView(props) {
  const { routes } = props
  if (!routes || routes.length === 0) return null
  return (
    <Switch>
      {routes.map((item) => {
        const { path } = item
        return (
          <Route
            key={item.path}
            path={path}
            exact={item.exact}
            render={(renderProps) => {
              const Component = item.component
              if (!Component) return null

              return <Component {...renderProps} {...item} />
            }}
          />
        )
      })}
    </Switch>
  )
}
RouterView.defaultProps = {
  routes: [],
}

export default RouterView
