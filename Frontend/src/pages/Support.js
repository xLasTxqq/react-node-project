import React from 'react'
import {Context} from '../index.js'
import {NavLink} from 'react-router-dom'
import {SUPPORT_ROUTE,AUT_ROUTE,REG_ROUTE,QUESTIONS_DB_ID,QUESTIONS_DB_QUESTION,QUESTIONS_DB_ANSWER,CATEGORIES_DB_ID,CATEGORIES_DB_CATEGORY} from '../Const.js'
import {newmessage/*,AddCategory,DeleteCategory,UpdateCategory*/,Categories,Questions,AllMessagesUser} from '../http/supportAPI.js'

const Support=()=>{
  const {user} = React.useContext(Context)
  const [Category,SetCategory] = React.useState('')
  const [Message,SetMessage] = React.useState('Здравствуйте, ')
  const [currentCutegories,setCurrentCutegories]=React.useState(null)
  const [questionsAndAnswers,setQuestionsAndAnswers]=React.useState(null)
  const [allMessages,setAllMessages]=React.useState(null)



    // const check = async(event) => {
    //   event.preventDefault();
    //   try{
    //     const Add = await AddCategory('NewCategory')
    //     console.log(Add)
    //     const Delete = await DeleteCategory('NewCategory')
    //     console.log(Delete)
    //     const Update = await UpdateCategory('NewCategory','NewCategory')
    //     console.log(Update)
        
    //     // console.log(All)
    //     // setCurrentCutegories(All)
    //     // console.log(Object.keys(currentCutegories))
    //     // console.log(Object.getOwnPropertyNames(currentCutegories))
    //     // Object.entries(currentCutegories).map((key)=>console.log(key))
        

    //     // console.log(currentCutegories)
    //     // console.log(questionsAndAnswers)
    //   // Object.values(questionsAndAnswers).map((key)=>
    //   //   console.log(key)
    //   //   )
    //   // questionsAndAnswers.map((key)=>
    //   //   console.log(key)
    //   //   )
    //     // questionsAndAnswers.map((Cat,Key)=>{
    //     //   console.log(Cat)
    //     //   console.log(Key)
    //     // })
         
    //     // return false;
    //   }
    //   catch(e){
    //     console.log(e)
    //   }
    // }

      React.useEffect(()=>{
      async function All(){
        try{
          const All = await Categories()      
          Array.isArray(All) ? 
          setCurrentCutegories(All) :
          Object.keys(All).length ?
          setCurrentCutegories([All]) :
          setCurrentCutegories(null)
        }
        catch(e){
          console.log(e)
        }
      }All()

      async function QuestionsAndAnswers(){
        try{
          const questions = await Questions()  
          Array.isArray(questions) ? 
          setQuestionsAndAnswers(questions) :
          Object.keys(questions).length ?
          setQuestionsAndAnswers([questions]) :
          setQuestionsAndAnswers(null)
        }
        catch(e){
          console.log(e)
        }
      }QuestionsAndAnswers()

      async function AllMessages(){
        try{
          const messages = await AllMessagesUser(123)
          Array.isArray(messages) ? 
          setAllMessages(messages) :
          Object.keys(messages).length ?
          setAllMessages([messages]) :
          setAllMessages(null)
        }
        catch(e){
          console.log(e)
        }
      }AllMessages()
      },[])

    const handleSubmit = async(event) => {
      let validation=false
      Category==='' ? alert('Выберите категорию'):Message.trim()==='Здравствуйте,'||Message.split(' ').length<3 ?alert('Опишите вашу проблему'):validation=true
      if(validation)
      try{
        const newmes=await newmessage(Category,Message)
        console.log(newmes)
      }
      catch(e){
        console.log(e)
      }
    // console.log(event)
    // alert(Category+Message)
    // event.preventDefault()
    }

  return (
    
    <div className="bg-light text-center d-flex flex-column justify-content-center min-vh-100 my-5 pady">
        <div className="d-flex flex-column align-items-center mb-5">
                
                <h3>Часто задаваемые вопросы</h3>
                {!questionsAndAnswers && <div className="spinner-border" role="status" />}

                {                  
                  questionsAndAnswers && questionsAndAnswers.map((keys)=>
                    <div key={keys[QUESTIONS_DB_ID]} className="d-flex flex-column align-items-center mb-1">
                      <p className="text-info" role="button" data-bs-toggle="collapse" data-bs-target={'#id'+keys[QUESTIONS_DB_ID]} aria-expanded="false" aria-controls={'id'+keys[QUESTIONS_DB_ID]}>
                        {'— '+keys[QUESTIONS_DB_QUESTION]}                  
                      </p>
                    <div className="collapse text-dark text-wrap" id={'id'+keys[QUESTIONS_DB_ID]}>
                        <div className="card card-body">
                          {keys[QUESTIONS_DB_ANSWER]}
                        </div>
                      </div>          
                    </div>
                  )                        
                }
            
        </div>

        {user.isAuth && allMessages &&
        <div className="d-flex flex-column mb-5">
          <h3>Ваши сообщения в тех-поддержку</h3>
          {
            allMessages && allMessages.map((keys)=>
            <NavLink className="btn btn-outline-secondary form-group container-sm d-flex flex-column my-1" role="button" to={SUPPORT_ROUTE+'/45645'} key={keys['_id']}>
                <label htmlFor={keys['_id']} role="button">{'Вопрос был создан: '+keys['datetime']+', Категория: '+keys['category']}</label>
                <input className="form-control bg-muted fw-bold text-wrap" role="button" id={keys['_id']} type="text" value={keys['firstmessage']} disabled readOnly />
                <label htmlFor={keys['_id']} role="button">Последнее сообщение было от {keys['lastuser']===user.id ? 'вас':<span className="text-info">поддержки</span>}</label>
                <label htmlFor={keys['_id']} role="button">{'Отправленно в '+keys['datetime_lastmessage']}</label>
            </NavLink>            
            )
          }       
        </div>
        }

        {user.isAuth ?

        <div className="d-flex flex-column justify-content-sm-center align-items-center text-center">
            <h3 className="text-center">Тех-поддержка</h3>
               <div className="form-group container-sm">
               <label htmlFor="form_category">Категория *</label>
               <select value={Category} onChange={e=>SetCategory(e.target.value)} className="form-select" role="button" id="form_category">
                <option value="" disabled hidden>Выберите категорию</option>
                {
                  currentCutegories && currentCutegories.map((keys)=>
                  <option key={keys[CATEGORIES_DB_ID]} value={keys[CATEGORIES_DB_CATEGORY]}>{keys[CATEGORIES_DB_CATEGORY]}</option>
                  )
                }
              </select>
              </div>             
                  
             <div className="form-group container-sm mt-3">
               <label htmlFor="form_message">Опишите вашу проблему *</label>
               <textarea value={Message} onChange={e=>SetMessage(e.target.value)} id="form_message" name="message" className="form-control" placeholder="Введите ваше сообщение *" rows="4" />
               <div className="help-block with-errors"></div>
             </div>

             <div className="form-group container-sm mt-3">
             <input onClick={e=>handleSubmit(e)} type="submit" className="btn btn-success btn-send" value="Отправить сообщение" />
             {/*<form onSubmit={e=>check(e)}>
             <input type="text" />
             <input type="submit" className="btn btn-success btn-send" value="Проверка" /></form>*/}
             </div>
        </div> 
        :
        <div className="d-flex flex-column align-items-center">
          <h3>Тех-поддержка</h3>
          <h3>Для того, чтобы задать вопрос в службу технической поддержки, пожалуйста, выполните <NavLink to={AUT_ROUTE}>вход</NavLink> или <NavLink to={REG_ROUTE}>зарегистрируйтесь</NavLink>.</h3>
        </div>
        }
     </div>

    );
}

export default Support;