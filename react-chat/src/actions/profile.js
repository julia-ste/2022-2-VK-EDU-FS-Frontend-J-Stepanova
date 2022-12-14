import axios from 'api/axios'
import {
    GET_PROFILE_FAILURE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_REQUESTED,
    UPDATE_PROFILE_SUCCESS,
} from 'constants/ProfileActionTypes'

const getProfileStarted = () => ({
    type: GET_PROFILE_REQUEST,
})

const getProfileSuccess = profile => ({
    type: GET_PROFILE_SUCCESS,
    payload: profile,
})

const getProfileFailure = message => ({
    type: GET_PROFILE_FAILURE,
    payload: message,
})

export const getProfile = () => {
    return (dispatch, getState) => {
        dispatch(getProfileStarted())

        const userId = getState().auth.userId
        const token = getState().auth.token

        axios
            .get(`/users/${userId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => dispatch(getProfileSuccess(response.data)))
            .catch(error => dispatch(getProfileFailure(error)))
    }
}

const updateProfileRequested = flag => ({
    type: UPDATE_PROFILE_REQUESTED,
    payload: flag,
})

export const setUpdateProfileRequested = flag => {
    return dispatch => {
        dispatch(updateProfileRequested(flag))
    }
}

const updateProfileStarted = () => ({
    type: UPDATE_PROFILE_REQUEST,
})

const updateProfileSuccess = profile => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: profile,
})

const updateProfileFailure = message => ({
    type: UPDATE_PROFILE_FAILURE,
    payload: message,
})

export const updateProfile = data => {
    return (dispatch, getState) => {
        dispatch(updateProfileStarted())

        const userId = getState().auth.userId
        const token = getState().auth.token

        axios
            .put(`/users/${userId}/`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => dispatch(updateProfileSuccess(response.data)))
            .catch(error => dispatch(updateProfileFailure(error)))
    }
}