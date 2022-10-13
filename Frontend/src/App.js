import React,{useState, useContext, useEffect} from 'react'
import {BrowserRouter} from "react-router-dom"
import AppRouter from './AppRouter.js'
import { observer/*, useLocalStore*/ } from 'mobx-react-lite'
import {Context} from './index.js'
import {check} from './http/userAPI.js'
import NavBar from './NavBar.js'
import Footer from './Footer.js'

const App=observer(()=>{
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    // setTimeout(()=>{
      check().then(data => {
      // user.setUser(true)
      user.setIsAuth(true)
    }).finally(()=> setLoading(false))
  // },1000)
}, [user]) 

if(loading) return <div className="spinner-border" role="status">
  {/*<span className="visually-hidden">Loading...</span>*/}
</div>

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
    );
})

export default App;
