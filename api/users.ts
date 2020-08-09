import { Router, Request, Response } from 'express';

const router = Router();

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get('/', (req: Request, res: Response) => res.send('User route'));

export default router;
