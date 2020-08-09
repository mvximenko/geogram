import { Router, Request, Response } from 'express';

const router = Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get('/', (req: Request, res: Response) => res.send('Profile route'));

export default router;
