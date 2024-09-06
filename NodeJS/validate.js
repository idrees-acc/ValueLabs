/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */
import * as Yup from 'yup'

function ValidateNumber(a, b) {
    const validate = Yup.shape.object({
      a: Yup.number().required;
      b: Yup.number().required;
    })
}

module.exports = { ValidateNumber };