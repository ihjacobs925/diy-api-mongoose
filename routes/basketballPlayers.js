const express = require('express');
const router = express.Router();
const basketballPlayer = require('../models/basketballPlayer');


// Index - GET /basketballPlayers
router.get('/', (req, res) => {
    basketballPlayer.find({}, (err, basketballPlayers) => {
        if (err) {
            console.error(`ERROR in basketballPlayers INDEX ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in basketballPlayers index ROUTE`})
        }
        res.json({ basketballPlayers });
    });
});

// Details - GET /basketballPlayers/:id
router.get('/:id', (req, res) => {
    basketballPlayer.findById(req.params.id, (err, basketballPlayer) => {
        if (err) {
            console.error(`ERROR in basketballPlayers DETAIL ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in basketballPlayers DETAILS ROUTE`})
        }
        res.json({ basketballPlayer });
    });
});

// Create - POST
router.post('/', (req, res) => {
    console.log(req.body);
    basketballPlayer.create(req.body, (err, basketballPlayer) => {
        if (err) {
            console.error(`ERROR in basketballPlayers create ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in basketballPlayers create ROUTE`})
        }
        res.json({ basketballPlayer });
    });
});

// Update - PUT /basketballPlayers/:id
router.put('/:id', (req, res) => {
    basketballPlayer.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, basketballPlayer) => {
        if (err) {
            console.error(`ERROR in basketballPlayers update ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in basketballPlayers update ROUTE`})
        }
        res.json({ basketballPlayer });
    });
});

// Delete - DELETE /basketballPlayers/:id
router.delete('/:id', (req, res) => {
    basketballPlayer.findByIdAndDelete(req.params.id, (err, basketballPlayer) => {
        if (err) {
            console.error(`ERROR in basketballPlayers delete ROUTE:\n${err}`);
            res.status(500).json({ error: `ERROR in basketballPlayers delete ROUTE`})
        }
        res.json({ deleted: user })
    });
});

module.exports = router;