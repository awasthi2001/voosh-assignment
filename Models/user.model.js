import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        Name: {type: String, required: true},
        phone_number: {type: Number, required: true},
        password: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export const UserModel = mongoose.model("user",UserSchema)