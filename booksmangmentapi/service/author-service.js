const author = require("../entites/author");
const Authorrepost = require("../controller/author-repository");
const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

let authorrepost = new Authorrepost();

function addauthor(req, res) {
  var authorlist = new author({
    id: req.body.id,
    name: req.body.name,
    biography: req.body.biography,
    birthdate: req.body.birthdate,
    email: req.body.email,
    listofbook: req.body.listofbook,
  });
  console.log(authorlist);
  authorrepost
    .Add(authorlist)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "succesfully added",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error",
        error: err,
      });
    });
}
function findAll(req, res) {
  authorrepost
    .getAll()
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error",
        error: err,
      });
    });
}
function findbyId(req, res) {
  id = req.params.id;
  authorrepost
    .getById(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error",
        error: err,
      });
    });
}
function findByBook(req, res) {
  name = req.params.name;
  console.log("book", name);
  authorrepost
    .getByBook(name)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error",
        error: err,
      });
    });
}
function updateauthor(req, res) {
   var updatedlist = {
    id: req.params.id,
    name: req.body.name,
    biography: req.body.biography,
    birthdate: req.body.birthdate,
    email: req.body.email,
    listofbook: req.body.listofbook,
  };
  authorrepost
    .update(updatedlist)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error",
        error: err,
      });
    });
}
function removeauthor(req, res) {
  id = req.params.name;
  console.log("remove author");
  authorrepo
    .remove(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
routes.get("/author/findall", findAll);
routes.get("/author/:id", findbyId);
routes.get("/author/findbook/:name", findByBook);
routes.put("/author/updateauthor/:id", updateauthor);
routes.post("/author/addauthor", addauthor);
routes.delete("/author/removeauthor/:id", removeauthor);

module.exports = routes;
