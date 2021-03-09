const router = require("express").Router();
const TestObject = require("../models/testObject.model");

router.route("/").get((req, res) => {
  TestObject.find()
    .then((testObject) => res.json(testObject))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const newObject = new TestObject({
    name: req.body.name,
    description: req.body.description,
  });
  newObject
    .save()
    .then(() => res.json("New object added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
