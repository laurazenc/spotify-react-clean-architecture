import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePageFactory } from '@/main/factory/pages'

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePageFactory} />
    </Router>
  )
}
