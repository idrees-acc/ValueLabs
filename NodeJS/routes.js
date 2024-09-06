/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */
 
const sumController = require('./controller.js')
const JWTValidate = require('./auth.js')
const ValidateNumber = require('./validate.js')
 
routes.get('sumTwoNumber',JWTValidate,ValidateNumber,sumController)