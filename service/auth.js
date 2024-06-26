const sesstionIdToUserMap = new Map();

function setUser(id, user) {
    sesstionIdToUserMap.set(id, user);

}

function getUser(id) {
    return sesstionIdToUserMap.get(id);
}

function removeUser(id) {
    return sesstionIdToUserMap.delete(id);
}

module.exports = {
    setUser,
    getUser,
    removeUser
}