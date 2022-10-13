import Profile from './pages/Profile.js' 
import Support from './pages/Support.js'
import Main from './pages/Main.js'
import Auth from './pages/Auth.js'
import Reg from './pages/Reg.js'
import Game from './pages/Game.js'
import {PROFILE_ROUTE,SUPPORT_ROUTE,MAIN_ROUTE,AUT_ROUTE,REG_ROUTE,GAME_ROUTE} from './Const.js'

export const authRoutes=[
	{
		path: PROFILE_ROUTE,
		Component: Profile
	},
	
]
export const publicRoutes=[
	{
		path: MAIN_ROUTE,
		Component: Main
	},
	{
		path: AUT_ROUTE,
		Component: Auth
	},
	{
		path: SUPPORT_ROUTE,
		Component: Support
	},
	{
		path: REG_ROUTE,
		Component: Reg
	},
	{
		path: GAME_ROUTE,
		Component: Game
	}
]