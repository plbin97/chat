let model = require("./index");
let testRoomName = "room Name";
let anotherTestRoomName = "another room name";
let testUserName = "my name";
let testTalkToUserFunc = (msgType, msg) => {

}
let testRoomId;
let testUserId

test("add Room", async (done) => {
    testRoomId = await model.addRoom(testRoomName);
    expect(typeof testRoomId).toBe("string");
    let moreRoom = await model.addRoom(testRoomName);
    expect(moreRoom).toBe(null);
    done();
})

test("Get room by Id", async (done) => {
    expect(typeof await model.getRoomById(testRoomId)).not.toBe("null");
    expect(await model.getRoomById("testRoomId")).toBe(null);
    done();
})

test("Get room by name", async (done) => {
    expect(typeof await model.getRoomByName(testRoomName)).not.toBe("null");
    expect(await model.getRoomByName("testRoomName")).toBe(null);
    done();
})

test("Change room name", async (done) => {
    expect(await model.changeRoomName(testRoomId, anotherTestRoomName)).toBe(true);
    expect(await model.changeRoomName("something", anotherTestRoomName)).toBe(false);
    expect(await model.changeRoomName(testRoomId, testRoomName)).toBe(true);
    done();
})

test("Add user to room", async (done) => {
    testUserId = await model.addUserToRoom(testUserName, testRoomId, true, testTalkToUserFunc);
    expect(typeof testUserId).toBe("string");
    expect(await model.addUserToRoom(testUserName, "something", false, testTalkToUserFunc)).toBe(null);
    done()
})

test("Drop user from room", async (done) => {
    expect(await model.dropUserFromRoom(testUserId, testRoomId)).toBe(true);
    expect(await model.dropUserFromRoom(testUserId, testRoomId)).toBe(false);
    done();
})

test("Drop room", async (done) => {
    await model.dropRoom(testRoomId);
    expect(await model.getRoomById(testRoomId)).toBe(null);
    done();
})