import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useHome } from './useHome'
import { BrowseFeaturedPlaylistsUseCase } from '@/data/usecases'

export interface HomeProps {
  browseFeaturedPlaylists: BrowseFeaturedPlaylistsUseCase
}

export const Home: React.FunctionComponent<HomeProps> = props => {
  const { featuredPlaylists } = useHome(props)
  console.log(featuredPlaylists)

  return (
    <>
      <Box
        bgColor="#232321"
        height="auto"
        padding="24px"
        borderRadius="16px"
        justifyContent="center"
        alignItems="center"
        width={350}
      >
        <Text textAlign="center" color="white" fontSize="2xl" fontWeight="bold">
          The home page
        </Text>
      </Box>
    </>
  )
}
