import { LOGIN } from '../actions/actions'

export default function LoginReducer(state = {messages: {}, isLoading:false, error: none}) {
    switch(action.type) {
        case LOGIN: 
            return {
                ...state,
                isLoading: false,
                messages: action.payload
            }
    }
}