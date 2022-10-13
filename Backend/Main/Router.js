import Router from 'express' 

import Controller from "./Controller.js"

const router = new Router()

router.get('/users', Controller.create)
router.get('/userall', Controller.getAll)
router.get('/user/:id', Controller.getOne)
router.put('/user', Controller.update)  
router.delete('/user/:id', Controller.delete)

export default router