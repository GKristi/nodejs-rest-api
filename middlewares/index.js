const validateBody = require("./validateBody");
const validateFavorite = require("./validateFavorite");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const validateSubscription = require("./validateSubscription");
const upload = require("./upload");
const resizeAvatar = require("./resizeAvatar");
const validateAvatar = require("./validateAvatar");

module.exports = {
    validateBody,
    validateFavorite,
    isValidId,
    authenticate,
    validateSubscription,
    upload,
    resizeAvatar,
    validateAvatar,
};