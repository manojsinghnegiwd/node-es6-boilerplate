import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String
});

export default mongoose.model('User', UserSchema);