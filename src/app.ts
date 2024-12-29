import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import analysisRoutes from './routes/analysisRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/analysis', analysisRoutes);

export default app;
