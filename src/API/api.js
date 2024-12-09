import axios from "axios";

const api_obj = axios.create({
    baseURL: "https://npnk1b3k-8000.euw.devtunnels.ms/api/",
    withCredentials:true,
})
export const getFields = () => {
    return api_obj.get("fields/")
}
export const postMessage = (message,history_id,session_id,study_field_id) => {
    return api_obj.post("chat/",{"message":message,"history_id":history_id,"session_id":session_id,"study_field_id":study_field_id})
}
export const getChat = (session_id) => {
    return api_obj.get("chat/",{params:{
        session_id
    }})
}
export const getDialogs = (history_id) => {
    return api_obj.get("api/chats",{params:{history_id}})
}