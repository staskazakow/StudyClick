import { getDialogs } from "../../API/api";

let initial_state = {
  dialogs_data: [
    { name: "Bilogia", id: 1,},
    { name: "russki", id: 2 },
    { name: "math", id: 3 },
    { name: "physique", id: 4},
  ],
  history_id: null,
  dialogs_history:[]
};
const SET_DIALOGS_HISTORY = "SET_DIALOGS_HISTORY"
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
    case SET_DIALOGS_HISTORY:
      return {
        ...state,
        dialogs_history:action.dialogs
      }
    default:
      return state;
  }
};
export const setDialogsHistory = (dialogs) => ({
  type: SET_DIALOGS_HISTORY,
  dialogs
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
export const getHistoryDialogs = (history_id) => async (dispatch) => {
  try {
    let res = await (await getDialogs(history_id)).data.session_ids
    setDialogsHistory(res)
  } catch (error) {
    console.log(error)
  }
}
export default DialogsReducer;
