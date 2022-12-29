import {
    GET_TRANSLATION_FAILURE,
    GET_TRANSLATION_REQUEST,
    GET_TRANSLATION_SUCCESS,
} from '../constants/ActionTypes'

const getTranslationStarted = text => ({
    type: GET_TRANSLATION_REQUEST,
    payload: text,
})

const getTranslationSuccess = translation => ({
    type: GET_TRANSLATION_SUCCESS,
    payload: translation,
})

const getTranslationFailure = message => ({
    type: GET_TRANSLATION_FAILURE,
    payload: message,
})

export const getTranslation = (text, toLanguage) => {
    return (dispatch, getState) => {
        dispatch(getTranslationStarted(text))

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key':
                    'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
            },
            body: `[{"Text":"${text}"}]`,
        }

        fetch(
            `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${toLanguage}&api-version=3.0&profanityAction=NoAction&textType=plain`,
            options,
        )
            .then(response => response.json())
            .then(res => dispatch(getTranslationSuccess(res)))
            .catch(err => dispatch(getTranslationFailure(err)))
    }
}