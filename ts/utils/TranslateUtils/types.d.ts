interface ITranslation {
    text: string
    to: string
}

export interface IApiResponseSuccess {
    detectedLanguage?: {
        language: string
        score: number
    }
    translations: ITranslation[]
}

export interface IApiResponseFailure {
    error: {
        code: number
        message: string
    }
}

type URLParamRequiredKeys =
    | 'to'
    | 'api-version'
    | 'profanityAction'
    | 'textType'
type URLParamOptionalKeys = 'from'

export type URLParams =
    | Record<URLParamRequiredKeys, string>
    | Partial<Record<URLParamOptionalKeys, string>>
