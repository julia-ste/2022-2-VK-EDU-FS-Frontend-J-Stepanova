import "./chats-list.css";
import "_styles/main.css";
import data from "_assets/chats-list.json";
import {isCurrentUser} from "_utils/check-user";

const body = document.querySelector(".body-container");

renderPage();

function renderPage() {
    data.forEach(chat => {
        const chatElement = createChatElement(chat);
        chatElement.addEventListener("click", () => {
            location.href = "chat.html";
        })
        body.append(chatElement);
    })
}

function createChatElement({
                               title,
                               imgSrc,
                               lastMsg: {userId, text, timestamp, attachments, status, unreadCount, isMentioned}
                           }) {
    const chat = document.createElement("div");
    chat.className = "chat";

    const img = document.createElement("img");
    img.className = "chat-img";
    img.src = imgSrc;
    img.alt = "";
    chat.appendChild(img);

    const firstLineContainer = document.createElement("div");
    firstLineContainer.className = "msg-line";

    const chatTitle = document.createElement("div");
    chatTitle.className = "chat-title";
    chatTitle.textContent = title;
    firstLineContainer.appendChild(chatTitle);

    const lastMsgTime = document.createElement("span");
    lastMsgTime.className = "msg-time";
    lastMsgTime.textContent = `${new Date(timestamp).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    })}`;
    firstLineContainer.appendChild(lastMsgTime);

    const secondLineContainer = document.createElement("div");
    secondLineContainer.className = "msg-line";

    const lastMsgText = document.createElement("div");
    lastMsgText.className = "msg-text";
    lastMsgText.textContent = `${text} ${attachments.length? attachments[0].name : ""}`;
    secondLineContainer.appendChild(lastMsgText);

    if (isCurrentUser(userId)) {
        const statusIcon = document.createElement("i");
        statusIcon.className = "material-symbols-outlined";
        statusIcon.textContent = ("read" === status)? "done_all": "done";

        const chatStatus = document.createElement("span");
        chatStatus.className = "msg-done-all";
        chatStatus.appendChild(statusIcon);

        secondLineContainer.appendChild(chatStatus);
    } else if (unreadCount !== 0) {
        const chatUnreadCount = document.createElement("span");
        chatUnreadCount.className = `unread-count ${isMentioned? "mentioned": ""}`;
        chatUnreadCount.textContent = `${isMentioned? "@": ""}  ${unreadCount}`;

        secondLineContainer.appendChild(chatUnreadCount);
    }

    const msg = document.createElement("div");
    msg.className = "msg-content";
    msg.appendChild(firstLineContainer);
    msg.appendChild(secondLineContainer);
    chat.appendChild(msg);

    return chat;
}
