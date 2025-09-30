
function isLoggedIn(activeTokens) {
    return (req, res, next) => {
        const token = req.headers["authorization"];
        if (!token) {
            console.log("משתמש לא מחובר");
            return res.status(401).json({ error: "Unauthorized: אין טוקן" });
        }

        if (!activeTokens.includes(token)) {
            console.log("טוקן לא חוקי");
            return res.status(401).json({ error: "Unauthorized: טוקן לא חוקי" });
        }

        next();
    };
}

module.exports = { isLoggedIn };
