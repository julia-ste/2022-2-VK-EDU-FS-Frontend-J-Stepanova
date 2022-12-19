import { useState } from 'react'

import isBlank from 'utils/string'

export function useForm({ initialState, rules, validators }) {
    const [values, setValues] = useState(initialState || {})
    const [errors, setErrors] = useState({})

    const validateCustomRules = (value, validators) => {
        for (const { regex, msg } of validators) {
            if (!value.match(regex)) {
                return msg ?? 'Not valid'
            }
        }
    }

    const onBlur = ({ target: { name, value } }) => {
        if (!rules[name] && !validators[name]) {
            return
        }

        const { isReq, min, max } = rules[name]
        let msg
        if (isBlank(value) && isReq) {
            msg = 'Cannot be empty'
        } else if (
            validators[name] &&
            (msg = validateCustomRules(value, validators[name]))
        ) {
        } else if (min && value.length < min) {
            msg = `Minimum length is ${min} characters`
        } else if (max && value.length > max) {
            msg = `Maximum length is ${max} characters`
        } else {
            msg = null
        }

        setErrors(prev => ({ ...prev, [name]: msg }))
    }

    const onChange = ({ target: { name, value } }) => {
        setValues(prev => ({ ...prev, [name]: value }))
    }

    const isFormValid = () => Object.values(errors).every(x => !x)

    return { values, errors, onChange, onBlur, isFormValid }
}