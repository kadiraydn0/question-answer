import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name: { type: String, required: [true, "Please provide a name"] },
    email: { type: String, required: true, unique: [true, "Please try different email."], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    password: { type: String, minlength: [6, "Please provide a password with min lenght 6."], required: [true, "Please provide a password."], select: false },
    title: { type: String },
    about: { type: String },
    place: { type: String },
    website: { type: String },
    profile_img: { type: String, default: "default.jpg" },
    blocked: { type: Boolean, default: false }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);

export default User;