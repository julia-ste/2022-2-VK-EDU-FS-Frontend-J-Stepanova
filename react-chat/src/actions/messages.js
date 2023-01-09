import axios from 'api/axios'
import {
    GET_CHAT_DETAIL_FAILURE,
    GET_CHAT_DETAIL_REQUEST,
    GET_CHAT_DETAIL_SUCCESS,
    GET_MESSAGES_FAILURE,
    GET_MESSAGES_REQUEST,
    GET_MESSAGES_SUCCESS,
    SEND_MESSAGE_FAILURE,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
} from 'constants/MessagesActionTypes'
import { getCurrentDateTime } from 'utils/time'

const getMessagesStarted = () => ({
    type: GET_MESSAGES_REQUEST,
})

const getMessagesSuccess = messages => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages,
})

const getMessagesFailure = message => ({
    type: GET_MESSAGES_FAILURE,
    payload: message,
})

export const getMessages = chatId => {
    return (dispatch, getState) => {
        dispatch(getMessagesStarted())

        const token = getState().auth.token

        axios
            .get(`/chats/${chatId}/messages/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => dispatch(getMessagesSuccess(response.data)))
            .catch(error => dispatch(getMessagesFailure(error)))
    }
}

const sendMessageStarted = () => ({
    type: SEND_MESSAGE_REQUEST,
})

const sendMessageSuccess = profile => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: profile,
})

const sendMessageFailure = message => ({
    type: SEND_MESSAGE_FAILURE,
    payload: message,
})

export const sendMessage = (chatId, text) => {
    return (dispatch, getState) => {
        dispatch(sendMessageStarted())

        const newMessage = {
            text: text,
            sentAt: getCurrentDateTime(),
        }

        const token = getState().auth.token

        axios
            .post(`/chats/${chatId}/messages/new/`, newMessage, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => dispatch(sendMessageSuccess(response.data)))
            .catch(error => dispatch(sendMessageFailure(error)))
    }
}

export const addMessage = newMessage => {
    return dispatch => {
        dispatch(addMessage(newMessage))
    }
}

const getChatDetailStarted = () => ({
    type: GET_CHAT_DETAIL_REQUEST,
})

const getChatDetailSuccess = chat => ({
    type: GET_CHAT_DETAIL_SUCCESS,
    payload: chat,
})

const getChatDetailFailure = message => ({
    type: GET_CHAT_DETAIL_FAILURE,
    payload: message,
})

export const getChatDetail = chatId => {
    return (dispatch, getState) => {
        dispatch(getChatDetailStarted())

        const token = getState().auth.token

        axios
            .get(`/chats/${chatId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => dispatch(getChatDetailSuccess(response.data)))
            .catch(error => dispatch(getChatDetailFailure(error)))
    }
}