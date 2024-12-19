import React from "react";
import s from "./Prompt.module.css"
const Prompt = (props) => {
    const sendMessage = (event) => {
        props.createMessage(
        props.item.example,
          props.historyId,
          props.session_id,
          props.study_field_id
        );  
  }
    return(
        <div className={s.prompt_block}>
        <div className={s.prompt_item} onClick={sendMessage}>{props.item.example}</div>
        </div>
    )
}
export default Prompt