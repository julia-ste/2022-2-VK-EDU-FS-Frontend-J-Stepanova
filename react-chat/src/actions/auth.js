import axios from 'api/axios'
import {
    LOGIN_GOOGLE_FAILURE,
    LOGIN_GOOGLE_REQUEST,
    LOGIN_GOOGLE_SUCCESS,
    LOGOUT,
    SET_AUTH_DATA,
} from 'constants/AuthActionTypes'

const key = 'user'

const setAuthData = data => ({
    type: SET_AUTH_DATA,
    payload: data,
})

export const checkAuthorized = () => {
    return dispatch => {
        if (typeof window === 'undefined') return

        const value = window.localStorage.getItem(key)
        if (value) {
            const data = JSON.parse(value)
            dispatch(setAuthData(data))
        }
    }
}

const loginGoogleStarted = () => ({
    type: LOGIN_GOOGLE_REQUEST,
})

const loginGoogleSuccess = token => ({
    type: LOGIN_GOOGLE_SUCCESS,
    payload: token,
})

const loginGoogleFailure = message => ({
    type: LOGIN_GOOGLE_FAILURE,
    payload: message,
})

export const loginGoogle = accessToken => {
    return dispatch => {
        dispatch(loginGoogleStarted())

        axios
            .post('/api/social-auth/', {
                provider: 'google-oauth2',
                access_token: accessToken,
            })
            .then(response => {
                const token = response.data.token
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(key, JSON.stringify({ token }))
                }
                dispatch(loginGoogleSuccess(token))
            })
            .catch(error => dispatch(loginGoogleFailure(error)))
    }
}

const logoutRequested = () => ({
    type: LOGOUT,
})

export const logout = () => {
    if (typeof window !== 'undefined' && localStorage.getItem(key)) {
        localStorage.removeItem(key)
    }
    return dispatch => {
        dispatch(logoutRequested())
    }
}