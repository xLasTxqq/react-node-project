import Router from 'express'
import Controller from '../Controllers/gamesController.js'

const router = new Router()

router.get('/game',Controller.Game) //Тут выбираешь сложность и размер карты
router.get('/game/search/:difficulty/:size/:peoples',Controller.SearchWithParams) //Тут начинается поиск 
router.get('/game/match/:idgame',Controller.MatchInGame) //Тут идет матч
router.get('/game/search', Controller.Search) //Тут начинается быстрый поиск 

export default router