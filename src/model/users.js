let model = require('./index');
let {v4: uuidGenerator} = require('uuid');

let createUser = (userId, userName, isAdmin, talkToUserFunc) => {
    return {
        userId:userId,
        userName: userName,
        isAdmin: isAdmin,
        talkToUserFunc
    }
}

exports.addUserToRoom = async (rooms, userName, roomId, isAdmin, talkToUserFunc) => {
    let room = await model.getRoomById(roomId);
    if (room === null) {
        return null;
    }
    if (room.locked) {
        return null;
    }
    let newUserId = uuidGenerator();
    let newUser = createUser(newUserId, userName, isAdmin, talkToUserFunc);
    room.users.push(newUser);
    return newUserId;

}

exports.dropUserFromRoom = async (rooms, userId, roomId) => {
    let room = await model.getRoomById(roomId);
    for (let i = 0; i < room.users.length; i ++) {
        if (room.users[i].userId === userId) {
            room.users.splice(i,1);
            return true;
        }
    }
    return false;
}