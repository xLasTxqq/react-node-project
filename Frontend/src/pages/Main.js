import React,{useContext} from 'react'
import {Context} from '../index.js'
import { observer/*, useLocalStore*/ } from 'mobx-react-lite'
const Main = observer(()=>{  

  const {user} = useContext(Context)
  const menu = user.isMenu
  function Check(){
    menu ? user.setIsMenu(false) : user.setIsMenu(true)        
    let da = document.getElementById('coll')
    let net = document.getElementById('coll2')
    da.classList.contains('collapsed') ? net.className="carousel-control-prev-icon flex-shrink-1 align-self-center" : net.className="carousel-control-next-icon flex-shrink-1 align-self-center"
  }

  return (
    <div className="d-flex flex-row min-vh-100 min-vw-100 pady justify-content-between">       
        <div className="d-flex w-100 flex-column bg-warning text-center justify-content-center align-items-center">
            <h1>Название игры</h1>
            <div className="d-flex">
              <button className="btn btn-outline-success">Быстрая игра</button>
              <button className="btn btn-outline-primary" disabled={user.isAuth ? false : true}>Выбор игры</button>
          </div>              
        </div>
            <div className="left-arrow d-flex bg-dark flex-shrink-1" onClick={()=>Check()} id="coll" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
              <span className="carousel-control-next-icon flex-shrink-1 align-self-center" id="coll2" aria-hidden="true"></span>
            </div>
                                      
        <div className="d-flex flex-column flex-shrink-1 bg-dark text-white">
          {user.isAuth ? 
            <div className={menu ? "w-25 accordion-collapse collapse show ps-1" : "w-25 accordion-collapse collapse ps-1"} id="multiCollapseExample2">
              <h6>Чат</h6>
              <h6>Друзья онлайн</h6>
              <h6>Количество людей онлайн</h6>
            </div>
            :
            <div className={menu ? "w-25 accordion-collapse collapse show ps-1" : "w-25 accordion-collapse collapse ps-1"} id="multiCollapseExample2">
              <h6>Количество людей онлайн</h6>
            </div>
          }
        </div>
    </div>
    );
})

export default Main;