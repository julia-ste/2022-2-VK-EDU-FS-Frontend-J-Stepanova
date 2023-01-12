import {
    GET_CHATS_FAILURE,
    GET_CHATS_REQUEST,
    GET_CHATS_SUCCESS,
} from 'constants/ChatsActionTypes'

const initialState = {
    loading: false,
    chats: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_CHATS_SUCCESS:
            return {
                loading: false,
                chats: action.payload,
                error: '',
            }
        case GET_CHATS_FAILURE:
            return {
                loading: false,
                chats: state.chats,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer