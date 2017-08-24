import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import { AsyncStorage } from 'react-native'
import { reactReduxFirebase } from 'react-redux-firebase'

const logger = createLogger()

const fbConfig = {
    apiKey: "AIzaSyAhe3kiARpSZJi6oDY9WUteUqVSZkAaJRk",
    authDomain: "discoverya-cf33b.firebaseapp.com",
    databaseURL: "https://discoverya-cf33b.firebaseio.com",
    projectId: "discoverya-cf33b",
    storageBucket: "",
    messagingSenderId: "1086904255073"
}
// const createStoreWithMiddleware = compose(
//     reactReduxFirebase(fbConfig,
//       {
//         userProfile: 'users',
//         enableLogging: false,
//         ReactNative: { AsyncStorage },
//       }
//     )
//   )(createStore)
//   const store = createStoreWithMiddleware(rootReducer)


export default function configureStore(initialState) {
    return createStore (
        rootReducer,
        initialState, 
        applyMiddleware(thunk, logger)
    )
}