import bcrypt from 'bcrypt'
import Users from '../Get.js'
import jwt from 'jsonwebtoken' 

class registrationController{
	async Registration(req, res){
		console.log(req.query)
		const ActivityStatus="ONLINE"
		const {Login, Password, NickName, Email} = req.query
		if(!Login || !Password || !NickName || !Email) return res.json({'Message':'Не все данные введены'})//throw new Error("Не все данные введены")
		const candidate1 = await Users.UsersDB.findOne({'Email':Email})
		if(candidate1) return res.json({'Message':'Пользователь с таким Email уже существует'})//throw new Error("Пользователь с таким Логином или Email уже существует")
		const candidate2 = await Users.UsersDB.findOne({'Login':Login})
		if(candidate2) return res.json({'Message':'Пользователь с таким Login уже существует'})
		console.log(candidate1)
		console.log(candidate2)

		const hashPassword = await bcrypt.hash(Password, 10)
		const User = await Users.UsersDB.create({Login: Login, Password: hashPassword, NickName: NickName, Email: Email, ActivityStatus: ActivityStatus/*, Icon: "dada", Code: "dada"*/})
		const token = jwt.sign({id: User._id, ban: User.BanStatus, role: User.Role}, "RandomKey", {expiresIn: '24h'})
		return res.json({token})
		// return res.json({'Message':'Registration is work'})
	}
}
export default new registrationController()