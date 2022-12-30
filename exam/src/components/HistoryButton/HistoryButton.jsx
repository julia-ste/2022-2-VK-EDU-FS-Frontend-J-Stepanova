import React from 'react'

import { History } from '@mui/icons-material'

import styles from './HistoryButton.module.scss'


const HistoryButton = ({ onClick }) => (
    <button className={styles.button} onClick={onClick}>
        <History className={styles.icon} />
    </button>
)

export default HistoryButton