import { Router } from 'express';
import userRouter from './user/user';
import appointmentRouter from './appointment/appointment';

const router = Router();

router.use('/users', userRouter);
router.use('/appointments', appointmentRouter);

export default router;
