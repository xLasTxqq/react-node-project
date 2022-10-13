import Router from 'express'

import mainRouter from './mainRouter.js'
import authenticationRouter from './authenticationRouter.js'
import registrationRouter from './registrationRouter.js'
import profileRouter from './profileRouter.js'
import supportRouter from './supportRouter.js'
import gamesRouter from './gamesRouter.js'

const router = new Router()

router.use('/', mainRouter)
router.use('/registration', registrationRouter)
router.use('/authentication', authenticationRouter)
router.use('/support', supportRouter)
router.use('/profile', profileRouter)
router.use('/', gamesRouter)

export default router