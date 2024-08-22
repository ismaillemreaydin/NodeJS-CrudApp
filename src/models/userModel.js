// src/models/userModel.js
let users = [];
let id = 1;

class User {
    constructor(username, password) {
        this.id = id++;
        this.username = username;
        this.password = password;
    }
}

function getAllUsers() {
    return users;
}

function getUserById(userId) {
    return users.find(user => user.id === userId);
}

function createUser(username, password) {
    const user = new User(username, password);
    users.push(user);
    return user;
}

function updateUser(userId, username, password) {
    const user = getUserById(userId);
    if (user) {
        user.username = username;
        user.password = password;
    }
    return user;
}

function deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
