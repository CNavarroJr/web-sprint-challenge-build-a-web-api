const express =require('express');
const actionModel = require("../helpers/actionModel");

const router = express.Router();


// CREATE - POST
router.post("/", (req, res) => {

    const actionsInfo = req.body;
    actionModel.insert(actionsInfo)
    
      .then(() => {
        res.status(201).json({message: "Your action was created"})
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({errorMessage:"Error action can be created"})
      })
  })

// READ - GET
router.get("/", (req, res) => {

    actionModel.get(req.id)
  
      .then(data => {
        res.status(200).json(data)
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({ errorMessage: "Error getting actions" })
      })
  })


// UPDATE - PUT
router.put("/:id", (req, res) => {

    const actionsInfo = req.body
    const { id } = req.params
  
    actionModel.update(id, actionsInfo)
      .then(data => {
        if (data) {
          res.status(200).json({message: "Your action was updated"})
        } else {
          res.status(404).json({message: "The action could not be updated, it was nopt found"})
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: "Something went wrong"})
      })
  });


// DELETE - DELETE
router.delete("/:id", (req, res) => {
    actionModel.remove(req.params.id)
    .then(data =>{
      if (data > 0) {
        res.status(200).json({message: "The action was deleted"})
      } else {
        res.status(404).json({message: "The action could not be deleted"})
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Something went wrong"})
    })
  })  



module.exports = router;