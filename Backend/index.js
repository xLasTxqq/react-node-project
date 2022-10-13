// import express from 'express' 
import express from 'express';
import mongoose from'mongoose';
import cors from 'cors'

import router from "./Main/Router.js";
import router2 from "./Main/Routers/indexRouter.js";
// import errorHandler from "./Main/ErrorHandlingMiddleware.js"  

console.log('server work')

const DB_URL='mongodb_url'
// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

const PORT=3000;
const app=express()

app.use(cors())
app.use(express.json())
app.use('/' , router2)
// app.use(errorHandler)


async function startApp() {
	try{
		await mongoose.connect(DB_URL,{useUnifiedTopology: true, useNewUrlParser: true})
		app.listen(PORT,"127.0.0.1", ()=>console.log('server start on port' + PORT));
	}
	catch(e){
		console.log(e)
	}
}

startApp()
// "type": "module",  "type": "commonjs",