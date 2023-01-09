import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getChats } from 'actions/chats'
import Chat from 'components/Chat'
import CreateButton from 'components/CreateButton'
import HeaderWrapper from 'components/HeaderWrapper'
import { Page } from 'constants/Pages'

import styles from './PageChatList.module.scss'


const mapStateToProps = state => ({
    chats: state.chats.chats,
})

const PageChatList = ({ chats, getChats }) => {
    const navigate = useNavigate()

    useEffect(() => {
        getChats()
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

export default connect(mapStateToProps, { getChats })(PageChatList)