const validator = require("validator");

const validateSignUpData = async (req) => {
    const { email, password, firstName, lastName, age } = req.body;

    if (!firstName || !lastName) {
        throw new Error("Please enter a valid first or last name");
    } else if (!validator.isEmail(email)) {
        throw new Error("Please enter a valid email address");
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong password");
    } else if (validator.isLength(age.toString(), { min: 18 })) {
        throw new Error("You need to be at least 18 to sign up");
    }
};

const validateProfileEditData = async (req) => {
    const ALLOWED_EDIT_FIELDS = [
        "firstName",
        "lastName",
        "gender",
        "about",
        "skills",
        "photoUrl",
        "age",
    ];

    const isEditAllowed = Object.keys(req.body).every((key) =>
        ALLOWED_EDIT_FIELDS.includes(key)
    );

    return isEditAllowed;
};

// TODO
const validateUpdatePassword = async (req) => {};

// module.exports = validateSignUpData;
module.exports = {
    validateSignUpData,
    validateProfileEditData,
    validateUpdatePassword,
};
