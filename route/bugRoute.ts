let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Bug = require('../model/bugModel')

router.post('/bugRoute', function(req, res, next) {
  let newBug = new Bug(
    {
    bugName: req.body.bugName,
    description: req.body.description,
    discoveredBy: req.body.discoveredBy,
    assignedTo: req.body.assignedTo,
    date_created: new Date()
  }
);
  newBug.save(function(err, bug) {
       if(err) return next(err);
       res.send("This bug has been added");
  });
});
export = router;
