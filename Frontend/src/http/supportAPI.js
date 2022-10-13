import {$host} from "./index.js"

export const newmessage = async (category, message) => {
	const {data} = await $host.post('/support/',{category, message})
	return data;
}

export const AddCategory = async (category) => {
		//Создает новую категорию
		const {data} = await $host.post('/support/add',{category})
		return data;
}
export const DeleteCategory = async (category) => {
		//Создает новую категорию
		const {data} = await $host.post('/support/delete',{category})
		return data;
}
export const UpdateCategory = async (category,updated) => {
		//Создает новую категорию
		const {data} = await $host.post('/support/update',{category, updated})
		return data;
}
export const Categories = async () => {
		//Создает новую категорию
		const {data} = await $host.post('/support/all')
		return data;
}
export const Questions = async() => {
	const {data} = await $host.post('/support/questions')
	return data
}
export const AllMessagesUser = async(userid) => {
	const {data} = await $host.post('/support/'+userid)
	return data
}

// 	localStorage.setItem('token', data.token)
// 	return jwt_decode(data.token)
// }
// export const authentication = async (Login, Password) => {
// 	const {data} = await $host.post('/authentication/', {Login, Password})
// 	localStorage.setItem('token', data.token)
// 	return jwt_decode(data.token)
// }
// export const check = async () => {
// 	const {data} = await $authHost.get('/authentication/auth')
// 	localStorage.setItem('token', data.token)
// 	return jwt_decode(data.token)
// } 

	// async NewMessage(req, res){
	// 	return res.json({'Message':'New Message Work'})
	// }
	// async Message(req, res){
	// 	const params=req.params
	// 	return res.json({'Message':'Message idprofile:'+params.idprofile+' idmessage: '+params.idmessage+' work'})
	// }
	// async AllMessagesUser(req, res){
	// 	const params=req.body
	// 	console.log(params)
	// 	return res.json({'Message':'AllMesagesUser: '+params.idprofile+' work'})
	// }