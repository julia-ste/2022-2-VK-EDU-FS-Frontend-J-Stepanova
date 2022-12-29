import {
    GET_LANGUAGES_FAILURE,
    GET_LANGUAGES_REQUEST,
    GET_LANGUAGES_SUCCESS,
} from '../constants/ActionTypes'

const getLanguagesStarted = () => ({
    type: GET_LANGUAGES_REQUEST,
})

const getLanguagesSuccess = languages => ({
    type: GET_LANGUAGES_SUCCESS,
    payload: languages,
})

const getLanguagesFailure = message => ({
    type: GET_LANGUAGES_FAILURE,
    payload: message,
})

export const getLanguages = () => {
    return (dispatch, getState) => {
        dispatch(getLanguagesStarted())

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':
                    'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground',
            },
        }

        fetch(
            'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0',
            options,
        )
            .then(response => response.json())
            .then(res => dispatch(getLanguagesSuccess(res)))
            .catch(err => dispatch(getLanguagesFailure(err)))
    }
}