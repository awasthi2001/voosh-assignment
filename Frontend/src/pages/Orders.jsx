import React from 'react'
import { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image
  } from '@chakra-ui/react'
import { useEffect } from 'react'
export const Orders = () => {
    const[data,setdata]  = useState([])
    const [loading,setloading] = useState(false);
    const[error,seterror] = useState(false);
    let user_id = localStorage.getItem("user_id")
    let token = localStorage.getItem("Usertoken")
   async function fetchAndUpdate(){
   try {
    setloading(true)
    let res =   await fetch(`https://tame-blue-quail-coat.cyclic.app/order/get-order?user_id=${user_id}`,{
        headers : {
            authorization : token
        }
    })
    let res2 = await res.json(); 
    if(res2.message=="success"){
     setdata(res2.orders)
     setloading(false)
    }else{
        alert("something went wrong,please try again")
    }
   } catch (error) {
    seterror(true)
   }
   }
  useEffect(()=>{
    fetchAndUpdate()
  },[])

  if(loading){
    return <Image display="block" margin="auto" mt="150px" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading_gif" />
  }
  if(error){
    alert("Something went wrong please try again")
  }
  return (
    <div>
        <TableContainer>
  <Table variant='striped' colorScheme='teal' size='md' width="70%" margin="auto" mt="50px">
    <Thead>
      <Tr>
        <Th>User Id</Th>
        <Th>Phone Number</Th>
        <Th>SubTotal</Th>
      </Tr>
    </Thead>
    <Tbody>
       {
        data.map(function(ele){
            
         return (
            <Tr key={ele._id}>
             <Td>{ele.user_id}</Td>   
            <Td>{ele.phone_number}</Td>
            <Td>₹{ele.sub_total}</Td>
          </Tr>
         )
        })
       } 
    </Tbody>
  </Table>
</TableContainer>
   </div>
  )
}
