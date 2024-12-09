import React from "react";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import {
  createMessage,
  getHistoryChat,
} from "../../redux/reducers/MessageReducer";
const DialogContainer = (props) => {
  return (
    <Dialog
      message={props.message}
      session_id={props.session_id}
      createMessage={props.createMessage}
      getHistoryChat={props.getHistoryChat}
      study_field_id = {props.study_field_id}
      historyId = {props.historyId}
    />
  );
};
const mapStateToProps = (state) => ({
  message: state.messages.messages_data.message,
  session_id: state.messages.messages_data.session_id,
  study_field_id: state.learn.current_field.id,
  historyId:state.dialogs.history_id
});
export default connect(mapStateToProps, { createMessage, getHistoryChat })(
  DialogContainer
);
