import React, { useState } from 'react'

import { Attachment } from '@mui/icons-material'
import isBlank from 'utils/string'

import styles from './MessageForm.module.scss'


const MessageForm = ({ initialText = '', placeholder, onSubmit }) => {
    const [text, setText] = useState(initialText)

    const handleSubmit = e => {
        e.preventDefault()
        if (!isBlank(text)) {
            onSubmit(text.trim())
            setText(initialText)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className={styles.button}>
                <Attachment className={styles.icon} />
            </button>
        </form>
    )
}

export default MessageForm