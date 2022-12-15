import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowBack, MoreVert, Search } from '@mui/icons-material'

import styles from './PageChatHeader.module.scss'


const PageChatHeader = ({ title, subtitle, imgSrc }) => {
    const navigate = useNavigate()

    return (
        <>
            <button className={styles.button} onClick={() => navigate('/')}>
                <ArrowBack className={styles.icon} />
            </button>
            <div className={styles.container}>
                <a href="/#">
                    <img alt="" className={styles.img} src={imgSrc} />
                </a>
                <div className={styles.info}>
                    <a className={styles.title} href="/#">
                        {title}
                    </a>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.button}>
                    <Search className={styles.icon} />
                </button>
                <button className={styles.button}>
                    <MoreVert className={styles.icon} />
                </button>
            </div>
        </>
    )
}

export default PageChatHeader