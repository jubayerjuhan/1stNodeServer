const express = require('express')
const app = express();

const demoFunc = (req, res) => {
    const user_Info = {
        name: 'Juhan',
        age: 20,
        surename: 'Jubayer'
    }

    res.send(user_Info)
}

const users = ['juhan', 'tazin', 'tuba', 'junayet', 'tasfia', 'sara', 'dip']


app.listen(3000)
app.get('/juhan', demoFunc)

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users[userId];
    res.send(user)
})