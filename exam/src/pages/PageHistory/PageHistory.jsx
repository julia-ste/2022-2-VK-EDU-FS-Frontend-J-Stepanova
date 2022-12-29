import React from 'react'

import { useLocalStorage } from 'hooks/useLocalStorage'

import styles from './PageHistory.module.scss'


const PageHistory = () => {
    const [history, setHistory] = useLocalStorage('history', '')

    return (
        <div className={styles.bodyContainer}>
            <h1>История</h1>
            <div className={styles.cleanContainer}>
                <button className={styles.clean} onClick={() => setHistory('')}>
                    Очистить историю
                </button>
            </div>
            {history.map(({ fromLanguage, toLanguage, text, translation }) => (
                <>
                    <div className={styles.languages}>
                        {`${fromLanguage} -> ${toLanguage}`}
                    </div>
                    <div className={styles.text}>{text}</div>
                    <div className={styles.translation}>{translation}</div>
                </>
            ))}
        </div>
    )
}

export default PageHistory