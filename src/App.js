import React, { useEffect } from "react"
import s from "./App.module.css"
import Aside from "./component/Aside/Aside";
import LearnContainer from "./component/Learn/LearnContainer";
import { v4 as uuidv4 } from 'uuid';
import AsideContainer from "./component/Aside/AsideContainer";
import { Route, Routes } from "react-router-dom";
import DialogContainer from "./component/Dialog/DialogContainer";
import { getDialogsHistoryChat, setHistory_id } from "./redux/reducers/DIalogsReducer";
import { connect } from "react-redux";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import LoginContainer from "./component/Login/LoginContainer";
import { setAuth } from "./redux/reducers/AppReducer";
function App(props) {
   useEffect(() => {
    let history_id = localStorage.getItem('history_id');
    let isAuth = localStorage.getItem("isAuth")
    if(!isAuth) {
      localStorage.setItem("isAuth","false")
      props.setAuth(false)
    }else{
      if (isAuth == "true")
        props.setAuth(true)
      if (isAuth == "false")
        props.setAuth(false)
    }
      if (!history_id){
        let history_id = uuidv4(); // функция для генерации UUID
        localStorage.setItem('history_id', history_id);
      }
      props.getDialogsHistoryChat(history_id)
      props.setHistory_id(history_id)
   },[])
  return (
    <div className={s.App}>
      {props.isAuth ? <AsideContainer /> : <LoginContainer/>}
      <Routes>
        {/* <Route path="/login" element={<LoginContainer/>}/> */}
      <Route path="/dialog/:id?" element={<DialogContainer/>}/>
      <Route path="/fields" element={<LearnContainer/>}/>
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => ({
  historyId:state.dialogs.history_id,
  isAuth:state.app.isAuth
})
export default connect(mapStateToProps,{setHistory_id,getDialogsHistoryChat,setAuth})(App);
