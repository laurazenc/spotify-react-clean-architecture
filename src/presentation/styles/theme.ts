/* eslint-disable @typescript-eslint/no-unused-vars */
import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
})
