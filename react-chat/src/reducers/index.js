import chats from 'reducers/chats'
import messages from 'reducers/messages'
import profile from 'reducers/profile'
import { combineReducers } from 'redux'

export default combineReducers({
    chats,
    messages,
    profile,
})