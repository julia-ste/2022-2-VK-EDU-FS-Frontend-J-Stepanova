import React from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import PageChat from 'pages/PageChat'
import PageChatList from 'pages/PageChatList'

import './App.css'


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<PageChatList />} />
                        <Route path="/chat/:id" element={<PageChat />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App