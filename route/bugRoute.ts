let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Bug = require('../model/bugModel')


router.post('/bugs', function(req, res, next) {
  let newBug = new Bug(
    {
    bugName: req.body.bugName,
    description: req.body.description,
    discoveredBy: req.body.discoveredBy,
    assignedTo: req.body.assignedTo,
    date_created: new Date()
  }
);
console.log(newBug)
  newBug.save(function(err, bug) {
       if(err) {console.log(err)}
       else {res.json("This bug has been added")};
  });
});


router.get('/bugs', (req, res, next) => {
  Bug.find().then((bug) => {
    res.send(bug);
  })
});

export = router;
