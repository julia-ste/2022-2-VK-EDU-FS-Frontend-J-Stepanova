import React from 'react'
import { Provider } from 'react-redux'
import {
    Route,
    RouterProvider,
    createHashRouter,
    createRoutesFromElements,
} from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google'
import RequireAuth from 'components/RequireAuth'
import { CentrifugeProvider } from 'context/CentrifugeContext'
import PageChat from 'pages/PageChat'
import PageChatList from 'pages/PageChatList'
import PageLogin from 'pages/PageLogin'
import PageUserProfile from 'pages/PageUserProfile'

import './App.css'
import store from './store'


const { REACT_APP_GOOGLE_CLIENT_ID } = process.env

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route element={<RequireAuth />}>
                <Route path="/" element={<PageChatList />} />
                <Route path="/chat/:id" element={<PageChat />} />
                <Route path="/profile" element={<PageUserProfile />} />
            </Route>
            <Route path="/login" element={<PageLogin />} />
        </>,
    ),
)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CentrifugeProvider>
                    <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
                        <div className="App">
                            <RouterProvider router={router} />
                        </div>
                    </GoogleOAuthProvider>
                </CentrifugeProvider>
            </Provider>
        )
    }
}

export default App