import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePageFactory } from '@/main/factory/pages'

import { Flex } from '@chakra-ui/react'

export const Routes: React.FunctionComponent = () => {
  return (
    <Flex height="100vh" width="100vw" bgColor="spotify.black">
      <Router>
        <Route exact path="/" component={HomePageFactory} />
      </Router>
    </Flex>
  )
}
