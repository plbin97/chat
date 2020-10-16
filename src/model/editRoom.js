let model = require('./index');

let {v4: uuidGenerator} = require('uuid');

exports.addRoom = async (rooms,roomName) => {
    if (await model.getRoomByName(roomName) === null) {
        let roomId = uuidGenerator();
        rooms[roomId] = {
            name: roomName,
            users: [],
            locked: false
        };
        return roomId;
    }
    return null;
}

exports.getRoomByName = async (rooms,roomName) => {
    for (let roomId in rooms) {
        if (rooms[roomId].name === roomName) {
            return rooms[roomId];
        }
    }
    return null;
}

exports.changeRoomName = async (rooms, roomId, roomNewName) => {
    let room = await model.getRoomById(roomId);
    if (await room === null) {
        return false;
    }
    room.name = roomNewName;
    return true;
}

