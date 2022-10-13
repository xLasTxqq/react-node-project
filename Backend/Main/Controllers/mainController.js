class mainController{
	async Main(req, res){
		return res.json({'Message':'Main is work'})
	}
}
export default new mainController()