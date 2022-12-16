import React from 'react'

import { Menu, Search } from '@mui/icons-material'

import styles from './PageChatListHeader.module.scss'


const PageChatListHeader = () => (
    <>
        <button className={styles.button}>
            <Menu className={styles.icon} />
        </button>
        <h1 className={styles.title}>Messenger</h1>
        <button className={styles.button}>
            <Search className={styles.icon} />
        </button>
    </>
)

export default PageChatListHeader