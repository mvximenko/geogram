import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  website: {
    type: String,
  },
  bio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('profile', ProfileSchema);
