import React from 'react'
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
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const AddOrder = () => {
    const[subtotal,setsubtotal] = useState("")
    let navigate = useNavigate()
   let user_id = localStorage.getItem("user_id")
   let phone_number = localStorage.getItem("phone_number")
   let token = localStorage.getItem("Usertoken")
   async function handleCreateOrder(){
    let obj = {
        sub_total : subtotal
    }
    //it will take user_id and phone_number from the backend automatically
      try {
      let res =   await fetch("https://tame-blue-quail-coat.cyclic.app/order/add-order",{
            method : 'POST',
            body : JSON.stringify(obj),
            headers : {
                'Content-Type': 'application/json',
                authorization : token
            }
        }) 
      let res2 = await res.json()
      if(res2.message=="order added successfully"){
        navigate('/')
      }else{
        alert("please try again")
      }

      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
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
            placeholder = "Enter your Phone Number"
            defaultValue={phone_number}
          />
           <FormLabel>User Id</FormLabel>
          <Input
            type="text"
            placeholder = "Enter your User Id"
            defaultValue={user_id}
          />
          <FormLabel>SubTotal</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              size="md"
              placeholder="Enter Subtotal"
              value={subtotal}
              onChange={(e) => setsubtotal(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <Button
          mt="2"
          colorScheme="teal"
          onClick={handleCreateOrder}
        >
          Create Order
        </Button>
      </Box>
    </div>
  ) 
}
