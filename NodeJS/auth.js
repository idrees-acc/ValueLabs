/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */
import jwt from 'jwt'

function JWTValidate(req, res) {
    const validate = jwt.verify(req.headers.authorization.split(' ')[1])
    if(validate){
      return true
    } else{
      throw 'User Invalid'
    }
}

module.exports = { JWTValidate };