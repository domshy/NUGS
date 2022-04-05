const jwt = require('jsonwebtoken');

//verify
const verifyJWT = (req, res, next) => {

    const token = req.headers["x-access-token"]

    if (!token) {
        res.send("User not logged in!");
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "you failed to auth" });
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

const generateJwt = (data, config) => {
    return jwt.sign({data}, process.env.TOKEN_SECRET, config);
};

module.exports = {
    verifyJWT,
    generateJwt
}