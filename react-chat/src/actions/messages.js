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

import { getCurrentDateTime } from '../utils/time'

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
    return dispatch => {
        dispatch(getMessagesStarted())

        axios
            .get(`/chats/${chatId}/messages/`)
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
    return dispatch => {
        dispatch(sendMessageStarted())

        const newMessage = {
            text: text,
            sentAt: getCurrentDateTime(),
        }

        axios
            .post(`/chats/${chatId}/messages/new/`, newMessage)
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
    return dispatch => {
        dispatch(getChatDetailStarted())

        axios
            .get(`/chats/${chatId}/`)
            .then(response => dispatch(getChatDetailSuccess(response.data)))
            .catch(error => dispatch(getChatDetailFailure(error)))
    }
}