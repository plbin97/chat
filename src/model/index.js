let rooms = {};
let editRoom = require('./editRoom');
let user = require('./users');

/**
 *
 * @param roomName
 * @returns {Promise<string | null>}
 * If no error, then return the roomId; otherwise return null;
 */
exports.addRoom = async (roomName) => {
    return await editRoom.addRoom(rooms,roomName);
}

/**
 *
 * @param roomId
 * @returns {Promise<null|Object>}
 * return Room object
 */
exports.getRoomById = async (roomId) => {
    if (rooms[roomId] === undefined) {
        return null;
    }

    return rooms[roomId];
}


/**
 *
 * @param roomName
 * @returns {Promise<null | Object>}
 */
exports.getRoomByName = async (roomName) => {
    return await editRoom.getRoomByName(rooms, roomName);
}

/**
 *
 * @param roomId
 * @param roomNewName
 * @returns {Promise<boolean>}
 * if changed without error, return true; otherwise, return false;
 */
exports.changeRoomName = async (roomId, roomNewName) => {
    return await editRoom.changeRoomName(rooms, roomId, roomNewName);
}


/**
 *
 * @param userName
 * @param roomId
 * @param isAdmin
 * @returns {Promise<String | null>}
 * if no error, return userId; otherwise return null
 */
exports.addUserToRoom = async (userName, roomId, isAdmin, talkToUserFunc) => {
    return await user.addUserToRoom(rooms, userName, roomId, isAdmin, talkToUserFunc);
}

/**
 *
 * @param userId
 * @param roomId
 * @returns {Promise<boolean>}
 * if no error, return true
 */
exports.dropUserFromRoom = async (userId, roomId) => {
    return await user.dropUserFromRoom(rooms, userId, roomId);
}

/**
 *
 * @param roomId
 * @returns {Promise<void>}
 */
exports.dropRoom = async (roomId) => {
    delete rooms[roomId];
}