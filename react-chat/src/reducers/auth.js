import {
    LOGIN_GOOGLE_FAILURE,
    LOGIN_GOOGLE_REQUEST,
    LOGIN_GOOGLE_SUCCESS,
    LOGOUT,
    SET_AUTH_DATA,
} from 'constants/AuthActionTypes'

const initialState = {
    loading: false,
    token: null,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            console.log(action.payload)
            return {
                ...state,
                token: action.payload.token,
            }
        case LOGIN_GOOGLE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_GOOGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
                error: '',
            }
        case LOGIN_GOOGLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                token: null,
                error: '',
            }
        default:
            return state
    }
}

export default reducer