import { getFields } from "../../API/api"

const initial_state = {
    learn_array:[],
    current_field:{id:2,name:"",prompt:""},
    isFetching:false,
}
const SET_FIELD_ID = "SET_FIELD_ID"
const GET_LEARN_ITEMS = "GET_LEARN_ITEMS"
const LearnReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_LEARN_ITEMS:
            return {...state, learn_array:action.items}
        case SET_FIELD_ID:
            return {...state, current_field:{id:action.id,name:action.name,prompt:action.prompt}}
        default:
            return state
    }
}
export const getLearn = (arr) => ({
    type: GET_LEARN_ITEMS,
    items: arr
})
export const setFieldId = (id,name,prompt) => ({
    type:SET_FIELD_ID,
    id,
    name,
    prompt
})
export const getCurrentFields = () =>  async (dispatch) => {
    let res = await getFields()
    dispatch(getLearn(res.data))
}


export default LearnReducer