import Get from './Get.js'

class GetService{

	async create(get){
		const addUser = await Get.create(get)
		return addUser
	}

	async getAll(){
		const AllUsers = await Get.UsersDB.find() 
		return AllUsers
	}

	async getOne(id){
		if(!id) throw new Error('Не указан ID')
		const get = await Get.UsersDB.findById(id)
		return get;	
	}

	async update(get){
		if(!get._id) throw new Error('Не указан ID')
		const updated = await Get.findByIdAndUpdate(get._id, get, {new: true})
		return updated
	}
	async delete(id){
		if(!id) throw new Error('Не указан ID')
		const deleteUser = await Get.findByIdAndDelete(id)
		return deleteUser
	}

}
export default new GetService()