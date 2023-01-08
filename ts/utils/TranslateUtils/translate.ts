import CacheUtils from '../CacheUtils'
import * as T from './types'
import { API_KEY } from './secrets'

const BASE_URL = 'https://microsoft-translator-text.p.rapidapi.com/translate'

async function getTranslation(text: string, to: string, from?: string) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
        },
        body: JSON.stringify([{ Text: text }]),
    }

    const params: T.URLParams = {
        to: to,
        'api-version': '3.0',
        profanityAction: 'NoAction',
        textType: 'plain',
        ...(from && { from: from }),
    }
    const urlParams = new URLSearchParams(params).toString()

    return fetch(`${BASE_URL}?${urlParams}`, options)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then((data: T.IApiResponseFailure) => {
                    throw new Error(data.error.message)
                })
            }
        })
        .then((data: T.IApiResponseSuccess[]) => {
            return data[0].translations[0].text
        })
}

export const translate = CacheUtils.memoize(getTranslation)