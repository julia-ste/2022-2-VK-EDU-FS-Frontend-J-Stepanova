import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getProfile, updateProfile } from 'actions/profile'
import HeaderWrapper from 'components/HeaderWrapper'
import ProfileForm from 'components/ProfileForm'
import { Page } from 'constants/Pages'

import styles from './PageUserProfile.module.scss'


const mapStateToProps = state => ({
    loading: state.profile.loading,
    profile: state.profile.profile,
})

const PageUserProfile = ({ loading, profile, getProfile, updateProfile }) => {
    const [submitRequested, setSubmitRequested] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getProfile()
    }, [])

    const handleSubmit = ({ hasErrors, payload }) => {
        if (hasErrors) {
            setSubmitRequested(false)
        } else {
            updateProfile(payload)
            navigate('/')
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

export default connect(mapStateToProps, { getProfile, updateProfile })(
    PageUserProfile,
)