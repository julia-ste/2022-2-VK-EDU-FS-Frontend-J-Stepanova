import React, { useContext, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
    addMessage,
    getChatDetail,
    getMessages,
    sendMessage,
} from 'actions/messages'
import HeaderWrapper from 'components/HeaderWrapper'
import Message from 'components/Message'
import MessageForm from 'components/MessageForm'
import { Page } from 'constants/Pages'
import { CentrifugeContext } from 'context/CentrifugeContext'

import styles from './PageChat.module.scss'


const mapStateToProps = state => ({
    userId: state.auth.userId,
    chat: state.messages.chat,
    messages: state.messages.messages,
})

const PageChat = ({
    userId,
    chat,
    messages,
    getMessages,
    getChatDetail,
    sendMessage,
    addMessage,
}) => {
    const { id } = useParams()
    const massagesRef = useRef(null)
    const [centrifugeIsConnected, subscribe, unsubscribe] =
        useContext(CentrifugeContext)
    const channelKey = `chat_${id}`

    useEffect(() => {
        getMessages(id)
        getChatDetail(id)

        return () => {
            if (centrifugeIsConnected) unsubscribe(channelKey)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const onPublication = newMessage => {
            if (newMessage.authorId !== userId) {
                addMessage(newMessage)
            }
        }

        if (centrifugeIsConnected) {
            subscribe(channelKey, onPublication)
        }
    }, [centrifugeIsConnected, userId, channelKey, subscribe, addMessage])

    useEffect(() => {
        const scrollToBottom = () => {
            massagesRef.current.scroll({
                top: massagesRef.current.scrollHeight,
                left: 0,
            })
        }

        scrollToBottom()
    }, [messages.length])

    const handleSubmit = text => sendMessage(id, text)

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

export default connect(mapStateToProps, {
    getMessages,
    getChatDetail,
    sendMessage,
    addMessage,
})(PageChat)