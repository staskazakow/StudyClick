import { thunk } from "redux-thunk";
import LearnReducer from  "./reducers/LearnReducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import DialogsReducer from "./reducers/DIalogsReducer";
import MessageReducer from "./reducers/MessageReducer";
import PromptReducer from "./reducers/PromptReducer";
import AppReducer from "./reducers/AppReducer";

const reducers = combineReducers({
    learn: LearnReducer,
    dialogs:DialogsReducer,
    messages:MessageReducer,
    prompt: PromptReducer,
    app:AppReducer
})
const store = legacy_createStore(reducers,applyMiddleware(thunk))
export default store