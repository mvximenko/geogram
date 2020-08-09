import { Router, Request, Response } from 'express';

const router = Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req: Request, res: Response) => res.send('Auth route'));

export default router;
