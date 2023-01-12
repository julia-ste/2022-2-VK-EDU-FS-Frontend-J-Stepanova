import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setUpdateProfileRequested, updateProfile } from 'actions/profile'
import ProfileFormImageField from 'components/ProfileFormImageField'
import ProfileFormInputField from 'components/ProfileFormInputField'
import { useForm } from 'hooks/useForm'

import styles from './ProfileForm.module.scss'


const mapStateToProps = state => ({
    updateRequested: state.profile.updateRequested,
})

const ProfileForm = ({
    fullname,
    username,
    bio,
    imgSrc,
    onSubmit,
    updateRequested,
    setUpdateProfileRequested,
    updateProfile,
}) => {
    const { values, errors, onChange, onBlur, isFormValid } = useForm({
        initialState: { fullname, username, bio },
        rules: {
            fullname: { isReq: true, max: 128 },
            username: { isReq: true, min: 5, max: 15 },
            bio: { max: 128 },
        },
        validators: {
            username: [
                {
                    regex: /^[a-z0-9_]*$/,
                    msg: 'Only a-z, 0-9 and underscores allowed',
                },
                {
                    regex: /^[a-z][a-z0-9_]*$/,
                    msg: 'The first character must be a letter a-z',
                },
            ],
        },
    })

    useEffect(() => {
        if (updateRequested) {
            setUpdateProfileRequested(false)
            if (isFormValid()) {
                updateProfile({
                    username: values.username.trim(),
                    fullname: values.fullname.trim(),
                    bio: values.bio.trim(),
                })
                onSubmit()
            }
        }
        // eslint-disable-next-line
    }, [updateRequested])

    return (
        <form className={styles.form}>
            <div className={styles.img}>
                <ProfileFormImageField
                    name="imgSrc"
                    className={styles.img}
                    value={imgSrc}
                />
            </div>
            <ProfileFormInputField
                name="fullname"
                value={values.fullname}
                label="Full name"
                onChange={onChange}
                onBlur={onBlur}
                errorMsg={errors.fullname}
            />
            <ProfileFormInputField
                name="username"
                value={values.username}
                label="Username"
                onChange={onChange}
                onBlur={onBlur}
                errorMsg={errors.username}
            />
            <ProfileFormInputField
                name="bio"
                value={values.bio}
                label="Bio"
                isTextArea
                onChange={onChange}
                onBlur={onBlur}
                errorMsg={errors.bio}
            />
        </form>
    )
}

export default connect(mapStateToProps, {
    setUpdateProfileRequested,
    updateProfile,
})(ProfileForm)