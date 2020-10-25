const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {

    let queryText = `UPDATE "galleryitems" SET "likes" = "likes" + 1 WHERE "id" = $1`
    pool.query(queryText,[req.params.id]).then( (response) => {
        console.log(response.rows, 'rows updated');
        res.sendStatus(200)
    }).catch( (error) => {
        console.log('error', error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText =  `SELECT * FROM "galleryitems" ORDER BY "id" DESC;`
    pool.query(queryText).then( (results) =>{
        console.log(results.rows);
        res.send(results.rows);
    }).catch( (error) => {
        console.log(error);
    });
   
}); // END GET Route

router.post('/', (req, res) => {
    console.log(req.body);
    let path = req.body.path
    let description = req.body.description
    let queryText = `
    INSERT INTO galleryItems ("path", "description")
    VALUES ($1, $2);`;
    pool.query(queryText, [path, description]).then( (response) => {
        console.log('response from server', response);
    }).catch( (error) => {
        console.log(error);
    });
})

module.exports = router;