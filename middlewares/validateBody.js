const { HttpError } = require("../helpers");

const validateBody = (schema) => (req, res, next) => {
    if (req.method === "POST" &&
        Object.keys(req.body).length < 1 &&
        req.path !== "/verify") {
        throw HttpError(400, "Missing fields");
    }
    const { error } = schema.validate(req.body);
    if (error) {
        throw HttpError(400, error.message);
    }
    next();
};

module.exports = validateBody;