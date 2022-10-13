import React/*,{useContext}*/ from 'react'
// import {Context} from '../index.js'
import { observer/*, useLocalStore*/ } from 'mobx-react-lite'

const Profile = observer(()=>{

  // const {user} = useContext(Context)
  // const logOut = () => {
  //   user.setUser({})
  //   user.setIsAuth(false)
  //   localStorage.removeItem('token');
  //   console.log(user)
  // }
//   function dropenter() {
//     // Подавить событие
//     // e.stopPropagation();
//     // e.preventDefault();
//     // Визуальный эффект "зоны выгрузки" при заходе на нее курсора
//     var tmp=document.getElementById('drag');
//     tmp.style.background='#FF0000';
//     tmp.innerHTML='Drop your files here';
// }
// function dropleave() {
//     // Привести "зону выгрузки" в первоначальный вид
//     var tmp=document.getElementById('drag');
//     tmp.style.background='#DDDDDD';
//     tmp.innerHTML='Drop-zone';
// }
  return (
    <div className="d-flex flex-row pady min-vh-100 min-vw-100 justify-content-evenly">
    {/*<button onClick={()=>logOut()}>Выйти</button>*/}

    <div className="custom-file flex-fill d-flex flex-column text-center justify-content-center border p-2">
      <h1>Редактировать профиль</h1>
      <input type="file" className="custom-file-input form-control mt-3" accept="image/*" id="customFile" />
      {/*<label className="custom-file-label" htmlFor="customFile">Choose file</label>*/}
      <button className="btn btn-success mt-3 px-5">Загрузить</button>
    </div>

    <div className="custom-file d-flex flex-fill flex-column text-center justify-content-center border p-2">
      <h1 className="md-5">Добавить друга</h1>
      <h3 className="mt-5">Добавить друга по ссылке</h3>
      <div className="input-group mt-3">       
        <input className="form-control" id="ulraddfriend" defaultValue="http://localhost/profile/dfgjhdfgdffdjgjkdf" readOnly={true} role="button" 
        onClick={()=>{let copyText = document.getElementById("ulraddfriend");copyText.select();document.execCommand("copy");}}title="Нажми, чтобы скопировать" />
        <span className="input-group-text" id="basic-addon2">URL</span>
        </div>
        <label htmlFor="ulraddfriend" className="form-label">Скопируйте и отправьте другу, чтобы добавить в друзья</label>
      <h3 className="mt-5">Добавить друга по коду</h3>
      <div className="input-group mt-3">      
      <input className="form-control" title="Нажми, чтобы скопировать" />
      <span className="input-group-text" id="basic-addon2">CODE</span>
      </div>
        <label htmlFor="ulraddfriend" className="form-label">Введите код друга, чтобы добавить его в друзья</label>
      <button className="btn btn-success px-5">Добавить</button>
      <h3 className="mt-5">Ваш код</h3>
      <div className="input-group mt-3">      
      <input className="form-control" id="codeaddfriend" defaultValue="123123123" readOnly={true} role="button" 
        onClick={()=>{let copyText = document.getElementById("codeaddfriend");copyText.select();document.execCommand("copy");}}title="Нажми, чтобы скопировать" />
        <span className="input-group-text" id="basic-addon2">CODE</span>
        </div>
      <label htmlFor="ulraddfriend" className="form-label">Скопируйте и отправьте другу, чтобы добавить в друзья</label>
    </div>

{/*    <div className="drag" id="drag"
     onDragEnter={()=>dropenter()} onDragOver={()=>dropenter()}
     onDragLeave={()=>dropleave()} onDrop="return dodrop(event);" >
     Drop-zone
    </div>*/}
    </div>
    );
})

export default Profile;