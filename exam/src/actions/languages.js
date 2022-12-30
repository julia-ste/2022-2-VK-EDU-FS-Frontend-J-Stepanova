import {
    GET_LANGUAGES_FAILURE,
    GET_LANGUAGES_REQUEST,
    GET_LANGUAGES_SUCCESS,
} from 'constants/ActionTypes'

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

export const getLanguages = () => async dispatch => {
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

    return fetch(
        'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0',
        options,
    )
        .then(response => response.json())
        .then(res => {
            const firstRes = res.translation
            const resArray = []
            Object.keys(firstRes)
                .sort((key1, key2) =>
                    firstRes[key1].name.localeCompare(firstRes[key2].name),
                )
                .forEach(key => {
                    resArray.push({ value: key, label: firstRes[key].name })
                })
            dispatch(getLanguagesSuccess(resArray))
            return resArray
        })
        .catch(err => dispatch(getLanguagesFailure(err)))
}