import React from 'react'
import { Provider } from 'react-redux'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { CentrifugeProvider } from 'context/CentrifugeContext'
import PageChat from 'pages/PageChat'
import PageChatList from 'pages/PageChatList'
import PageUserProfile from 'pages/PageUserProfile'

import './App.css'
import store from './store'


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CentrifugeProvider>
                    <Router>
                        <div className="App">
                            <Routes>
                                <Route path="/" element={<PageChatList />} />
                                <Route
                                    path="/chat/:id"
                                    element={<PageChat />}
                                />
                                <Route
                                    path="/profile"
                                    element={<PageUserProfile />}
                                />
                            </Routes>
                        </div>
                    </Router>
                </CentrifugeProvider>
            </Provider>
        )
    }
}

export default App