const Note = require('../models/Note')

module.exports = {

    async index(req, res) {
        let notes = await Note.find({})
        return res.json(notes)
    },

    async get(req, res) {
        const id = req.params.id
        let note = await Note.findOne({ _id: id })
        return res.json(note)
    },

    async store(req, res) {
        let { title, content } = req.body
        let note = await Note.create({ title: title, content: content })
        return res.status(201).json(note)
    },

    async update(req, res) {
        Note.updateOne({ _id: req.params.id }, req.body, (err, raw) => {
            if (!err) {
                return res.json(raw)
            }

            return res.status(500).json(err)
        })
    },

    async delete(req, res) {
        Note.deleteOne({ _id: req.params.id }, (err, raw) => {
            if (!err) {
                return res.json(raw)
            }

            return res.status(500).json(err)
        })
    }
}
