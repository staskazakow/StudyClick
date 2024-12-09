import React, { useEffect, useState } from "react";
import s from "./Dialog.module.css"
import Message from "./Message/Message";
const Dialog = (props) => {
    const [message,setMessage] = useState("")
    useEffect(() => {
        props.getHistoryChat(props.session_id)

    },[props.session_id])
    return(
        <div className={s.dialog}>
            <div className={s.user_window}>
                {props.message.length > 1  && props.message.map(e => e.message != "" &&  <Message item = {e} /> )}
           
            </div>
            <div className={s.input_wrapper}>
            <input value={message} onChange={e => setMessage(e.target.value)} className={s.dialog_input} type="text" />
            <button className={s.input_btn} onClick={() =>{ props.createMessage(message,props.historyId,props.session_id,props.study_field_id) 
                setMessage("")}}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialog