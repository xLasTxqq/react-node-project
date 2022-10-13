import Router from 'express'
import Controller from '../Controllers/mainController.js'

const router = new Router()

router.get('/', Controller.Main)

export default router