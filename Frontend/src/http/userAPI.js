import {$authHost, $host} from "./index.js"
import jwt_decode from 'jwt-decode'

export const registration = async (Login, Password, NickName, Email) => {
	const {data} = await $host.post('/registration/',{Login, Password, NickName, Email})
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}
export const authentication = async (Login, Password) => {
	const {data} = await $host.post('/authentication/', {Login, Password})
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}
export const check = async () => {
	const {data} = await $authHost.get('/authentication/auth')
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
} 