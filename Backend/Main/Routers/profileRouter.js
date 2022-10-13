import Router from 'express'
import Controller from '../Controllers/profileController.js' 

const router = new Router()

router.get('/:idprofile',Controller.Profile)
router.get('/:idprofile/friends',Controller.UserFriends)
router.get('/:idprofile/friends/add',Controller.AddFriend)

export default router