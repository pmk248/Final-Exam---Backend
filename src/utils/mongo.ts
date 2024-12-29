import mongoose from 'mongoose';

const connectToMongo = async () => {
  try {
    const mongoUri = process.env.MONGO_URI!;
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

export default connectToMongo;
