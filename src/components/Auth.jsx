import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { ChakraProvider, Box, FormControl, FormLabel, Input, Image} from '@chakra-ui/react';

import signinImage from '../assets/signup.jpg';
import theme from '../theme';


const Auth = () => {
    const [isSignup, setisSignup] = useState(true);

    const handleChange = () => {

    }

    const switchMode = () => {
setisSignup((prevIsSignup) => !prevIsSignup);
    }

  return (
    <ChakraProvider theme={theme}>
    <Box display="flex" w="100%" h="100rem" bg="#124CA1">
<Box bg="#124CA1" >
    <Box bg="white" h="auto" w="57rem" 
    borderRadius="lg" justifyItems="center" 
    mx="4rem" my="5rem" >
        <Box fontWeight="extrabold" px="2rem" pt="2rem" px="2rem"
        fontSize="2xl">
{isSignup 
? 'Sign Up' : 'Sign In'}</Box>
<FormControl px="2rem" py="2rem" myonSubmit={()=> {}}>
    {isSignup && (
        <Box >
        <FormLabel htmlFor='fullName'>Full Name</FormLabel>
        <Input
        name="fullName"
        w="90%"
        type="text"
        placeholder="Full Name"
        onChange={handleChange}
        required
        mb="1rem"
        /></Box>
    )} 
    <Box>
    <FormLabel htmlFor='username'>Username</FormLabel>
        <Input
        name="username"
        w="90%"
        type="text"
        placeholder="Username"
        onChange={handleChange}
        required
        mb="1rem"
        />
       </Box>
       {isSignup && (
        <Box >
        <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
        <Input
        name="phoneNumber"
        w="90%"
        type="text"
        placeholder="Phone Number"
        onChange={handleChange}
        required
        mb="1rem"
        /></Box>
    )} 
    {isSignup && (
        <Box >
        <FormLabel htmlFor='avatarURL'>Avatar URL</FormLabel>
        <Input
        name="avatarURL"
        w="90%"
        type="text"
        placeholder="Avatar URL"
        onChange={handleChange}
        required
        mb="1rem"
        /></Box>
    )} 
    <Box >
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input
        name="password"
        w="90%"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        mb="1rem"
        /></Box>
         {isSignup && (
        <Box >
        <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
        <Input
        name="confirmPassword"
        w="90%"
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        required
        /></Box>
         )}
</FormControl>
<Box>
<Box pb="2rem" px="2rem"  cursor="pointer">
    {isSignup
    ? "Already have an account?"
    : "Don't have an account?" 
    }
    <span onClick={switchMode}>
{isSignup ? 'Sign In' : 'Sign Up'}
    </span>
</Box>
</Box>
    </Box>
</Box>
<Box display="flex" >
    <Image src={signinImage} alt="sign in" />
</Box>
    </Box>
    </ChakraProvider>
  )
}

export default Auth