import { useEffect } from 'react'

import ProfileFormImageField from 'components/ProfileFormImageField'
import ProfileFormInputField from 'components/ProfileFormInputField'
import { useForm } from 'hooks/useForm'

import styles from './ProfileForm.module.scss'


const ProfileForm = ({
    fullName,
    username,
    bio,
    imgSrc,
    submitRequested,
    onSubmit,
}) => {
    const { values, errors, onChange, onBlur, isFormValid } = useForm({
        initialState: { fullName, username, bio },
        rules: {
            fullName: { isReq: true, max: 128 },
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
        if (submitRequested) {
            onSubmit({
                hasErrors: !isFormValid(),
                payload: {
                    ...values,
                    fullName: values.fullName.trim(),
                    bio: values.bio.trim(),
                    imgSrc,
                },
            })
        }
    })

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
                name="fullName"
                value={values.fullName}
                label="Full name"
                onChange={onChange}
                onBlur={onBlur}
                errorMsg={errors.fullName}
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

export default ProfileForm