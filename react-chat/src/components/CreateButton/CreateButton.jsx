import React from 'react'

import { Create } from '@mui/icons-material'

import styles from './CreateButton.module.scss'


const CreateButton = ({ onClick }) => (
    <button className={styles.button} onClick={onClick}>
        <Create className={styles.icon} />
    </button>
)

export default CreateButton