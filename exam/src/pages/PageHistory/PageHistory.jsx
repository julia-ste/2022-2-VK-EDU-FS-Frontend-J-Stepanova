import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowBack } from '@mui/icons-material'
import { useLocalStorage } from 'hooks/useLocalStorage'

import styles from './PageHistory.module.scss'


const PageHistory = () => {
    const [history, setHistory] = useLocalStorage('history', [])
    const navigate = useNavigate()

    return (
        <>
            <div>
                <div className={styles.titleContainer}>
                    <button
                        className={styles.arrowBackButton}
                        onClick={() => navigate('/')}
                    >
                        <ArrowBack className={styles.icon} />
                    </button>
                    <h1 className={styles.title}>История</h1>
                </div>
                <div className={styles.cleanButtonContainer}>
                    <button
                        className={styles.cleanButton}
                        onClick={() => setHistory([])}
                    >
                        Очистить историю
                    </button>
                </div>
            </div>
            <div className={styles.scrollContainer}>
                {history.map(
                    ({ fromLanguage, toLanguage, text, translation }, id) => (
                        <div className={styles.historyItem} key={id}>
                            <div className={styles.languages}>
                                {`${fromLanguage} → ${toLanguage}`}
                            </div>
                            <div className={styles.text}>{text}</div>
                            <div className={styles.translation}>
                                {translation}
                            </div>
                        </div>
                    ),
                )}
            </div>
        </>
    )
}

export default PageHistory