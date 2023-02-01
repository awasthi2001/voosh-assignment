import mongoose from "mongoose";

const Order_Schema = mongoose.Schema(
    {
        user_id: {type: String, required: true},
        sub_total: {type: Number, required: true},
        phone_number: {type:Number  ,required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export const OrderModel = mongoose.model("order",Order_Schema)