import { OrderModel } from "../Models/order.model.js";


export async function handle_AddOrder(req,res){
        try {
              await OrderModel.create(req.body)
            res.status(201).send({
                message : 'order added successfully'
            })
        } catch (error) {
            res.status(500).send({
                message : 'something went wrong'
            })
        }
        
}

export async function handler_Get_Order(req,res){
    try {
        const {user_id} = req.query;
        if(user_id){
           let order_details = await OrderModel.find({user_id:user_id})
           res.status(200).send({
             message : 'success',
             orders : order_details
           })
        }else{
         req.status(400).send({
             message : 'Bad Request'
         })
        }  
     } catch (error) {
         console.log(error)
         res.status(500).send({
             message : 'something went wrong'
         })   
     }
}