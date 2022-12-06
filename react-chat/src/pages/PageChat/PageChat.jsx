import React from 'react'

import chatHistory from 'assets/chatHistory.json'
import chatList from 'assets/chatList.json'
import { Page } from 'common/constants'
import HeaderWrapper from 'components/HeaderWrapper'
import Message from 'components/Message'
import MessageForm from 'components/MessageForm'
import { useLocalStorage } from 'hooks/useLocalStorage'

import styles from './PageChat.module.scss'


const PageChat = ({ handlePageRedirect }) => {
    const [messages, setMessages] = useLocalStorage('chat', chatHistory)

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
                onArrowBackClick={() => handlePageRedirect(Page.ChatList)}
            />

            <div className={styles.bodyContainer}>
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