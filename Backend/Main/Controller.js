import Get from './Get.js'; 
import GetService from './GetService.js';
class Controller{
	async create(req, res){
		try{
		const get=await GetService.create(req.body)
		res.json(get)
		}
		catch(e){
			res.status(500).json(e.message)
		}
	}
	async getAll(req, res){
		try{
		const users = await GetService.getAll()
		return res.json(users)
		}
		catch(e){
			res.status(500).json(e.message)
		}
	}
	async getOne(req, res){
		try{
		const get = await GetService.getOne(req.params.id)
		return res.json(get)
		}
		catch(e){
			res.status(500).json(e.message)
		}
	}
	async update(req, res){
		try{
		const update = await GetService.update(req.body)
		return res.json(update)
		}
		catch(e){
			res.status(500).json(e.message)
		}
	}
	async delete(req, res){
		try{
		const deleted = await GetService.delete(req.params.id)
		return res.json(deleted)
		}
		catch(e){
			res.status(500).json(e.message)
		}
	}
}

export default new Controller()