const db = require("../db/db.json")
const store = require("../db/store")
const router = require("express").Router();

// GET route
router.get("/notes", (req, res) => {
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});
router.post("/notes", (req, res) => {
    store
        .addNotes(req.body)
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

// DELETE

router.delete("/notes:id", (req, res) => {
    store
        .removeNotes(req.params.id)
        .then(() => res.json())
        .catch((err) => res.status(500).json(err));
});

module.exports = router;