import { getChat, postMessage } from "../../API/api";

const initial_state = {
  messages_data: {
    session_id: 1,
    title: null,
    active:false,
    message: [{
      role:"",
      message: "",
      created_at: 0
    },],
  },
};
const ADD_MESSAGE = "ADD_MESSAGE"
const ADD_CHAT = "ADD_CHAT";
const SET_ID = "SET_ID"
const CLEAR_CHAT = "CLEAR_CHAT"
const MessageReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        messages_data: {
            session_id: action.session_id,
            title: action.title,
            active:true,
            message: action.message,
          },
      };
    }
    case ADD_MESSAGE:{
        return {
                ...state,
                messages_data: {...state.messages_data,message: [...state.messages_data.message, {role:action.role,message:action.message}]}
        }
    }
    case SET_ID: {
        return {
            ...state,
            messages_data: {...state.messages_data,session_id:action.session_id}
        }
    }
    case CLEAR_CHAT: {
      return{
        ...state,
        messages_data:  {...state.messages_data,message: []}
      }
    }
    default:
      return state;
  }
};
export const setId = (session_id) => ({
    type:SET_ID,
    session_id
})
export const Clear_chat = () => ({
  type:CLEAR_CHAT
})
export const addMessage = (message,role) => ({
    type:ADD_MESSAGE,
    message,
    role
})
export const addChat = (title, session_id, message) => ({
  type: ADD_CHAT,
  title,
  session_id,
  message,
});
export const createMessage = (message,history_id,session_id,study_field_id) => async (dispatch) => {
  try {
    dispatch(addMessage(message,"user"))
    let res = await postMessage(message,history_id,session_id,study_field_id)
  dispatch(addMessage(res.data.response,"bot"))
  } catch (error) {
    dispatch(addMessage(message,"user"))
    dispatch(addMessage("bot error","bot"))
  }
  
}
export const getHistoryChat = (session_id) => async (dispatch) =>{
  try {
    let res = await getChat(session_id)
    dispatch(addChat(res.data.chat_title,session_id,res.data.messages))
    
  } catch (error) {
    console.log(error)
    dispatch(addChat("",session_id,[]))
  }
}
export default MessageReducer