export const LOGIN = 'LOGIN'
export const GET_MESSAGES_REQUESTED = 'GET_MESSAGE_REQUESTED'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGE_SUCCES'
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE'

export function login(email, password) {
    return {
        type:LOGIN,
        payload: {email, password}
    } 
}

export function getMessages() {
    return (dispatch) => {

        let messageResponse = {
            data: {
                results: [
                    {
                        id: 1,
                        messageTitle:'Road to Damascus',
                        messageURL: 'https://google.com',
                        thumbnail: 'https://unsplash.com/'
                    
                    }
                ]
            }
        }

        dispatch(getMessagesRequested())
        dispatch(getMessagesSuccess(messageResponse.data.results))
    }
}

export function getMessagesRequested() {
    return {
        type: GET_MESSAGES_REQUESTED
    }
}
export function getMessagesSuccess(messages) {
    return {
        type: GET_MESSAGES_SUCCESS,
        payload: messages
    }
}

