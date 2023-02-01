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
  import React from "react";
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
  import { useDispatch, useSelector } from "react-redux";
  import { handleLogin } from "../Redux/action";
  import { useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { useEffect } from "react";
  export const Login = () => {
    const [show, setShow] = React.useState(false);
    const toast = useToast();
    let navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [phone_number, setphone_number] = useState("");
    let { loading, error, isAuth } = useSelector((state) => state);
    let dispatch = useDispatch();
    const handleClick = () => setShow(!show);
    useEffect(() => {
      if (isAuth) {
        toast({
          title: "Successfully Logged in",
          description: "",
          position : "top",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        return navigate("/");
      }
    },[isAuth]);
  
    const handleLoginClick = () => {
      let obj = {
        phone_number: phone_number,
        password: password,
      };
      dispatch(handleLogin(obj));
         if(error){
        toast({
          title: "Error",
          description: "Something went wrong! please try again later",
          status: "error",
          duration: 9000,
          isClosable: true, 
        });
      }
  
    };
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
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="number"
            value={phone_number}
            onChange={(e) => setphone_number(e.target.value)}
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
          onClick={handleLoginClick}
        >
          Login
        </Button>
        <Text mt='2.5'>Don't have an account yet? <NavLink to='/SignUp' style={{
          color: 'teal',
          fontSize : '15px',
          fontWeight : 'bold'
        }}>Sign Up</NavLink></Text>
      </Box>
    );
  };