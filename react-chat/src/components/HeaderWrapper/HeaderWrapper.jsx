import React from 'react'

import { Page } from 'common/constants'
import PageChatHeader from 'components/PageChatHeader'
import PageChatListHeader from 'components/PageChatListHeader'
import PageUserProfileHeader from 'components/PageUserProfileHeader'

import styles from './HeaderWrapper.module.scss'


const HeaderWrapper = ({ page, ...pageProps }) => (
    <header className={styles.header}>
        {page === Page.ChatList && <PageChatListHeader />}
        {page === Page.Chat && <PageChatHeader {...pageProps} />}
        {page === Page.UserProfile && <PageUserProfileHeader {...pageProps} />}
    </header>
)

export default HeaderWrapper