import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'api/axios'
import { Page } from 'common/constants'
import HeaderWrapper from 'components/HeaderWrapper'
import ProfileForm from 'components/ProfileForm'

import styles from './PageUserProfile.module.scss'


const PageUserProfile = () => {
    const userId = localStorage.getItem('userId') ?? 3
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const [submitRequested, setSubmitRequested] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`/users/${userId}/`)
            .then(response =>
                setLoading(() => {
                    setProfile(response.data)
                    return false
                }),
            )
            .catch(error => console.log('Error:', error.message))
    }, [])

    const handleSubmit = ({ hasErrors, payload }) => {
        if (hasErrors) {
            setSubmitRequested(false)
        } else {
            axios
                .put(`/users/${userId}/`, payload)
                .then(() => navigate('/'))
                .catch(error => console.log('Error:', error.message))
        }
    }

    return (
        <>
            <HeaderWrapper
                page={Page.UserProfile}
                onDoneClick={() => setSubmitRequested(true)}
            />

            <div className={styles.bodyContainer}>
                <div className={styles.form}>
                    {!loading && (
                        <ProfileForm
                            fullname={profile.fullname}
                            username={profile.username}
                            bio={profile.bio}
                            imgSrc={profile.image}
                            submitRequested={submitRequested}
                            onSubmit={handleSubmit}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default PageUserProfile