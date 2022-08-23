import React from 'react'
import {Box, ChakraProvider} from '@chakra-ui/react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import theme from './theme';
import './App.css';
/* import Cookies from 'universal-cookie'; */

/* import ChannelContainer from './components/ChannelContainer';
import ChannelListContainer from './components/ChannelListContainer'; */
import {ChannelContainer, ChannelListContainer, Auth} from './components'

const apiKey = 'xydzuu3bwysj';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {
  if(!authToken) return <Auth/>

  return (
    <ChakraProvider theme={theme}>
        <Chat client={client} theme="team light">
            <Box display="flex">
            <ChannelListContainer/>
            <ChannelContainer/>
            </Box>
            
        </Chat>
         
    </ChakraProvider>
  )
}

export default App