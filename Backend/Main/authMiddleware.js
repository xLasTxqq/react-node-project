import jwt from 'jsonwebtoken'

export default function (req, res, next){
	if(req.method==="OPTIONS")next()
		try{
			const token=req.headers.authentication.split(' ')[1]	
			
			// console.log(req)
			// console.log(next)
			//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGMzZWI5YjFjMjQ1NTFhYmEwY2VhNyIsImJhbiI6ZmFsc2UsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjM2NjY3Njg0LCJleHAiOjE2MzY3NTQwODR9.D8o1sEpGVNyx3Z82QmDNo3Hs4yo0L7bRcD0IAnnQWuQ'
			if(!token) return res.status(401).json({message:"Не авторизован"})
			const decoded = jwt.verify(token, "RandomKey")
			// console.log(decoded)
			req.user=decoded
			// console.log(req.user)
			next()
		}catch{
			res.status(401).json({message:"Не авторизован"})
		}
}