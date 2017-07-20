var express = require('express');
var dbClient = require('mariasql');
var router = express.Router();

/* GET product resource. */
router.get('/:pVnr', function(req, res, next) {

    var tClient = new dbClient({host: '127.0.0.1', user: 'test', password: 'test', db: 'test'});
    var tSql = tClient.prepare('select * from pakkaus_0 where vnrnro = :qVnrNro');

    tClient.query(tSql({qVnrNro : req.params.pVnr}), function(err, rows) {
        if (err) throw err;
        console.dir(rows);
        res.send(rows);
    });
    tClient.end();
});

module.exports = router;

