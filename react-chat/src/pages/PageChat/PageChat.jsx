import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import chatHistory from 'assets/chatHistory.json'
import chatList from 'assets/chatList.json'
import { Page } from 'common/constants'
import HeaderWrapper from 'components/HeaderWrapper'
import Message from 'components/Message'
import MessageForm from 'components/MessageForm'
import { useLocalStorage } from 'hooks/useLocalStorage'

import styles from './PageChat.module.scss'


const PageChat = () => {
    const { id } = useParams()
    const [messages, setMessages] = useLocalStorage(`chat_${id}`, chatHistory)
    const massagesRef = useRef(null)

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const scrollToBottom = () => {
        massagesRef.current.scroll({
            top: massagesRef.current.scrollHeight,
            left: 0,
        })
    }

    const handleSubmit = text => {
        const newMessage = {
            id: Math.max(...messages.map(x => x.id)) + 1,
            isFromMe: true,
            author: 'Дженнифер',
            text: text,
            timestamp: new Date().valueOf(),
            attachments: [],
        }
        setMessages(prev => [...prev, newMessage])
    }

    return (
        <>
            <HeaderWrapper
                page={Page.Chat}
                title="Дженнифер"
                subtitle="была 2 часа назад"
                imgSrc={chatList[0].imgSrc}
            />

            <div className={styles.bodyContainer} ref={massagesRef}>
                {messages.map(
                    ({ id, isFromMe, text, timestamp, attachments }) => (
                        <Message
                            key={id}
                            isFromMe={isFromMe}
                            text={text}
                            timestamp={timestamp}
                            attachments={attachments}
                        />
                    ),
                )}
            </div>

            <MessageForm placeholder="Сообщение" onSubmit={handleSubmit} />
        </>
    )
}

export default PageChat