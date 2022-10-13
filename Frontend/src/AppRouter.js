import React,{useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom' 
import {authRoutes, publicRoutes} from './Routes.js'
import { observer/*, useLocalStore*/ } from 'mobx-react-lite'
import {MAIN_ROUTE} from './Const.js'
import {Context} from './index.js'

const AppRouter = observer( () => {
	const {user}=useContext(Context)
	// console.log(user)
	return (
		<Routes>
			{user.isAuth && authRoutes.map(({path,Component})=>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			{publicRoutes.map(({path,Component})=>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			<Route path="*" element={<Navigate to={MAIN_ROUTE}/>}/>
		</Routes>
		)
})
export default AppRouter