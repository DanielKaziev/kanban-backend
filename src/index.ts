import * as dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const start = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on PORT = ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

app.get('/api', (req: Request, res: Response) => {
  res.json({ data: 'test' });
  console.log('Request');
});
