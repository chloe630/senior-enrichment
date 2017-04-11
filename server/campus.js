'use strict';

const db = require('../db');
const Campus = db.model('campus');


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
    Campus.findAll({
      where: req.query
    })
      .then(users => res.json(users))
      .catch(next))
  .post('/', (req, res, next) =>
    Campus.create(req.body)
      .then(campus => res.status(201).json(user))
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

