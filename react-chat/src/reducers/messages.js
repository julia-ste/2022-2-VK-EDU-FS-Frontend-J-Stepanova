import {
    ADD_MESSAGE,
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

const initialState = {
    loadingMessages: false,
    loadingChatDetail: false,
    sendingMessage: false,
    chat: {},
    messages: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_REQUEST:
            return {
                ...state,
                loadingMessages: true,
            }
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                loadingMessages: false,
                messages: [...action.payload],
                error: '',
            }
        case GET_MESSAGES_FAILURE:
            return {
                ...state,
                loadingMessages: false,
                error: action.payload,
            }
        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                sendingMessage: true,
            }
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                sendingMessage: false,
                messages: [...state.messages, action.payload],
                error: '',
            }
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                sendingMessage: false,
                error: action.payload,
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }
        case GET_CHAT_DETAIL_REQUEST:
            return {
                ...state,
                loadingChatDetail: true,
            }
        case GET_CHAT_DETAIL_SUCCESS:
            return {
                ...state,
                loadingChatDetail: false,
                chat: action.payload,
                error: '',
            }
        case GET_CHAT_DETAIL_FAILURE:
            return {
                ...state,
                loadingChatDetail: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer