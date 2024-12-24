import { deleteChat, getChat, getDialogs } from "../../API/api";
import { Clear_chat } from "./MessageReducer";

let initial_state = {
  dialogs_data: [
    { name: "main chat", id: 1},
  ],
  history_id: null,
  dialogs_history:[]
};
const DELETE_CHAT = "DELETE_CHAT"
const SET_HISTORY_ID = "SET_HISTORY_ID"
const ADD_DIALOGS = "ADD_DIALOGS";
const DialogsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_DIALOGS: {
      return {
        ...state,
        dialogs_data: [
          ...state.dialogs_data,
          { name: action.name, id: action.id },
        ],
      };
    }
    case SET_HISTORY_ID:
      return {
        ...state,
        history_id: action.history_id
      }
    case DELETE_CHAT:
      return {
        ...state,
        dialogs_data: state.dialogs_data.filter(e => e.id != action.id)
      }

    default:
      return state;
  }
};
export const delDialog = (id) => ({
  type:DELETE_CHAT,
  id
})
export const setHistory_id = (history_id) => ({
  type: SET_HISTORY_ID,
  history_id
})
export const AddDialogs = (name, id) => ({
  type: ADD_DIALOGS,
  name,
  id,
});
export const deleteDialog = (id) => (dispatch) => {
  try {
    deleteChat(id)
    dispatch(Clear_chat())
    dispatch(delDialog(id))
  } catch (error) {
    console.log(error)
  }
}
export const getHistoryDialogs = (history_id) => async (dispatch) => {
  try {
    let res = await (await getDialogs(history_id)).data.session_ids
    res.map(async e => {
      let response = await getChat(e)
      dispatch(AddDialogs(response.data.chat_title,e))
    })
  } catch (error) {
    console.log(error)
  }
}
export default DialogsReducer;
