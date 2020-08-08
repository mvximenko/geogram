import express, { Application, Request, Response } from 'express';
import connectDB from './config/db';

const app: Application = express();

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
