import express, { Application, Request, Response } from 'express';
import connectDB from './config/db';
import auth from './api/auth';
import users from './api/users';
import profile from './api/profile';
import posts from './api/posts';

const app: Application = express();

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('API Running');
});

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
