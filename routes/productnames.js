var express = require('express');
var dbClient = require('mariasql');
var router = express.Router();

/* GET product resource. */
router.get('', function(req, res, next) {

    var tClient = new dbClient({host: '127.0.0.1', user: 'test', password: 'test', db: 'test'});
    var tSql = tClient.prepare('select pakkausnro,laakenimi,vahvuus from pakkaus_0 where kaupan = 1 order by laakenimi,vahvuus');

    tClient.query(tSql(), function(err, rows) {
        if (err) throw err;
        // console.dir(rows);
        console.log(rows);
        res.send(rows);
    });
    tClient.end();
});

module.exports = router;