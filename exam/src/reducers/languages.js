import {
    GET_LANGUAGES_FAILURE,
    GET_LANGUAGES_REQUEST,
    GET_LANGUAGES_SUCCESS,
} from 'constants/ActionTypes'

const initialState = {
    loading: false,
    languages: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LANGUAGES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_LANGUAGES_SUCCESS:
            return {
                loading: false,
                languages: action.payload,
                error: '',
            }
        case GET_LANGUAGES_FAILURE:
            return {
                loading: false,
                languages: state.languages,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer