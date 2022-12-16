import React from 'react'

import { Page } from 'common/constants'
import PageChat from 'pages/PageChat'
import PageChatList from 'pages/PageChatList'

import './App.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { page: Page.ChatList }
    }

    handlePageRedirect(newPage) {
        this.setState({ page: newPage })
    }

    render() {
        return (
            <div className="App">
                {this.state.page === Page.ChatList && (
                    <PageChatList
                        handlePageRedirect={this.handlePageRedirect.bind(this)}
                    />
                )}
                {this.state.page === Page.Chat && (
                    <PageChat
                        handlePageRedirect={this.handlePageRedirect.bind(this)}
                    />
                )}
            </div>
        )
    }
}

export default App