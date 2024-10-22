import { Router } from "express";
import { ATMController } from '../controllers/atm.controller.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/login', ATMController.login)
router.get('/', authMiddleware, ATMController.index)

export default router