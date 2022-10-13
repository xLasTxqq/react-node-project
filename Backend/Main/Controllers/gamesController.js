class gamesController{

	async Game(req, res){
		return res.json({'Message':'Game is work'})
	}

	async MatchInGame(req, res){
		const params = req.params
		return res.json({'Message':'Match '+params.idgame+' is work'})
	}
	async SearchWithParams(req, res){
		const params = req.params
		return res.json({'Message':'SearchWithParams difficulty: '+params.difficulty+' Size: '+params.size+' Peoples: '+params.peoples+' is work'})
	}
	async Search(req, res){
		return res.json({'Message':'FastSearch is work'})
	}
}
export default new gamesController()