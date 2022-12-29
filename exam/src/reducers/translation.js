import {
    GET_TRANSLATION_FAILURE,
    GET_TRANSLATION_REQUEST,
    GET_TRANSLATION_SUCCESS,
} from '../constants/ActionTypes'

const initialState = {
    loading: false,
    text: '',
    translation: '',
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSLATION_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_TRANSLATION_SUCCESS:
            return {
                ...state,
                loading: false,
                translation: action.payload,
                error: '',
            }
        case GET_TRANSLATION_FAILURE:
            return {
                loading: false,
                translation: state.translation,
                error: action.payload,
            }
        default:
            return state
    }
}