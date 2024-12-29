import dotenv from 'dotenv';
import app from './app';
import connectToMongo from './utils/mongo';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectToMongo();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
