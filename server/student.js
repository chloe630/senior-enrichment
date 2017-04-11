'use strict';

const db = require('../db');
const Student = db.model('student');

module.exports = require('express').Router()
  .param('id', (req, res, next, id) =>
    Student.findById(id)
      .then(student => {
        if (!student) {
          let err = new Error("No one was found.. ");
          err.status = 404;
          return next(err);
        }
        else {
          req.student = student;
          next();
        }
      })
      .catch(next))
  .get('/', (req, res, next) =>
    Student.findAll({
      where: req.query
    })
      .then(users => res.json(users))
      .catch(next))
  .post('/', (req, res, next) =>
    Student.create(req.body)
      .then(student => res.status(201).json(user))
      .catch(next))
  .get('/:id', (req, res, next) =>
    res.json(req.student))
  .put('/:id', (req, res, next) =>
    req.student.update(req.body)
      .then(updatedStudent => res.json(updatedStudent))
      .catch(next))
  .delete('/:id', (req, res, next) =>
    req.student.destroy()
      .then(() => res.status(204).end())
      .catch(next)
  );