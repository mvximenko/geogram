import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';

interface Decoded {
  user: {
    id: string;
  };
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if there's no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = (<Decoded>decoded).user;
        next();
      }
    });
  } catch (err) {
    console.error('Something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};

export default auth;
