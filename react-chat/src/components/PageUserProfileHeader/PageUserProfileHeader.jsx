import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowBack, Done } from '@mui/icons-material'

import styles from './PageUserProfileHeader.module.scss'


const PageUserProfileHeader = ({ onDoneClick }) => {
    const navigate = useNavigate()

    return (
        <>
            <button className={styles.button} onClick={() => navigate('/')}>
                <ArrowBack className={styles.icon} />
            </button>
            <h1 className={styles.title}>Edit Profile</h1>
            <button className={styles.button} onClick={onDoneClick}>
                <Done className={styles.icon} />
            </button>
        </>
    )
}

export default PageUserProfileHeader