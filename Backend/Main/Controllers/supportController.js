class supportController{
	async NewMessage(req, res){
		// console.log(req.body)
		return res.json({'Message':`New Message Category ${req.body.category}, Message ${req.body.message}`})
	}

	async AddCategory(req, res){
		//Создает новую категорию
		return res.json({'Message':`New Category: ${req.body.category}`})
	}
	async DeleteCategory(req, res){
		//Создает новую категорию
		return res.json({'Message':`Delete Category: ${req.body.category}`})
	}
	async UpdateCategory(req, res){
		//Создает новую категорию
		return res.json({'Message':`Update Category: ${req.body.category} Updated: ${req.body.updated}`})
	}
	async Categories(req, res){
		const mass = [{"_id":"618c3eb9b1c24551aba0cea7","Login":"12345","Password":"$2b$10$XW35QylG2UeMpX7Vg5UQwOvXdVB.4BrLByvr.qqbSr7pi6Hp8dmpu","NickName":"12345","Email":"12345","ActivityStatus":"ONLINE","Level":0,"BanStatus":false,"ComplaintsStatus":0,"Role":"USER","__v":0},
		{"_id":"618c4f779cc0eb57db633c44","Login":"123456","Password":"$2b$10$RQIA958I7HFHxR6FpNQXD.bcE49k5nka026Uf5eXzXgjYsSYPPG4S","Icon":"dada","NickName":"123","Email":"1234","ActivityStatus":"ONLINE","Code":"dada","Level":0,"BanStatus":false,"ComplaintsStatus":0,"Role":"USER","__v":0}]
		const mass2= {"_id":"618c3eb9b1c24551aba0cea7","Login":"12345","Password":"$2b$10$XW35QylG2UeMpX7Vg5UQwOvXdVB.4BrLByvr.qqbSr7pi6Hp8dmpu","NickName":"12345","Email":"12345","ActivityStatus":"ONLINE","Level":0,"BanStatus":false,"ComplaintsStatus":0,"Role":"USER","__v":0}
		const mass3=[{"_id":"618c3eb9b1c24551aba0cea7","category":"Проблема с входом в игру"},{"_id":"618c4f779cc0eb57db633c44","category":"Другое"}]
		return res.json(mass3)
	}	
	async Questions(req, res){
		const mass = [{"_id":"618c3eb9b1c24551aba0cea7","Login":"12345","Password":"$2b$10$XW35QylG2UeMpX7Vg5UQwOvXdVB.4BrLByvr.qqbSr7pi6Hp8dmpu","NickName":"12345","Email":"12345","ActivityStatus":"ONLINE","Level":0,"BanStatus":false,"ComplaintsStatus":0,"Role":"USER","__v":0},
		{"_id":"618c4f779cc0eb57db633c44","Login":"123456","Password":"$2b$10$RQIA958I7HFHxR6FpNQXD.bcE49k5nka026Uf5eXzXgjYsSYPPG4S","Icon":"dada","NickName":"123","Email":"1234","ActivityStatus":"ONLINE","Code":"dada","Level":0,"BanStatus":false,"ComplaintsStatus":0,"Role":"USER","__v":0}]
		const mass2= {"_id":"618c3eb9b1c24551aba0cea7","Login":"12345","Password":"$2b$10$XW35QylG2UeMpX7Vg5UQwOvXdVB.4BrLByvr.qqbSr7pi6Hp8dmpu","NickName":"12345","Email":"12345","ActivityStatus":"ONLINE","Level":0,"BanStatus":false,"ComplaintsStatus":0,"Role":"USER","__v":0}
		const mr=[{"_id":"618c3eb9b1c24551aba0cea7","question":"Как какать?","answer":"Сидя"},{"_id":"618c4f779cc0eb57db633c44","question":"Как какать?","answer":"Сидя"}]
		const mr2={"_id":"618c4f779cc0eb57db633c44","question":"Как какать?","answer":"Сидя"}
		const mr3=[{"_id":"collapseExample","question":"Как начать играть?","answer":"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."},
		{"_id":"collapseExample1","question":"Как изменить аватарку?","answer":"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."},
		{"_id":"collapseExample2","question":"Как играть?","answer":"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."},
		{"_id":"collapseExample3","question":"Как добавлять в друзья?","answer":"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."},
		{"_id":"collapseExample4","question":"Как какать?","answer":"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."},]
		return res.json(mr3)
		// return res.json({})
	}

	async Message(req, res){
		const params=req.params
		return res.json({'Message':'Message idprofile:'+params.idprofile+' idmessage: '+params.idmessage+' work'})

	}
	async AllMessagesUser(req, res){
		const params=req.params
		console.log(params)
		const mess=[{'participants':['618c3eb9b1c24551aba0cea7','fgodifjguidfgjdfgg'],'_id':'12345','firstmessage':'А как играть?','datetime':'23:12:34 21-12-2021','lastuser':'fgodifjguidfgjdfgg','category':'Другое','datetime_lastmessage':'23:12:34 21-12-2021'},
		{'participants':['618c3eb9b1c24551aba0cea7','fgodifjguidfgjdfgg'],'_id':'123456','firstmessage':'А как играть?','datetime':'23:12:34 21-12-2021','lastuser':'fgodifjguidfgjdfgg','category':'Другое','datetime_lastmessage':'23:12:34 21-12-2021'}]
		// return res.json({'Message':'AllMesagesUser: '+params.idprofile+' work'})
		// return res.json({})
		return res.json(mess)
	}

}
export default new supportController() 