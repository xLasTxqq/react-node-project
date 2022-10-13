import React from 'react';
import {NavLink} from 'react-router-dom'
import {Context} from './index.js'
import {PROFILE_ROUTE,SUPPORT_ROUTE,MAIN_ROUTE,AUT_ROUTE,REG_ROUTE,GAME_ROUTE} from './Const.js'
import {observer} from 'mobx-react-lite'

const NavBar = observer( ()=>{
	const {user} = React.useContext(Context)
	const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token');
    console.log(user)
    Close()
  	}
  	const Close = () => {
  		const toggler = document.querySelector('.navbar-toggler')
  		// console.log(window.getComputedStyle(toggler).display)
  		if(window.getComputedStyle(toggler).display!=='none')
  		document.querySelector('.navbar-toggler').click()
  		// document.getElementById('navbarNav').className='collapse justify-content-end navbar-collapse'
  	}
		return (
			<nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
			  <div className="container-fluid">
			    <NavLink className="navbar-brand" onClick={()=>Close()} to={MAIN_ROUTE}>GameOnline</NavLink>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
			      <ul className="navbar-nav">

			      	<li>
			        	<NavLink className="nav-link" onClick={()=>Close()} to={GAME_ROUTE}>Игра</NavLink>
			        </li>

			        <li className="nav-item ">
			          <NavLink className="nav-link" onClick={()=>Close()} to={SUPPORT_ROUTE}>Тех-поддержка</NavLink>			          
			        </li>			        
			        {user.isAuth ?
			        <ul className="navbar-nav">
			        <li className="nav-item">
			        <NavLink className="nav-link" onClick={()=>Close()} to={PROFILE_ROUTE}>Профиль</NavLink>
			        </li>
			        <li className="nav-item">
			        {/*<NavLink className="nav-link" to={MAIN_ROUTE} onClick={()=>logOut()}>Выйти</NavLink>*/}
			        <div className="nav-link" role="button" onClick={()=>logOut()}>Выйти</div>
			        </li>
			        </ul>
			        :
			        <ul className="navbar-nav">
			        <li className="nav-item">
			        <NavLink className="nav-link" onClick={()=>Close()}/*onClick={()=>user.setIsAuth(true)}*/ to={AUT_ROUTE}>Авторизация</NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink className="nav-link" onClick={()=>Close()} to={REG_ROUTE}>Регистрация</NavLink>
			        </li>
			        </ul>
			    	}
			      </ul>
			    </div>
			  </div>
			</nav>
		);
});

export default NavBar;

