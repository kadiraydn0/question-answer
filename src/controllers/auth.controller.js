import { createUser } from "../services/auth.service.js"


export async function createUserHandler(req, res) {

    let data = req.body
    await createUser(data);

    res.status(200).json({ success: true, message: "User is successfuly created." });
}