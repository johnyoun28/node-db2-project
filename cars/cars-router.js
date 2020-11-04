const express = require('express')

const router = express.Router()
const db = require('../data/connection')

const Cars = {
    getAll() {
        return db('cars')
    },
    getById(id) {
        return db('cars').where({id}).first()
    },
    create(car) {
        return db('cars').insert(car)
    },
    update(id, car) {
        return db('cars').where({id}).update(car)
    },
    delete(id) {
        return db('cars').where({id}).del();
    }
    
}

router.get('/', (req, res) => {
    Cars.getAll()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(`${err}`)
    })
})

router.get('/:id', (req, res) =>{
    Cars.getById(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(`${err}`)
    })
})

router.post('/', (req, res) =>{
    Cars.create(req.body)
    .then(([id]) =>{
        return Cars.getById(id).first()
    })
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(`${err}`)
    })
})

router.put('/:id', (req, res) => {
    Cars.update(req.params.id, req.body)
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json(`${err}`)
    })
})

router.delete('/:id', (req, res) =>{
    Cars.delete(req.params.id) 
    .then(() =>{
        res.json('deleted')
    })
    .catch(err =>{
        res.json(`${err}`)
    })
})

module.exports = router