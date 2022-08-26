import React from 'react'
import { Box, Circle, Image, Text } from '@chakra-ui/react';
import { ChannelList, ChannelPreview, ChannelPreviewMessenger, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';


/* import ChannelSearch from './components/ChannelSearch';
import TeamChannelList from './components/TeamChannelList';
import TeamChannelPreview from './components/TeamChannelPreview'; */

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';
import { List } from 'stream-chat-react/dist/components/AutoCompleteTextarea/List';
import { Preview } from 'stream-chat-react/dist/components/ChannelPreview';


const cookies = new Cookies();

const SideBar = ({logout,}) => (
  <Box h="auto" display="flex">
    <Box px=".5rem" py=".5rem" h="50rem" w="4.5rem" bg="#124CA1"justifyItems="center">
      <Box my="1rem" >
      <Circle bg="white" size="3rem">
      <Box  alignItems="center" cursor="pointer">
        <Image src={HospitalIcon} alt="Hospital" w="2rem"/>
      </Box>
      </Circle>
        </Box>
        <Box >
      <Circle bg="white" size="3rem">
      <Box  alignItems="center" onClick={logout} >
      <Image src={LogoutIcon} alt="Logout" w="2rem" />
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
  const logout = () => {
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('phoneNumber');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');

    window.location.reload();
  }
  return (
    <>
    <SideBar logout={logout}/>
    <Box h="50rem" w="15rem" bg="#3564AF">
      <CompanyHeader/>
      <ChannelSearch/>
      <ChannelList 
      filters={{}}
      channelRenderFilterFn={() => {}}
      List={(listProps) => (
        <TeamChannelList {...listProps}
        type='team'
        /> 
      )} 
      Preview={(previewProps) => (
        <TeamChannelPreview {...previewProps}
        type='team'
        />
      )}/>

        <ChannelList 
      filters={{}}
      channelRenderFilterFn={() => {}}
      List={(listProps) => (
        <TeamChannelList {...listProps}
        type='messaging'
        /> 
      )} 
      Preview={(previewProps) => (
        <TeamChannelPreview {...previewProps}
        type='messaging'
        />
      )}/>
    </Box>
    </>
  )
}

export default ChannelListContainer;