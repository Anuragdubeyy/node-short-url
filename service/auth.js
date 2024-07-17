const jwt = require("jsonwebtoken");
const secret = "Anurag@1236";

function setUser(user) {
  return jwt.sign(user, secret);
}

function getUser(id) {
    return jwt.verify()
}

function removeUser(id) {
  return sesstionIdToUserMap.delete(id);
}

module.exports = {
  setUser,
  getUser,
  removeUser,
};
