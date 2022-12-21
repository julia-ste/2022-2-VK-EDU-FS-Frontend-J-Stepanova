import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import chatList from 'assets/chatList.json'
import { Page } from 'common/constants'
import Chat from 'components/Chat'
import CreateButton from 'components/CreateButton'
import HeaderWrapper from 'components/HeaderWrapper'

import styles from './PageChatList.module.scss'


const PageChatList = () => {
    const [chats] = useState(chatList)
    const navigate = useNavigate()

    return (
        <>
            <HeaderWrapper page={Page.ChatList} />

            <div className={styles.bodyContainer}>
                {chats.map(({ id, title, imgSrc, unreadCount, lastMsg }) => (
                    <Chat
                        key={id}
                        title={title}
                        imgSrc={imgSrc}
                        unreadCount={unreadCount}
                        lastMsg={lastMsg}
                        onClick={() => navigate(`/chat/${id}`)}
                    />
                ))}
                <div className={styles.createButton}>
                    <CreateButton />
                </div>
            </div>
        </>
    )
}

export default PageChatList