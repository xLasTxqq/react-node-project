import Users from '../Get.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class authenticationController{
	async Authentication(req, res){
		// return res.json({'Message':'daadada'})
		// console.log(req.body)
		const {Login,Password} = req.body
		let User = await Users.UsersDB.findOne({'Login':Login})
		if(!User) User=await Users.UsersDB.findOne({'Email':Login})
		if(!User) return res.json({"Message":"Такого пользователя не существует"})
		let comparePassword = bcrypt.compareSync(Password, User.Password)
		if(!comparePassword) return res.json({"Message":"Пароль не верный"})
		const token = jwt.sign({id: User._id, ban: User.BanStatus, role: User.Role}, "RandomKey", {expiresIn: '24h'})
		return res.json({token})
		// return res.json({'Message':'Authentication is work'})
	}
	async Recovery(req, res){
		return res.json({'Message':'Recovery is work'})
	}
	async RecoveryPost(req, res){
		return res.json({'Message':'RecoveryPost is work'})
	}
	async Check(req, res, next){
		const token = jwt.sign({id:req.user.id, ban:req.user.ban, role:req.user.role}, "RandomKey", {expiresIn: '24h'})
		// console.log(token)
		return res.json({token})
		// res.json({message:req.user.id + req.user.ban + req.user.role})
	}
}
export default new authenticationController()