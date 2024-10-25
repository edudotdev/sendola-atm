import jwt from 'jsonwebtoken'
const JWT_SECRET = 'secret';

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.access_token
    req.session = { card: null }
    if (!token) {
        return res.status(401).json({ message: 'Access no autorized' })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.session.card = data
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    next()
}
