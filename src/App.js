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
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = 'xydzuu3bwysj';
const authToken = cookies.get("token");


const client = StreamChat.getInstance(apiKey);
 
if(authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    phoneNumber: cookies.get('phoneNumber'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword')
  }, authToken)
}

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