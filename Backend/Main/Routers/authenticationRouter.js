import Router from 'express'
import Controller from '../Controllers/authenticationController.js'
import authMiddleware from '../authMiddleware.js'

const router = new Router()

router.post('/', Controller.Authentication)
router.get('/recovery', Controller.Recovery)
router.post('/recovery/:idprofile', Controller.RecoveryPost)
router.get('/auth', authMiddleware, Controller.Check)

export default router