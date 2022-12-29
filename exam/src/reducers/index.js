import { combineReducers } from 'redux'

import languages from './languages'
import translation from './translation'


export default combineReducers({
    languages,
    translation,
})