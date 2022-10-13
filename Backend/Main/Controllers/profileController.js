class profileController{
	async Profile(req, res){
		const params=req.params
		return res.json({'Message':'Profile id: '+params.idprofile+' work'})
	}
	async UserFriends(req, res){
		return res.json({'Message':'User friends work'})
	}
	async AddFriend(req, res){
		return res.json({'Message':'Add friend work'})
	}
}
export default new profileController()