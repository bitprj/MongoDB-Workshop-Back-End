var bcrypt = require('bcrypt')
const auth = async (req, res, next) =>{
    bcrypt.compare("user guess", hash)
        next();
}

module.exports = auth