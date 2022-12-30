import React from 'react'

import styles from './SelectDropDown.module.scss'


const SelectDropDown = ({ options, selectedValue, onChange }) => (
    <select
        className={styles.select}
        value={selectedValue}
        size={1}
        onChange={e => onChange(e.target.value)}
    >
        {options.map(({ value, label }, id) => (
            <option key={id} value={value}>
                {label}
            </option>
        ))}
    </select>
)

export default SelectDropDown