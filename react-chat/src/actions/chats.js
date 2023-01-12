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
    return dispatch => {
        dispatch(getChatsStarted())

        axios
            .get('/chats/')
            .then(response => dispatch(getChatsSuccess(response.data)))
            .catch(error => dispatch(getChatsFailure(error)))
    }
}