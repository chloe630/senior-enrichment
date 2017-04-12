'use strict';
const Campus = [{
  id: 1,
  name: 'International Meowcademy',
  image: 'http://flickholdr.com/200/300/sea,sun'
},{
  id: 2,
  name: 'Private Mewoing School',
  image: 'http://flickholdr.com/200/300/sea,sun'
}];

const db = require('../db');
// const Campus = db.model('campus');


module.exports = require('express').Router()
  .param('id', (req, res, next, id) =>
    Campus.findById(id)
      .then(campus => {
        if (!campus) {
          let err = new Error("Couldn't find the campus.. ");
          err.status = 404;
          return next(err);
        }
        else {
          req.campus = campus;
          next();
        }
      })
      .catch(next))
  .get('/', (req, res, next) =>
    Campus.findAll()
      .then(campuses => res.json(campuses))
      .catch(next))
  .post('/', (req, res, next) =>
    Campus.create(req.body)
      .then(createdCampus => res.status(201).json(createdCampus))
      .catch(next))
  .get('/:id', (req, res, next) =>
    res.json(req.campus))
  .put('/:id', (req, res, next) =>
    req.campus.update(req.body)
      .then(updatedCampus => res.json(updatedCampus))
      .catch(next))
  .delete('/:id', (req, res, next) =>
    req.campus.destroy()
      .then(() => res.status(204).end())
      .catch(next)
  );

