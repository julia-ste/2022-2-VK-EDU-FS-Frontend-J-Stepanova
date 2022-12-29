import React, { useCallback, useState } from 'react'

const SelectDropDown = ({ options, initialOption, handleChange }) => {
    const [selectedOption, setSelectedOption] = useState(initialOption)

    const onChange = useCallback(
        e => {
            setSelectedOption(e.target.value)
            handleChange(e.target.value)
        },
        [handleChange],
    )

    return (
        <select value={selectedOption} size={1} onChange={onChange}>
            {options.map(({ value, label }, id) => (
                <option key={id} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
}

export default SelectDropDown