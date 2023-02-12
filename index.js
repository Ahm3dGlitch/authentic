import express from 'express'
// const express = require('express')

const app = express()

app.use(express.urlencoded({
    extended: false
}))

app.use( express.json())

const users = [
    {
        id: 1, 
        name: "IIII"
    },
    {
        id: 2, 
        name: "dfgjhndgkjn"
    },
    {
        id: 3, 
        name: "dhhdh"
    }
];

app.get('/user/:id', (req, res, next)=>{

    console.log(req.params)

    res.json(users.find(i => i.id === parseInt(req.params.id)))

});

app.post('/users', (req, res, next)=>{

    console.log(req.body)
    // users.push(req.body);

res.json(users)

});

app.post('/user', (req, res, next)=>{

    console.log(req.body)
    users.push(req.body);

res.json(users)

});

app.get('/user', (req, res, next)=>{
    console.log(req.headers['authorization'])
    console.log(req.query)
    users.push(req.query)

    res.json(users)

});

app.get('/', (req, res, next)=>{

    console.log(req)

    res.json(users)

});


app.listen('3000', ()=> {
    console.log("My port is 3000")
});