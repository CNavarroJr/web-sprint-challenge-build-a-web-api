const express = require('express');
const projectModel = require('../helpers/projectModel');


const router = express.Router();


// CREATE - .POST
router.post("/", (req, res) => {

    const projectsInfo = req.body 
    projectModel.insert(projectsInfo)
  
      .then(() => {
        res.status(201).json({message: "Your post was created"})
      }) 
      .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Something went wrong"})
      })
  })


 // READ - .GET
router.get("/", (req, res) => {

    projectModel.get(req.id)
  
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Something went wrong"})
      })
  }) 


// UPDATE - .PUT
router.put("/:id", (req, res) => { 

    const projectsInfo = req.body
    const { id } = req.params
  
    projectModel.update(id, projectsInfo)
      .then(data => {
        if (data) {
          res.status(200).json({message: "Your project was updated"})
        } else {
          res.status(404).json({message: "The project can not be updated, it was not found"})
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Something went wrong"})
      })
  });  


// DELETE - .DELETE
router.delete("/:id", (req, res) => {
    projectModel.remove(req.params.id)
      .then(data => {
        if (data > 0) {
          res.status(200).json({message: "Your project was deleted"})
        } else {
          res.status(404).json({message: "Your project cant be deleted, it was not found"})
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Something went wrong"})
      })
  })  


// getProjectActions() - .PUT
router.get("/:id/actions", (req, res) => {

    projectModel.getProjectActions(req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Something went wrong"})
      })
  })  


  module.exports = router;  
