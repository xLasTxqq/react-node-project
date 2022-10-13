import {makeAutoObservable} from 'mobx' 

export default class User{
	constructor(){
		this._isAuth = false
		this._user={}
		this._menu = true
		makeAutoObservable(this)
	} 
	setIsMenu(bool){
		this._menu=bool
	}
	setIsAuth(bool){
		this._isAuth=bool
	}
	setUser(user){
		this._user=user
	}
	get isMenu(){
		return this._menu
	}
	get isAuth(){
		return this._isAuth
	}
	get user(){
		return this._user
	}
}