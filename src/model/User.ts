import mongoose ,{Schema,Document} from "mongoose";
import { UrlWithStringQuery } from "url";

export interface Message extends Document {
    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
content :{
    type: String, 
    required: true
},
createdAt:{
    type:Date,
    required:true,
    default: Date.now
}
})



export interface User extends Document {
    username: string;
    email: string;
    password:string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage:  boolean; //if user has enabled notifications or not
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username :{
        type: String, 
        required: [true,"Username cannot be empty"],
        unique:true,
        trim:true
    },
    email :{
        type: String, 
        required: [true,"Email cannot be empty"],
        unique:true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid e-mail address']
    },
    password:{
        type: String, 
        required: [true,"Password is required"],
    },
    verifyCode:{
        type: String, 
        required: [true,"verify code is required"],
    },
    verifyCodeExpiry:{
        type: Date, 
        required: [true,"verify code Expiry is required"],
    },
    isVerified:{
        type: Boolean, 
        default:false,
    },
    isAcceptingMessage:{
        type: Boolean, 
        default:true,
    },
    messages:[MessageSchema]
    })

    const UserModel = (mongoose.models.User as mongoose.Model<User> ) || mongoose.model<User>("User",UserSchema)

    export default UserModel;
    