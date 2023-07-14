import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  job: string;
  university: string;
  major: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  job: { type: String},
  university: { type: String },
  major: { type: String },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
