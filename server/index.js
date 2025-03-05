const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ServiceModel = require('./Models/Service')
const app = express()
const dotenv = require('dotenv');
dotenv.config ();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.URI);
console.log('connecter sur db')

app.get('/', (req, res) => {
    ServiceModel.find()
    .then(services => res.json(services))
    .catch(err => res.json(err))
})

app.post('/create', (req, res) => {
    ServiceModel.create(req.body)
    .then(service => res.json(service))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    ServiceModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        description: req.body.description,
        prices: req.body.prices,
        duration: req.body.duration

    }).then(service => res.json(service))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    ServiceModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("Server is Running");
})
