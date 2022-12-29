import styles from './TextBox.module.scss'
import { useState } from 'react'


const TextBox = ({ initialText, languages, disabled, placeholder, onSubmit }) => {
    const [text, setText] = useState(initialText)

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(text)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <SelectDropDown
                options={languages}
                initialOption={initialSortType}
                handleChange={sortComments}
            />
            <textarea
                className={styles.textarea}
                disabled={disabled}
                placeholder={placeholder}
                onChange={e => setTextToTranslate(e.target.value)}
                value={}
            />
            {!disabled && (
                <div className={styles.delete} onClick={() => setText('')}>
                    ˟
                </div>
            )}
        </form>
    )
}

export default TextBox