import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from '../pages'

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  )
}
