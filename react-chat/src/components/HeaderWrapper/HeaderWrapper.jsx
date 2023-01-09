import React from 'react'
import { connect } from 'react-redux'

import { Logout } from '@mui/icons-material'
import { logout } from 'actions/auth'
import PageChatHeader from 'components/PageChatHeader'
import PageChatListHeader from 'components/PageChatListHeader'
import PageUserProfileHeader from 'components/PageUserProfileHeader'
import { Page } from 'constants/Pages'

import styles from './HeaderWrapper.module.scss'


const HeaderWrapper = ({ page, logout, ...pageProps }) => (
    <header className={styles.header}>
        <div className={styles.content}>
            {page === Page.ChatList && <PageChatListHeader />}
            {page === Page.Chat && <PageChatHeader {...pageProps} />}
            {page === Page.UserProfile && <PageUserProfileHeader />}
        </div>
        <button className={styles.button} onClick={logout}>
            <Logout className={styles.icon} />
        </button>
    </header>
)

export default connect(null, { logout })(HeaderWrapper)