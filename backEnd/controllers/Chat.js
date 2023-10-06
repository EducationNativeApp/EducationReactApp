const users = [];

function userJoinGroup(id, username, room) {
  const user = {id, username, room};

  users.push(user);

  return user;
}

function getCurrentUserDetails(id) {
  return users.find((user) => user.id === id);
}

function userLeaveGroup(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = {
  userJoinGroup,
  getCurrentUserDetails,
  userLeaveGroup,
};
