import jwt from "jsonwebtoken";
const authenticate = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized",success: false,authenticated: false });
    }

    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden" ,success: false ,authenticated: false});
        }
        req.user = decoded.user;
        next();
    });
}

export default authenticate;