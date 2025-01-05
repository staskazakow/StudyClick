let initial_state = {
    isAuth:false,
    login_active:true
}
const SET_AUTH = "SET_AUTH"
const SET_LOGIN_ACTIVE = "SET_LOGIN_ACTIVE"
const AppReducer = (state = initial_state,action) => {
    switch(action.type) {
        case SET_AUTH:
            return{
                ...state,
                isAuth:action.isAuth
            }
        case SET_LOGIN_ACTIVE:
            return{
                ...state,
                login_active:!state.login_active
            }
        default:
            return state
    }
}
export const setLoginActive = () => ({
    type:SET_LOGIN_ACTIVE
})
export const setAuth = (value) => ({
    type:SET_AUTH,
    isAuth:value
})
export default AppReducer