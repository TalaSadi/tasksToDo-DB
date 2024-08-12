const express = require('express');
const router = express.Router();
const Task = require('./schema');
const mongoose = require('mongoose');



router.post('/', (req, res) => {


    (Task.create(req.body).then(function (task) {
        res.send(task)
    }))

});


router.get('/', (req, res) => {

    Task.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
});


router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete({ _id: req.params.id }).then(function (task) {
        res.send(task)
    })


})

router.put('/:id', (req, res) => {
    console.log(req.body.state)

    let newState = req.body.state === 'done' ? 'undone' : 'done'


    console.log(req.params.id, req.body.state, newState);

    Task.findByIdAndUpdate({ _id: req.params.id }, { state: newState }).then(function (task) {
        res.send(task)


    }).catch((e) => {
        console.log(e)
    })


})

module.exports = router;


