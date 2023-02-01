import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    position,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
  import { useDispatch, useSelector } from "react-redux";
  import { handleLogin, handleRegister } from "../Redux/action";
  import { useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  export const SignUp = () => {
    const [show, setShow] = React.useState(false);
    const toast = useToast();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();
    let { loading, error, isAuth, isregister } = useSelector(
      (state) => state
    );
    let obj = {
      isAuth: isAuth,
      isregister: isregister,
    };
    console.log(obj);
    let dispatch = useDispatch();
    const handleClick = () => setShow(!show);
    useEffect(() => {
      if(isregister){
        if (isregister) {
          toast({
            title: "Successfully Registered",
            description: "",
            position: 'top',
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          return navigate("/login");
        }
      }
      if (isAuth) {
        return navigate("/");
      }
  
    },[isregister,isAuth]);
    function handleToast() {
      if (error) {
        return toast({
          title: "Error",
          description: "Something went wrong! please try again later",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
    return (
      <Box
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        width="35%"
        display="block"
        margin="auto"
        marginTop="200px"
        p="20px"
        borderRadius="5px"
      >
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              size="md"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          isLoading={loading}
          mt="2"
          colorScheme="teal"
          onClick={() => {
            let obj = {
              Full_Name: name,
              Email_Id: email,
              Password: password,
            };
            dispatch(handleRegister(obj));
            handleToast();
          }}
        >
          Register
        </Button>
        <Text mt='2.5'>Have an account ? <NavLink to='/login' style={{
          color: 'teal',
          fontSize : '15px',
          fontWeight : 'bold'
        }}>Login</NavLink></Text>
      </Box>
    );
  };