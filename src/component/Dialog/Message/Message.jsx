import React from "react";
import s from './Message.module.css'
const Message = (props) => {
    return(
        <div className={s.ai}>
            <div className={s.ai_ava_block}>
                <div className={s.ai_ava}></div>
                <div>{props.item.role}</div>
            </div>
            <div className={s.ai_text_block}>
                <div>{props.item.message}</div>
            </div>
            </div>
    )
}
export default Message