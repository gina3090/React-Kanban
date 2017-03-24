const express = require('express');
const router = express.Router();
const db = require('../models');
const { Cards } = db;

router.route('/')
  .get((req, res) => {
    Cards.findAll()
      .then((cards) => {
        res.send(cards);
      })
      .catch((err) => {
        res.send('error', err);
      });
  })
  .post((req, res) => {
    Cards.create({
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status,
      createdBy: req.body.createdBy,
      assignedTo: req.body.assignedTo
    })
    .then((card) => {
      res.send('created');
    })
    .catch((err) => {
      res.send('error', err);
    });
  });

router.route('/:id')
  .put((req, res) => {
    Cards.findById(req.params.id)
      .then((card) => {
        card.update({
          title: req.body.title,
          priority: req.body.priority,
          status: req.body.status,
          createdBy: req.body.createdBy,
          assignedTo: req.body.assignedTo
        })
        .then((card) => {
          res.send('updated');
        })
        .catch((err) => {
          res.send('error', err);
        });
      });
  })
  .delete((req, res) => {
    Cards.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((card) => {
      res.send('deleted');
    })
    .catch((err) => {
      res.send('error', err);
    });
  });

module.exports = router;