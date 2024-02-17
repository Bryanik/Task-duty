import jwt from "jsonwebtoken"

const generateToken = (id)=> {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY), {
        expiresIn: "Id",
    };
};

export default generateToken;