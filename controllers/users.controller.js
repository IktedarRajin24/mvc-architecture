const users =  require('../models/users.model')
const path = require('path');

exports.getHome = (req, res)=>{
    res.send('<h1>Welcome to home</h1>')
}

exports.getUser = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}

exports.saveUser = (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    // res.send(`<h1>Your name: ${name} and Your email: ${email}</h1>`);
    const newUser = {
        name,
        email
    }
    users.push(newUser);

    res.status(201).json({
        success : true,
        users
    })
}