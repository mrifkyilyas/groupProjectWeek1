const Task = require('../models/task')


class TaskController {
    static create(req,res) {
        Task.create({
            name:"testaaaa",
            start: new Date,
            end: new Date,
            description: "hahahaha",
            status: false
        })
         .then(data => {
             res.json(data)
         })
         .catch(err => {
             res.json(err)
         })
    }

    static findAll(req,res) {
        Task.find()
        .then (datas => {
            res.json(datas)
        })
        .catch(err => {
            res.json(err)
        })
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