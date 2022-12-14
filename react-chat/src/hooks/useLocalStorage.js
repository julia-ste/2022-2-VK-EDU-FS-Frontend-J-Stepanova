import { useEffect, useState } from 'react'

export function getLocalStorageValue(key, initial) {
    if (typeof window !== 'undefined') {
        const value = window.localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    }

    return initial instanceof Function ? initial() : initial
}

function setLocalStorageValue(key, value) {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
}

export function useLocalStorage(key, initial) {
    const [value, setValue] = useState(() => getLocalStorageValue(key, initial))

    useEffect(() => {
        setLocalStorageValue(key, value)
    }, [value])

    return [value, setValue]
}