import React, { useEffect, useState } from "react";
import s from "./Dialog.module.css";
import Message from "./Message/Message";
import Prompt from "../Aside_propmpt/Prompt";
const Dialog = (props) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
   props.getHistoryChat(props.session_id);
    debugger
  }, [props.session_id,props.active]);
  useEffect(() => {
    props.PromptThunk(props.study_field_id);
  }, []);
  const sendMessage = (event) => {
    props.createMessage(
      message,
      props.historyId,
      props.session_id,
      props.study_field_id
    );
    setMessage("");
  };
  return (
    <div className={s.dialog}>
      <div className={s.dialog_window}>
        <div className={s.user_window}>
          {
          props.message.length > 1 &&
            props.message.map((e) => e.message != "" && <Message item={e} />)}
        </div>
        <div className={s.prompt}>
          <div className={s.prompt_block}>
            <span className={s.prompt_name}>Примеры запросов</span>

            {props.prompt.map((e) => (
              <Prompt
                study_field_id={props.study_field_id}
                session_id={props.session_id}
                historyId={props.historyId}
                createMessage={props.createMessage}
                item={e}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={s.input_wrapper}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={s.dialog_input}
          type="text"
        />
        <button className={s.input_btn} onClick={sendMessage}>
          Отправить
        </button>
      </div>
    </div>
  );
};
export default Dialog;
