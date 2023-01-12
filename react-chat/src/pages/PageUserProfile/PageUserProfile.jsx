import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getProfile } from 'actions/profile'
import HeaderWrapper from 'components/HeaderWrapper'
import ProfileForm from 'components/ProfileForm'
import { Page } from 'constants/Pages'

import styles from './PageUserProfile.module.scss'


const mapStateToProps = state => ({
    loading: state.profile.loading,
    profile: state.profile.profile,
})

const PageUserProfile = ({ loading, profile, getProfile }) => {
    const navigate = useNavigate()

    useEffect(() => {
        getProfile()
    }, [getProfile])

    const handleSubmit = () => navigate('/')

    return (
        <>
            <HeaderWrapper page={Page.UserProfile} />

            <div className={styles.bodyContainer}>
                <div className={styles.form}>
                    {!loading && (
                        <ProfileForm
                            fullname={profile.fullname}
                            username={profile.username}
                            bio={profile.bio}
                            imgSrc={profile.image}
                            onSubmit={handleSubmit}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, { getProfile })(PageUserProfile)