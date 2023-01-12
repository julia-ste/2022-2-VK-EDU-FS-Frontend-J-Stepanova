import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'api/axios'
import { Page } from 'common/constants'
import HeaderWrapper from 'components/HeaderWrapper'
import Message from 'components/Message'
import MessageForm from 'components/MessageForm'
import { CentrifugeContext } from 'context/CentrifugeContext'
import { getCurrentDateTime } from 'utils/time'

import styles from './PageChat.module.scss'


const PageChat = () => {
    const userId = JSON.parse(localStorage.getItem('userId')) || 3
    const { id } = useParams()
    const [chat, setChat] = useState({})
    const [messages, setMessages] = useState([])
    const massagesRef = useRef(null)
    const [centrifugeIsConnected, subscribe, unsubscribe] =
        useContext(CentrifugeContext)
    const channelKey = `chat_${id}`

    useEffect(() => {
        axios
            .get(`/chats/${id}/`)
            .then(response => setChat(response.data))
            .catch(error => console.log('Error:', error.message))
        axios
            .get(`/chats/${id}/messages/`)
            .then(response => setMessages(response.data))
            .catch(error => console.log('Error:', error.message))

        return () => {
            if (centrifugeIsConnected) unsubscribe(channelKey)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const onPublication = newMessage => {
            if (newMessage.authorId !== userId) {
                setMessages(prev => [...prev, newMessage])
            }
        }

        if (centrifugeIsConnected) {
            subscribe(channelKey, onPublication)
        }
    }, [centrifugeIsConnected, userId, channelKey, subscribe])

    useEffect(() => {
        const scrollToBottom = () => {
            massagesRef.current.scroll({
                top: massagesRef.current.scrollHeight,
                left: 0,
            })
        }

        scrollToBottom()
    }, [messages.length])

    const handleSubmit = text => {
        const newMessage = {
            text: text,
            sentAt: getCurrentDateTime(),
        }

        axios
            .post(`/chats/${id}/messages/new/`, newMessage)
            .then(response => setMessages(prev => [...prev, response.data]))
            .catch(error => console.log('Error:', error.message))
    }

    return (
        <>
            <HeaderWrapper
                page={Page.Chat}
                title={chat.title}
                subtitle={
                    chat.title
                        ? chat.isGroup
                            ? `${chat.memberCount} участников`
                            : 'был(а) 2 часа назад'
                        : 'loading...'
                }
                imgSrc={chat.image}
            />

            <div className={styles.bodyContainer} ref={massagesRef}>
                {messages.map(({ id, authorId, author, text, sentAt }) => (
                    <Message
                        key={id}
                        isFromMe={authorId === userId}
                        author={authorId === userId ? '' : author}
                        text={text}
                        timestamp={sentAt}
                        attachments={[]}
                    />
                ))}
            </div>

            <MessageForm placeholder="Сообщение" onSubmit={handleSubmit} />
        </>
    )
}

export default PageChat