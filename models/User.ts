import { Schema, Document, model } from 'mongoose';

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const User = model<UserDocument>('user', UserSchema);
