import { thunk } from "redux-thunk";
import LearnReducer from  "./reducers/LearnReducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import DialogsReducer from "./reducers/DIalogsReducer";
import MessageReducer from "./reducers/MessageReducer";

const reducers = combineReducers({
    learn: LearnReducer,
    dialogs:DialogsReducer,
    messages:MessageReducer
})
const store = legacy_createStore(reducers,applyMiddleware(thunk))
export default store