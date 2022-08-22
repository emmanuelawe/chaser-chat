import React from 'react'
import { Box, Circle, Image, Text } from '@chakra-ui/react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

/* import ChannelSearch from './components/ChannelSearch';
import TeamChannelList from './components/TeamChannelList';
import TeamChannelPreview from './components/TeamChannelPreview'; */

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
  <Box h="auto" display="flex">
    <Box px=".5rem" py=".5rem" h="50rem" w="4.5rem" bg="#124CA1"justifyItems="center">
      <Box my="1rem" >
      <Circle bg="white" size="3rem">
      <Box  alignItems="center"  >
        <Image src={HospitalIcon} alt="Hospital" w="2rem"/>
      </Box>
      </Circle>
        </Box>
        <Box >
      <Circle bg="white" size="3rem">
      <Box  alignItems="center"  >
      <Image src={LogoutIcon} alt="Logout" w="2rem"/>
      </Box>
      </Circle>
        </Box>
      <Box>
      </Box>
    </Box>
  </Box>
)

const CompanyHeader = () => (
  <Box >
    <Box  >
      <Text fontWeight="bold" fontSize="xl" color="white" p="1.5rem">
      Chaser Chat
      </Text>
      
    </Box>
  </Box>
)


const ChannelListContainer = () => {
  return (
    <>
    <SideBar/>
    <Box h="50rem" w="15rem" bg="#3564AF">
      <CompanyHeader/>
      <ChannelSearch/>
    </Box>
    </>
  )
}

export default ChannelListContainer;