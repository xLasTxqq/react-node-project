import React,{useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { observer/*, useLocalStore*/ } from 'mobx-react-lite'
import {authentication} from '../http/userAPI.js'
import {Context} from '../index.js'
import {PROFILE_ROUTE} from '../Const.js'
// import User from '../User.js'
// import {Switch, Route, Redirect} from 'react-router-dom'

const Auth = observer(() => {
	const {user} = useContext(Context)
	const[Login,setLogin]=useState('')
	const[Password,setPassword]=useState('')
	const nav=useNavigate()

	const Log=async()=>{

		try{
			let data
			data = await authentication(Login,Password)		
			// console.log(data)	
			user.setUser(data)
			user.setIsAuth(true)
			nav(PROFILE_ROUTE)
		}

		catch(e){
			alert(e)
		}
		
	}
	return (
		<div className="d-flex flex-column justify-content-sm-center vh-100 align-items-center text-center pady">
		{/*<div class="input-group mb-3">
		  <span class="input-group-text" id="basic-addon1">@</span>
		  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
		</div>

		<div class="form-floating mb-3">
		  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
		  <label for="floatingInput">Email address</label>
		</div>*/}

		  <div className=" container-sm form-check">
		  <label htmlFor="exampleInputEmail1" className="form-label">Почтовый адрес / Логин</label>  
		    <input type="text" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Пожалуйста введите свой логин' value={Login} onChange={e=> setLogin(e.target.value)}/>
		    {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
		  </div>
		  <div className="mt-3 container-sm form-check">
		    <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
		    <input type="password" className="form-control text-center" id="exampleInputPassword1" placeholder='Пожалуйста введите свой пароль' value={Password} onChange={e=> setPassword(e.target.value)} />
		  </div>
		  <div className="mt-3 form-check">
		    <input type="checkbox" className="form-check-input text-center" id="exampleCheck1" />
		    <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
		  </div>
		  <button type="submit" className="btn btn-primary btn-send mt-3 px-5" onClick={Log}>Войти</button>
		</div>
		)
})
export default Auth