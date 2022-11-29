export const CURRENT_USER_ID = 0;

export function isCurrentUser(userId) {
    return CURRENT_USER_ID === userId;
}
