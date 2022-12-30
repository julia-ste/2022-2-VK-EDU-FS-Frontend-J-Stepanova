import {
    GET_TRANSLATION_FAILURE,
    GET_TRANSLATION_REQUEST,
    GET_TRANSLATION_SUCCESS,
} from 'constants/ActionTypes'

const initialState = {
    loading: false,
    text: '',
    translation: '',
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSLATION_REQUEST:
            return {
                ...state,
                loading: true,
                text: action.payload,
            }
        case GET_TRANSLATION_SUCCESS:
            return {
                ...state,
                loading: false,
                translation: action.payload,
            }
        case GET_TRANSLATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer