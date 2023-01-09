import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useGoogleLogin } from '@react-oauth/google'
import { checkAuthorized, loginGoogle } from 'actions/auth'

import styles from './Pagelogin.module.scss'


const mapStateToProps = state => ({
    token: state.auth.token,
})

const PageLogin = ({ token, loginGoogle, checkAuthorized }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/')
        } else {
            checkAuthorized()
        }
    }, [token, navigate, checkAuthorized])

    const handleClick = useGoogleLogin({
        onSuccess: response => loginGoogle(response.access_token),
    })

    return (
        <div className={styles.bodyContainer}>
            <div className={styles.centerContainer}>
                <h1 className={styles.title}>Messenger</h1>
                <button className={styles.button} onClick={handleClick}>
                    <div className={styles.left}>G</div>
                    <div className={styles.right}>LOGIN WITH GOOGLE</div>
                </button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { loginGoogle, checkAuthorized })(
    PageLogin,
)