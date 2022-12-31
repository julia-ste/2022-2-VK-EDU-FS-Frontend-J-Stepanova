import React from 'react'

import { Close } from '@mui/icons-material'
import SelectDropDown from 'components/SelectDropDown'

import styles from './TextBox.module.scss'


const TextBox = ({
    languages,
    selectedLanguage,
    text,
    disabled,
    placeholder,
    onTextChange,
    onLanguageChange,
    onDeleteClick,
}) => (
    <div className={styles.box}>
        <SelectDropDown
            options={languages}
            selectedValue={selectedLanguage}
            onChange={onLanguageChange}
        />
        <div className={styles.inputContainer}>
            <textarea
                className={styles.textarea}
                disabled={disabled}
                placeholder={placeholder}
                value={text}
                {...(onTextChange && {
                    onChange: e => onTextChange(e.target.value),
                })}
            />
            {!disabled && text.length && (
                <button className={styles.deleteButton} onClick={onDeleteClick}>
                    <Close className={styles.icon} />
                </button>
            )}
        </div>
    </div>
)

export default TextBox