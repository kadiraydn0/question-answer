import User from "../models/user.model.js";


export function createUser(input) {
    return User.create(input);
}