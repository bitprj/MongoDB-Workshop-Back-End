
const auth = async (req, res, next) =>{
    console.log('first')
    next();
}

module.exports = auth