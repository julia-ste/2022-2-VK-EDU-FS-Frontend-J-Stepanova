import React from 'react'

import styles from './ProfileFormInputField.module.scss'


const ProfileFormInputField = ({
    name,
    value,
    label,
    placeholder,
    isTextArea,
    onChange,
    onBlur,
    errorMsg,
}) => (
    <div>
        <div className={styles.field}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    className={styles.textarea}
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    rows={3}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            ) : (
                <input
                    className={styles.input}
                    id={name}
                    name={name}
                    value={value}
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )}
        </div>
        <div className={styles.error}>{errorMsg ?? ''}</div>
    </div>
)

export default ProfileFormInputField