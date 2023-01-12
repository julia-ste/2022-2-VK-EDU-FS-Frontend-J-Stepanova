export function getTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    })
}

export function getCurrentDateTime() {
    return new Date().toISOString()
}
