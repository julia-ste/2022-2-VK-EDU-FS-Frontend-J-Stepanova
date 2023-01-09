import { createContext, useEffect, useRef, useState } from 'react'

import { Centrifuge } from 'centrifuge'


const { REACT_APP_CENTRIFUGE_URL } = process.env

export const CentrifugeContext = createContext()

export const CentrifugeProvider = ({ children }) => {
    const [isReady, setIsReady] = useState(false)
    const ws = useRef(null)

    const subscribe = (channel, onPublication) => {
        const centrifuge = ws.current
        let sub
        if (channel in centrifuge.subscriptions()) {
            sub = centrifuge.getSubscription(channel)
        } else {
            sub = centrifuge.newSubscription(channel)
            sub.on('publication', ctx => onPublication(ctx.data))
        }
        sub.subscribe()
    }

    const unsubscribe = channel => {
        const centrifuge = ws.current
        const sub = centrifuge.getSubscription(channel)
        sub.unsubscribe()
    }

    useEffect(() => {
        const centrifuge = new Centrifuge(REACT_APP_CENTRIFUGE_URL)

        centrifuge.on('connected', () => setIsReady(true))
        centrifuge.on('disconnected', () => setIsReady(false))

        ws.current = centrifuge
        centrifuge.connect()

        return () => centrifuge.disconnect()
    }, [])

    const ret = [isReady, subscribe, unsubscribe]

    return (
        <CentrifugeContext.Provider value={ret}>
            {children}
        </CentrifugeContext.Provider>
    )
}