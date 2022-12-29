import React from 'react'
import { Provider } from 'react-redux'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import PageHistory from 'pages/PageHistory'
import PageTranslation from 'pages/PageTranslation'

import './App.css'
import store from './store'


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<PageTranslation />} />
                            <Route path="/history" element={<PageHistory />} />
                        </Routes>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App