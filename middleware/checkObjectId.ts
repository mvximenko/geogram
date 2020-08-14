import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';

// middleware to check for a valid object id
const checkObjectId = (idToCheck: string) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!Types.ObjectId.isValid(req.params[idToCheck]))
    return res.status(400).json({ msg: 'Invalid ID' });
  next();
};

export default checkObjectId;
