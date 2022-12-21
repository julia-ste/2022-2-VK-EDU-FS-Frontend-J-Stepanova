import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import userProfile from 'assets/userProfile.json'
import { Page } from 'common/constants'
import HeaderWrapper from 'components/HeaderWrapper'
import ProfileForm from 'components/ProfileForm'
import { useLocalStorage } from 'hooks/useLocalStorage'

import styles from './PageUserProfile.module.scss'


const PageUserProfile = () => {
    const [profile, setProfile] = useLocalStorage('profile', userProfile)
    const [submitRequested, setSubmitRequested] = useState(false)
    const [saved, setSaved] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = ({ hasErrors, payload }) => {
        if (hasErrors) {
            setSubmitRequested(false)
        } else {
            setSaved(() => {
                setProfile({ ...payload })
                return true
            })
        }
    }

    useEffect(() => {
        if (saved) {
            navigate('/')
        }
    })

    return (
        <>
            <HeaderWrapper
                page={Page.UserProfile}
                onDoneClick={() => setSubmitRequested(true)}
            />

            <div className={styles.bodyContainer}>
                <div className={styles.form}>
                    <ProfileForm
                        fullName={profile.fullName}
                        username={profile.username}
                        bio={profile.bio}
                        imgSrc={profile.imgSrc}
                        submitRequested={submitRequested}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </>
    )
}

export default PageUserProfile