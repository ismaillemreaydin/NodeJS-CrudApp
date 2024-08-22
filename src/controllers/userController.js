// src/controllers/userController.js
const userModel = require('../models/userModel');

function getAllUsers(req, res) {
    res.json(userModel.getAllUsers());
}

function getUserById(req, res) {
    const user = userModel.getUserById(parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
}

function createUser(req, res) {
    const { username, password } = req.body;
    const newUser = userModel.createUser(username, password);
    res.status(201).json(newUser);
}

function updateUser(req, res) {
    const { username, password } = req.body;
    const updatedUser = userModel.updateUser(parseInt(req.params.id), username, password);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).send('User not found');
    }
}

function deleteUser(req, res) {
    userModel.deleteUser(parseInt(req.params.id));
    res.status(204).send();
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
