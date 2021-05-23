import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useHome } from './useHome'
import { BrowseFeaturedPlaylistsUseCase } from '@/domain'

export interface HomeProps {
  browseFeaturedPlaylists: BrowseFeaturedPlaylistsUseCase
}

export const Home: React.FunctionComponent<HomeProps> = props => {
  const { featuredPlaylists } = useHome(props)
  if (!featuredPlaylists) return <div>Loading...</div>
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
          {featuredPlaylists.message}
        </Text>
      </Box>
    </>
  )
}
