import { createStore, applyMiddleWare } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    return createStore (
        rootReducer,
        initialState, 
        applyMiddleWare(thunk, logger)
    )
}