const express = require("express");
const actions = require("../helpers/actionModel");
const router = express.Router();

// GET --working
router.get("/", (req, res) => {
    actions
      .get()
      .then(data => res.json(data))
      .catch(err => res.status(500).json({ message: "could not find actions" }));
  });
  
  //PUT 
  router.put("/:id", (req, res) => { //working 
    actions
    .update(req.params.id, req.body) //when updating we need the id and body content
    .then(updated => { //go to actions db, if its good, we'll see the updated content, otherwise 
      if (updated) {
        res.json(updated)
      } else {
        res.status(404).json({message: "invalid actions id"})
      }
    })
    .catch(err => res.status(500).json({message: "could not create actions"}));
  })

//[x] post is working! 
//POST post/actions/ -> select project_id from projmodel.js 
router.post("/", (req, res) => { //all we'd need is just /, don't have to direct it anywhere
    actions
    .insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "actions cannot post"
      });
    });
});

// DELETE ----working
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    actions.remove(id)
    .then(action => {res.status(200).json(action)})
    .catch(err => {res.status(500).json({errorMessage:`could not delete action by id`, err})})
})

  module.exports = router;