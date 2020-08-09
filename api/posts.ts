import { Router, Request, Response } from 'express';

const router = Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req: Request, res: Response) => res.send('Posts route'));

export default router;
