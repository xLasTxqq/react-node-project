import axios from 'axios'

const $host = axios.create({
	baseURL: "http://127.0.0.1:3000/"
})
const $authHost = axios.create({
	baseURL: "http://127.0.0.1:3000/"
})
// const da=$host.post('/authentication', {Login:'12345',Password:'12345'},)
// console.log(da)
// axios.post('http://127.0.0.1:80/authentication/',
// {
//    headers: {
//       'Content-Type': 'application/json'
//    } 
// }).then(function (response) {
//    console.log(response);
// });

const authInterceptor = config => {
	config.headers.authentication = `Bearer ${localStorage.getItem('token')}`
	return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
	$host,
	$authHost
}