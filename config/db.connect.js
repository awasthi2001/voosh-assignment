import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

export async function Connection(){
    return new Promise(function(resolve, reject){
        mongoose.connect(process.env.MongoURL,(err)=>{
            if(err){
            reject('Not connected to DB server')
            }else{
            resolve('Connected to DB')
            }
        })
    })
}