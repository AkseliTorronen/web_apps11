var express = require('express');
var router = express.Router();

const Book = require("../models/Book");

router.post('/book', (req, res, next) => {
    console.log(req);
    Book.create({
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    },
    (err, ok) => {
        if(err) throw err;
        return res.json({eat: "a poop"});
    })
});

module.exports = router;