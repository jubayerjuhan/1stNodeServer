const express = require('express')
const app = express();



app.get('/',(req, res) => {
    res.send('Hello from the root path')
})
app.get('/juhan', (req, res) => {
    res.send('Hello from the Juhan path')
})
app.get('/jubayer', (req, res) => {
    res.send('Hello from the Jubayer path')
})
app.listen(8000)

