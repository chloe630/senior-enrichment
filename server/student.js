'use strict';

const Student = [{
  id: 1,
  name: 'Mocha',
  email: 'mocha@meow.com',
  image: 'http://placekitten.com/200/300'
}, {
  id: 2,
  name: 'Galgal',
  email: 'galgal@meow.com',
  image: 'http://placekitten.com/200/300'
}, {
  id: 3,
  name: 'Ino',
  email: 'ino@meow.com',
  image: 'http://placekitten.com/200/300'
}, {
  id: 4,
  name: 'Bandi',
  email: 'bandi@meow.com',
  image: 'http://placekitten.com/200/300'
}, {
  id: 5,
  name: 'Garfield',
  email: 'garfiled@meow.com',
  image: 'http://placekitten.com/200/300'
}];


const db = require('../db');
// const Student = db.model('student');

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
      .then(students => res.json(students))
      .catch(next))
  .post('/', (req, res, next) =>
    Student.create(req.body)
      .then(createdStudent => res.status(201).json(createdStudent))
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