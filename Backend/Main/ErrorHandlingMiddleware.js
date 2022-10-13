import Errors from './Errors.js'

export default function(err,req,res,next){
	if(err instanceof Errors){
		return res.status(err.status).json({message: err.message})
	}
	return res.status(500).json({message: 'Не предвиденная ошибка!'})
}