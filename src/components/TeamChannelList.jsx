import React from 'react'
import { Box } from '@chakra-ui/react';

import {AddChannel} from '../assets';

const TeamChannelList = ({children, error = false, loading, type }) => {
  if (error) {
    return type === 'team' ? (
<Box>
  <Box color="white" p=".5rem">
    Connection error, please wait a moment and try again.
  </Box>
</Box>
    ) : null;
  }

  if (loading) {
    return (
      <Box>
  <Box>
    {type === 'team' ? 'Channels' : 'Messages'} loading ...
  </Box>
</Box>
    )
  }

  return (
    <Box>
      <Box>
        <Box>
        {type === 'team' ? 'Channels' : ' Direct Messages'}
        </Box>
        {/* //Button to add Channel */}
      </Box>
      {children}
    </Box>
  )
}

export default TeamChannelList