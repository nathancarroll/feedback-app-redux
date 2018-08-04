const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/api/feedback', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id"`)
        .then((PGres) => {
            console.log(PGres);
            res.send(PGres.rows);
        })
        .catch((err) => {
            console.log('error during GET', err);
            res.sendStatus(500);
        })
})

app.post('/api/feedback/', (req, res) => {
    console.log('reached feedback POST route', req.body);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((PGres) => {
            console.log(PGres);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error during POST', err);
            res.sendStatus(500);
        })
})

app.delete('/api/feedback/:id', (req, res) => {
    console.log('reached feedback DELETE route', req.params.id);
    pool.query(`DELETE FROM "feedback" WHERE "id" = $1;`, [req.params.id])
        .then((PGres) => {
            console.log(PGres);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error during DELETE', err);
            res.sendStatus(500);
        })
})

app.put('/api/feedback/:id', (req, res) => {
    console.log('reached feedback PUT route', req.params.id);
    pool.query(`UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1;`, [req.params.id])
        .then((PGres) => {
            console.log(PGres);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error during PUT', err);
            res.sendStatus(500)
        })
})


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});