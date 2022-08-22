import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import { useChatContext } from 'stream-chat-react';

import {SearchIcon} from '../assets/SearchIcon';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

const getChannels = async (text) => {
    try {
//TODO: Fetch channels
    } catch(error) {
        setQuery('')
    }
}

    const onSearch = (event) => {
event.preventDefault();
setLoading(true);
setQuery(event.target.value);
getChannels(event.target.value)
    }

  return (
    <Box align="center" px=".5rem">
        <InputGroup>
        <InputLeftElement>
        <Box as={SearchIcon}/>
        </InputLeftElement>
        <Input placeholder='Search' type="text" value={query} onChange={onSearch}/>
        </InputGroup>
                
    </Box>
  )
}

export default ChannelSearch