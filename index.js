import express from "express";
const router = express.Router()

import user from "./routes/user/user.js";

router.use('/user', user)

export default router