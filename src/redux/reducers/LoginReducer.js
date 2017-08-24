import { LOGIN, GET_MESSAGES_FAILURE, GET_MESSAGES_REQUESTED, GET_MESSAGES_SUCCESS} from '../actions/actions'

export default function LoginReducer(state = {messages: {}, isLoading:false, error: none}) {
    switch(action.type) {
        case LOGIN: 
        case GET_MESSAGES_REQUESTED:
            return {...state, isLoading: true}
        case GET_MESSAGES_FAILURE: 
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                messages: action.payload
            }
    }
}