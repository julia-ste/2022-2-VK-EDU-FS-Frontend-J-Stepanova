import {
    GET_PROFILE_FAILURE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_REQUESTED,
    UPDATE_PROFILE_SUCCESS,
} from 'constants/ProfileActionTypes'

const initialState = {
    loading: false,
    updating: false,
    updateRequested: false,
    profile: {},
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload,
                error: '',
            }
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_PROFILE_REQUESTED:
            return {
                ...state,
                updateRequested: action.payload,
            }
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                updating: true,
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                updating: false,
                profile: action.payload,
                error: '',
            }
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                updating: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer