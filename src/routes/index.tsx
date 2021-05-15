import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Route exact path="/">
        hola
      </Route>
    </Router>
  )
}
