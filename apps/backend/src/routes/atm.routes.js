import { Router } from "express";
import { ATMController } from '../controllers/atm.controller.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/login', ATMController.login)
router.get('/name', authMiddleware, ATMController.name)
router.get('/balance', authMiddleware, ATMController.checkBalance)
router.get('/transactions', authMiddleware, ATMController.trasactionsByCardId)
router.post('/withdraw', authMiddleware, ATMController.withdraw)
router.get('/logout', authMiddleware, ATMController.logout)

export default router
