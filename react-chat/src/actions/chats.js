import axios from 'api/axios'
import {
    GET_CHATS_FAILURE,
    GET_CHATS_REQUEST,
    GET_CHATS_SUCCESS,
} from 'constants/ChatsActionTypes'

const getChatsStarted = () => ({
    type: GET_CHATS_REQUEST,
})

const getChatsSuccess = chats => ({
    type: GET_CHATS_SUCCESS,
    payload: chats,
})

const getChatsFailure = message => ({
    type: GET_CHATS_FAILURE,
    payload: message,
})

export const getChats = () => {
    return (dispatch, getState) => {
        dispatch(getChatsStarted())

        const token = getState().auth.token

        axios
            .get('/chats/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => dispatch(getChatsSuccess(response.data)))
            .catch(error => dispatch(getChatsFailure(error)))
    }
}