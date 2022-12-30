import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getLanguages } from 'actions/languages'
import { getTranslation } from 'actions/translation'
import HistoryButton from 'components/HistoryButton'
import TextBox from 'components/TextBox'
import { useLocalStorage } from 'hooks/useLocalStorage'

import styles from './PageTranslation.module.scss'


const mapStateToProps = state => ({
    languages: state.languages.languages,
})

const PageTranslation = ({ languages, getLanguages, getTranslation }) => {
    const INPUT_TIMEOUT = 1000
    const [text, setText] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)
    const [translation, setTranslation] = useState('')
    const [selectedLanguages, setSelectedLanguages] = useState({
        from: 'ru',
        to: 'en',
    })
    const [, setHistory] = useLocalStorage('history', [])
    const navigate = useNavigate()

    useEffect(() => {
        if (languages.length === 0) {
            getLanguages()
        }
    }, [getLanguages, languages.length])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, INPUT_TIMEOUT)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        if (debouncedText) {
            getTranslation(debouncedText, selectedLanguages.to).then(result => {
                setTranslation(() => result.translation)
                setHistory(prev => [result, ...prev])
            })
        }
    }, [debouncedText, selectedLanguages.to, getTranslation, setHistory])

    const handleTextChange = newText => setText(() => newText)
    const handleLanguageChange = newLanguage =>
        setSelectedLanguages(prev => ({ ...prev, ...newLanguage }))
    const handleDeleteClick = () => {
        setText(() => {
            setTranslation(() => '')
            return ''
        })
    }

    return (
        <>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>VK Translate</h1>
            </div>
            <div className={styles.container}>
                <TextBox
                    languages={languages}
                    selectedLanguage={selectedLanguages.from}
                    text={text}
                    onTextChange={handleTextChange}
                    onLanguageChange={newLanguage =>
                        handleLanguageChange({ from: newLanguage })
                    }
                    onDeleteClick={handleDeleteClick}
                />
                <div className={styles.verticalLine} />
                <TextBox
                    languages={languages}
                    selectedLanguage={selectedLanguages.to}
                    text={translation}
                    placeholder="Translation"
                    disabled
                    onLanguageChange={newLanguage =>
                        handleLanguageChange({ to: newLanguage })
                    }
                />
            </div>
            <div className={styles.historyButton}>
                <HistoryButton onClick={() => navigate('/history')} />
            </div>
        </>
    )
}

export default connect(mapStateToProps, { getLanguages, getTranslation })(
    PageTranslation,
)