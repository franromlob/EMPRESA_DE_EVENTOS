const { addEvent } = require("../Controller/eventController");

const router = require("express").Router();

router.post("/addEvent", addEvent);

module.exports = router;
