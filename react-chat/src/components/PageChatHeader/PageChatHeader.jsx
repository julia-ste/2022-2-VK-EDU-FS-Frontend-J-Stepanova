import React from 'react'

import { ArrowBack, MoreVert, Search } from '@mui/icons-material'

import styles from './PageChatHeader.module.scss'


const PageChatHeader = ({ title, subtitle, imgSrc, onArrowBackClick }) => (
    <>
        <button className={styles.button} onClick={onArrowBackClick}>
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

export default PageChatHeader