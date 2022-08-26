import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { ChakraProvider, Box, FormControl, FormLabel, Input, Image, Button} from '@chakra-ui/react';

import signinImage from '../assets/signup.jpg';
import theme from '../theme';

const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: ''
}

const Auth = () => {
    const [form, setForm] = useState(initialState)
    const [isSignup, setisSignup] = useState(true);

    const handleChange = (e) => {
setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
e.preventDefault();

const {fullName, username, password, phoneNumber, avatarURL} = form;

const URL = "http://localhost:5000/auth";

const {data: {token, userId, hashedPassword}} = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {username, 
    password, phoneNumber, avatarURL, fullName
    })
    cookies.set('token', token);
    cookies.set('username', username);
    cookies.set('fullName', fullName);
    cookies.set('userId', userId);

    if(isSignup) {
    cookies.set('phoneNumber', phoneNumber);
    cookies.set('avatarURL', avatarURL);
    cookies.set('hashedPassword', hashedPassword);
    }
    window.location.reload();
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
        <Box fontWeight="extrabold" px="2rem" pt="2rem"
        fontSize="2xl">
{isSignup 
? 'Sign Up' : 'Sign In'}</Box>
<FormControl px="2rem" py="2rem" onSubmit={handleSubmit}>
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
         <Box mt="2rem" color="white">
<Button onClick={handleSubmit} bg="#124CA1">{isSignup ? 'Sign Up' : 'Sign In'}</Button>
         </Box>
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
    <Image src={signinImage} alt="sign in" 
    
    />
</Box>
    </Box>
    </ChakraProvider>
  )
}

export default Auth