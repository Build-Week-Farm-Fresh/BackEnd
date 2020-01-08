function validateUserData(req, res, next) {
    const user = req.body;
    if (!user.username) {
        res.status(400).json({ errorMessage: "missing required username field"});
    } else {
        console.log('user validated');
        next();
    }
}

module.exports = validateUserData;