import { useRef } from 'react'

import { PhotoCamera } from '@mui/icons-material'

import styles from './ProfileFormImageField.module.scss'


const ProfileFormImageField = ({ name, value, onChange }) => {
    const inputRef = useRef()

    return (
        <div
            className={styles.container}
            onClick={() => inputRef.current.click()}
        >
            <input
                name={name}
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={onChange}
            />
            <img className={styles.img} src={value} alt="" />
            <div className={styles.hoverContent}>
                <PhotoCamera />
            </div>
        </div>
    )
}

export default ProfileFormImageField