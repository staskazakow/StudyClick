import React, { useEffect } from "react";
import s from './Aside.module.css'
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import DialogsContainer from "../Dialogs/DialogsContainer";
const Aside = (props) => {
  const addChat = () => {
    const session_id  = uuidv4();
    props.AddDialogs("New chat", session_id)
  }
    return(
      <aside>
     <div className={s.side_board}>
    <div className={s.aside}>
      <div className={s.logo_block}>
      <NavLink to={"/"}>
      <img className={s.logo} src={"data:image/png;base64,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"}/>
      </NavLink>
      </div>
    <div className={s.dialogs}>
    <span className={s.dialogs_name}>
      History
      </span>
    </div>
    </div>
      <div className={s.dialogs_window}>
      {
        props.dialogs.length > 1 &&
      props.dialogs.slice(1).map(e => <DialogsContainer  item = {e}/>)
      }
      <button className={s.add_btn} onClick={() => addChat()}>Add Chat</button>
      </div>
    <div className={s.registration}>
      <div className={s.btn_block}>
    <button className={s.reg_btn}>Log In</button>
    <button className={s.reg_btn}>Registration</button>
      </div>
    </div>
     </div>
     <div>

     </div>
    </aside>
    )
}
export default Aside