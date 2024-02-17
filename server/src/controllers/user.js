import createHttpError from "http-errors"
import User from "../models/user.js"
import bcrypt from "bcrypt"
import generateToken from "../config/generateToken.js";

export const registerUser = async(req, res, next) => {
    const {username, email, password} = req.body
    try {
        if(!username || !email || !password) {
            return next(
                createHttpError(400, "Form fields missing, please fill the form")
            );
        }
        const userNameExists = await User.findOne({ username: username });
        if(userNameExists) {
            return next(
                createHttpError(400, "Username already exists, pls choose another")
            );
        }
        const emailExists = await User.findOne({ email: email });
        if (emailExists) {
            return next(
                createHttpError(400, "Email already exists, pls choose another")
            );
        }
        if(!userNameExists || !emailExists ) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const user = await User.create({
                username: username,
                email: email,
                password: hashedPassword,
            });
            const access_token = generateToken(user._id);
            res.status(201).json({ access_token, msg: "User signup success" });
        }
    } catch (error) {
        next(error)
    }
};

export const loginUser = async (req, res, next) => {
    const {username, password} = req.body
    
}