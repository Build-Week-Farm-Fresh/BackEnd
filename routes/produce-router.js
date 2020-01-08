const express = require("express");
const router = express.Router();
const Produce = require("../models/produce-model.js");

router.post("/", (req, res, next) => {
  Produce.insert(req.body)
    .then(produce => {
      res.status(200).json(produce);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/", (req, res, next) => {
  Produce.getByFarmer(req.body.id) // react needs to pass the farmer ID in to the req body
    .then(produce => {
      res.status(200).json(produce);
    })
    .catch(err => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  Produce.update(req.params.id, req.body) // body needs to include produce id as well as all fields
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(err => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Produce.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
