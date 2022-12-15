const { ValidationError } = require('express-validation');

module.exports = (err, req, res, next) => {
    if(err instanceof Error) {
        return res.status(err.statusCode).json(err);
    }

    return res.status(500).json(err);
};