import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Menu, Search } from '@mui/icons-material'

import styles from './PageChatListHeader.module.scss'


const PageChatListHeader = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.header}>
            <button
                className={styles.button}
                onClick={() => navigate('/profile')}
            >
                <Menu className={styles.icon} />
            </button>
            <h1 className={styles.title}>Messenger</h1>
            <button className={styles.button}>
                <Search className={styles.icon} />
            </button>
        </div>
    )
}

export default PageChatListHeader