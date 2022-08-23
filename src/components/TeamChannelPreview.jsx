import React from 'react'
import { Box } from '@chakra-ui/react';
import { Avatar, useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({channel, type}) => {
  const {channel: activeChannel, client} = useChatContext();

const ChannelPreview = () => (
  <Box>
#{channel?.data?.name || channel?.data?.id}
  </Box>
)

const DirectPreview = () => {
  const members = Object.values(channel.state.members).filter(({user}) => user.id !== client.userID );
return (
  <Box>
    <Avatar
    image={members[0]?.user?.image}
    name={members[0]?.user?.fullName}
    size={24}
    />
    <Box>{members[0]?.user?.fullName}</Box>
  </Box>
)
}

  return (
    <Box className={
      channel?.id === activeChannel?.id 
      ? 'bg="gray.100"' : 'bg="gray.500"'
    }
    onClick={() => {
      console.log(channel);
    }}
    >
{type === 'team' ? <ChannelPreview/> : <DirectPreview/>}
    </Box>
  )
}

export default TeamChannelPreview