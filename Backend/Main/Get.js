import mongoose from'mongoose'

const Get = new mongoose.Schema({
	name: {type: String, required: true},
	login: {type: String, required: true, unique: true, allowNull: false},
	password: {type: String, required: true} 
})

const Users = new mongoose.Schema({
	Login: {type:String, required: true, unique:true, allowNull: false},
	Password: {type:String, required: true, allowNull: false},
	Icon: {type: String, unique: true, required:false, allowNull:true},
	NickName: {type:String, required: true, allowNull:false},
	Email: {type:String, required:true, unique:true, allowNull:false},
	ActivityStatus: {type:String, required:true, allowNull:false},
	Code: {type:String, required:false, allowNull:false, unique:true},
	Level: {type:Number, required:true, allowNull:false, unique:false, default:0},
	BanStatus: {type:Boolean, required:true, allowNull:false, unique:false, default:false},
	ComplaintsStatus: {type:Number, required:true, allowNull:false, unique:false, default:0},
	Role: {type:String, required:true, allowNull:false, unique:false, default:"USER"}

})
const UsersDB = mongoose.model('Users',Users)
const GetDB = mongoose.model('Get',Get)
export default {UsersDB,GetDB}