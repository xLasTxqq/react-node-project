import Router from 'express'
import Controller from '../Controllers/registrationController.js'

const router = new Router()

router.get('/', Controller.Registration)

export default router