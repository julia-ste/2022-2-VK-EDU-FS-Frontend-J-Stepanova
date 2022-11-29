import "./chat.css";
import "_styles/main.css";
import data from "_assets/chat-history.json";
import {isCurrentUser, CURRENT_USER_ID} from "_utils/check-user";

const CHAT_KEY = "chat";

const chat = document.querySelector(".body-container");
const form = document.querySelector("form");
const options = document.querySelector(".options");
const optionsButton = document.querySelector(".options-btn");
const backButton = document.querySelector(".arrow-back-btn");

form.addEventListener("keypress", handleKeyPress);
form.addEventListener("submit", handleSubmit);
optionsButton.addEventListener("click", () => {
    options.style.display = (options.style.display === "none") ? "block" : "none";
});
backButton.addEventListener("click", () => {
    location.href="index.html"
});

renderPage();

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function scroll() {
    chat.scrollTop = chat.scrollHeight;
}

function validateMessage({userId, text, timestamp, attachments}) {
    const hasAttachments = attachments.length;
    return userId >= 0 && timestamp >= 0
        && (!hasAttachments && text
            || hasAttachments && attachments.every(obj => obj.type && obj.src));
}

function renderPage() {
    data.filter(validateMessage)
        .forEach((message) => chat.append(createMessageElement(message)));

    if (window.localStorage) {
        getFromLocalStorage(CHAT_KEY)
            .filter(validateMessage)
            .forEach((message) => chat.append(createMessageElement(message)));
        scroll();
    }
}

function formMessage(text) {
    return {
        userId: CURRENT_USER_ID,
        text: text,
        timestamp: new Date().valueOf(),
        attachments: [],
    }
}

function createMessageElement({userId, text: rawText, timestamp, attachments}) {
    const message = document.createElement("div");
    message.className = "msg-content";

    if (attachments) {
        const media = document.createElement("div");
        media.className = "msg-media";
        for (const {type, src} of attachments) {
            if (type === "image") {
                const img = document.createElement("img");
                img.className = "msg-img";
                img.src = src;
                img.alt = "";
                media.appendChild(img);
            }
        }
        message.append(media);
    }

    if (rawText) {
        const text = document.createElement("div");
        text.className = "msg-text";
        text.textContent = rawText;
        message.append(text);
    }

    const metadata = document.createElement("div");
    metadata.className = "msg-meta";

    const time = document.createElement("span");
    time.className = "msg-time";
    time.textContent = `${new Date(timestamp).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    })}`;
    metadata.appendChild(time);

    if (isCurrentUser(userId)) {
        const doneAllIcon = document.createElement("i");
        doneAllIcon.className = "material-symbols-outlined small-icon";
        doneAllIcon.textContent = "done_all";

        const doneAll = document.createElement("span");
        doneAll.className = "msg-done-all";
        doneAll.appendChild(doneAllIcon);

        metadata.appendChild(doneAll);
    }

    message.append(metadata);

    const container = document.createElement("div");
    container.className = isCurrentUser(userId) ? "msg-bubble right" : "msg-bubble left";
    container.appendChild(message);

    return container;
}

function handleSubmit(event) {
    event.preventDefault();

    const input = event.target.querySelector(".form-input");
    const newMessage = formMessage(input.value);
    chat.append(createMessageElement(newMessage));
    input.value = "";
    scroll();

    if (window.localStorage) {
        const chatHistory = getFromLocalStorage(CHAT_KEY);
        chatHistory.push(newMessage);
        saveToLocalStorage(CHAT_KEY, chatHistory);
    }
}

function isBlank(str) {
    return !str || str.trim().length === 0;
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if (!isBlank(event.target.value)) {
            form.dispatchEvent(new Event("submit"));
        }
    }
}
