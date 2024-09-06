/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */

function sumController(req, res) {
    res.status(200).send(req.query.a + req.query.b);
}

module.exports = { sumController };