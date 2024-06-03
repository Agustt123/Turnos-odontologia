import { Router } from 'express';
import { User } from '../entities/user';
import router from '.';

const indexRouter =Router();

indexRouter.use("/users",router)

export default indexRouter;