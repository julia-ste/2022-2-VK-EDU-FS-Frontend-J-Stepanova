import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ArrowBack, Done } from '@mui/icons-material'
import { setUpdateProfileRequested } from 'actions/profile'

import styles from './PageUserProfileHeader.module.scss'


const PageUserProfileHeader = ({ setUpdateProfileRequested }) => {
    const navigate = useNavigate()

    return (
        <div className={styles.header}>
            <button className={styles.button} onClick={() => navigate('/')}>
                <ArrowBack className={styles.icon} />
            </button>
            <h1 className={styles.title}>Edit Profile</h1>
            <button
                className={styles.button}
                onClick={() => setUpdateProfileRequested(true)}
            >
                <Done className={styles.icon} />
            </button>
        </div>
    )
}

export default connect(null, { setUpdateProfileRequested })(
    PageUserProfileHeader,
)