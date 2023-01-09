import React from 'react'

import { DoneAll } from '@mui/icons-material'
import classNames from 'classnames/bind'
import { getTime } from 'utils/time'

import styles from './Message.module.scss'


const cx = classNames.bind(styles)

const Message = ({ isFromMe, author, text, timestamp, attachments }) => (
    <div className={cx('bubble', { left: !isFromMe }, { right: isFromMe })}>
        <div className={styles.content}>
            {author && <div className={styles.author}>{author}</div>}
            <div className={styles.text}>{text}</div>
            <div className={styles.media}>
                {attachments.map(({ id, src }) => (
                    <img key={id} className={styles.img} src={src} alt="" />
                ))}
            </div>
            <div className={styles.meta}>
                <span className={styles.time}>{getTime(timestamp)}</span>
                {isFromMe && (
                    <span className={styles.iconDone}>
                        <DoneAll fontSize="inherit" />
                    </span>
                )}
            </div>
        </div>
    </div>
)

export default Message