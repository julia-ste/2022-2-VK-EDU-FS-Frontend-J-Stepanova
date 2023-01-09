import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'api/axios'
import { Page } from 'common/constants'
import Chat from 'components/Chat'
import CreateButton from 'components/CreateButton'
import HeaderWrapper from 'components/HeaderWrapper'

import styles from './PageChatList.module.scss'


const PageChatList = () => {
    const [chats, setChats] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('/chats/')
            .then(response => setChats(response.data))
            .catch(error => console.log('Error:', error.message))
    }, [])

    return (
        <>
            <HeaderWrapper page={Page.ChatList} />

            <div className={styles.bodyContainer}>
                {chats.map(({ id, title, image, lastMessage }) => (
                    <Chat
                        key={id}
                        title={title}
                        imgSrc={image}
                        unreadCount={0}
                        lastMsg={lastMessage}
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