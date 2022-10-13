import Router from 'express'
import Controller from '../Controllers/supportController.js'

const router = new Router()

router.post('/', Controller.NewMessage)
router.post('/add', Controller.AddCategory)
router.post('/delete', Controller.DeleteCategory)
router.post('/update', Controller.UpdateCategory)
router.post('/all', Controller.Categories)
router.post('/questions', Controller.Questions)
router.post('/:idprofile/:idmessage', Controller.Message)
router.post('/:idprofile', Controller.AllMessagesUser) 

export default router