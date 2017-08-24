import {combineReducers} from 'redux'
import LoginReducer from './LoginReducer'
import MessagesReducer from './MessagesReducer'

export default combineReducers({
    login: LoginReducer,
    messages: MessagesReducer
})