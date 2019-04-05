const Task = require('../models/task')
const jwt = require('jsonwebtoken')

class TaskController {
    static create(req,res) {
        try {
            let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
            console.log(decoded)

            Task.create({
                user: decoded._id,
                name: req.body.name,
                start: req.body.start,
                end: null,
                location: req.body.location,
                description: req.body.description,
                status: false
            })
             .then(data => {
                 console.log('masuk then create')
                 console.log(data)
                 res.status(201).json(data)
             })
             .catch(err => {
                 console.log('masuk catch create')
                 res.status(500).json(err)
             })
        } catch {
            res.statu(500).json(err)
        }
        
    }

    static findAll(req,res) {

        try {
            let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
            console.log(decoded)

            Task.find({user:decoded._id})
            .populate('user')
            .then (datas => {
                res.json(datas)
            })
            .catch(err => {
                res.json(err)
            })
        }
        catch {
            res.statu(500).json(err)
        }
        

        // Task.find({user:"5ca6cecfaf830035134a7001"})
        // .populate('user')
        // .then (datas => {
        //     res.json(datas)
        // })
        // .catch(err => {
        //     res.json(err)
        // })
    }

    static filterByName(req,res) { //filter dengan query
        Task.find()
        .then(datas => {
            let output = []

            datas.forEach(el => {
                if(el.name.includes(req.query.query)) {output.push(el)}
            })

            res.json(output)
        })
        .catch(err => {
            res.json(err)
        })
    }

    static patchStatus(req,res) {
        Task.findOne({})
        .then(data => {
            data.status = true
            data.update
        })
        .catch(err=> {
            res.json(err)
        })
    }
}

module.exports = TaskController