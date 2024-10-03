import mongoose,{Schema , Document} from "mongoose"

export interface Message extends Document{
       content : string;
       createAt: Date
}

const msgschema: Schema<Message> = new Schema({
      content: {
         type : String,
         required: true
      },
      createAt: {
         type : Date,
         required : true,
         default : Date.now
      }
})

export interface User extends Document{
       
       username : string;
       email : string;
       password : string;
       verifyCode : string;
       verifyCodeExpiry : Date;
       isVerified : boolean;
       isAcceptingMsg : Boolean;
       message: Message[];
}

const UserSchema: Schema<User> = new Schema({
   username: {
      type : String,
      required: [true,"Username is required"],
      trim : true,
      unique : true,
   },
   email: {
      type : string,
      required : [true,"email is required"],
      unique : true,
      match : [^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$,'please enter a valid email address']
   },
   password: {
      type : string,
      required : [true,"email is required"],
   }
   verifyCode: {
      type : string,
      required : [true,"email is required"],
   }
   verifyCodeExpiry: {
      type : string,
      required : [true,"email is required"],
   }
   isVerified:{
      type : boolean,
      required : [true,"email is required"],
   }
})
