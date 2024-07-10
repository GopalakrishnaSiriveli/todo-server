const validator = require('validator');

const isValidDomain = (domain) => {
    const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];
    // Check if any character in the domain part is uppercase
    if (/[A-Z]/.test(domain)) {
        console.log("Invalid domain format - Uppercase letters detected:", domain);
        return false;
    }
    if (!validDomains.includes(domain.toLowerCase())) {
        console.log("Invalid domain:", domain);
        return false;
    }
    return true;
};

const validateEmail = (req, res, next) => {
    let { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        console.log("Invalid email format detected by regex:", email);
        return res.status(400).send({ message: 'Invalid email format' });
    }

    const atIndex = email.indexOf('@');
    const domain = email.slice(atIndex + 1);
    
    if (!isValidDomain(domain)) {
        console.log("Invalid domain:", domain);
        return res.status(400).send({ message: 'Invalid email domain' });
    }

    if (!validator.isEmail(email)) {
        console.log("Invalid email format detected by validator:", email);
        return res.status(400).send({ message: 'Invalid email format' });
    }

    req.body.email = email;
    console.log("Email is valid:", email);
    next();
};

module.exports = validateEmail;

















