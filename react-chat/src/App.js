import React from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { CentrifugeProvider } from 'context/CentrifugeContext'
import PageChat from 'pages/PageChat'
import PageChatList from 'pages/PageChatList'
import PageUserProfile from 'pages/PageUserProfile'

import './App.css'


class App extends React.Component {
    render() {
        return (
            <CentrifugeProvider>
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<PageChatList />} />
                            <Route path="/chat/:id" element={<PageChat />} />
                            <Route
                                path="/profile"
                                element={<PageUserProfile />}
                            />
                        </Routes>
                    </div>
                </Router>
            </CentrifugeProvider>
        )
    }
}

export default App