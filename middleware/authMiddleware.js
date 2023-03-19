const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({
                message: "auth failaed",
                success: false,
            });
        }
        const [, token] = authHeader.split(" ");
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decoded) => {
                if (err) {
                    console.log(err);

                    return res.status(401).send({
                        message: "auth faiaed",
                        success: false,
                    });
                } else {
                    console.log(decoded);
                    next();
                }
            }
        );
    } catch (error) {
        return res.status(401).send({
            message: "auth faiaed",
            success: false,
        });
    }
}