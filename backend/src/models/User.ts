import mongoose, { Document, Schema } from 'mongoose';
import validator, { trim } from "validator";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: { 
  type: String, 
  required: [true, "Username is required"], 
  minlength: [3, "Username should not be less than 3 characters"] 
},
   email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true, // ensures all emails are stored in lowercase
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "Please provide a valid email address"
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    
  }
});

export default mongoose.model<IUser>('User', UserSchema);