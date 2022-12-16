import React from 'react'

import { Done, DoneAll } from '@mui/icons-material'
import { getTime } from 'utils/time'

import styles from './Chat.module.scss'


const Chat = ({
    title,
    imgSrc,
    unreadCount,
    lastMsg: { isFromMe, text, timestamp, isRead, attachments },
    onClick,
}) => (
    <div className={styles.chat} onClick={onClick}>
        <img className={styles.img} src={imgSrc} alt="" />
        <div className={styles.content}>
            <div className={styles.row}>
                <div className={styles.title}>{title}</div>
                <span className={styles.time}>
                    {timestamp ? getTime(timestamp) : ''}
                </span>
            </div>
            <div className={styles.row}>
                <div className={styles.text}>
                    {text.length ? text : attachments[0].name}
                </div>
                {isFromMe ? (
                    <span className={styles.iconDone}>
                        {isRead ? (
                            <DoneAll fontSize="inherit" />
                        ) : (
                            <Done fontSize="inherit" />
                        )}
                    </span>
                ) : (
                    unreadCount !== 0 && (
                        <span className={styles.unreadCount}>
                            {unreadCount}
                        </span>
                    )
                )}
            </div>
        </div>
    </div>
)

export default Chat