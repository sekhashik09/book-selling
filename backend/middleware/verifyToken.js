import jwt from "jsonwebtoken";

export const verifyToken = (req, res,next) =>{
    const token = req.cookies.token;
    if(!token)
        return res.status(401).json({ success: false, message: "No token provided" });
    
    try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded)
        return res.status(401).json({ success: false, message: "Token is invalid" });
    
    req.userId = decoded.userId
    next()
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}