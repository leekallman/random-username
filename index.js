const generate = require("meaningful-string");
const randomUsername = require("./generateRandomName")
const express = require('express')
const app = express()
const port = 3000;

app.get('/hello-world', (req, res) => {
    res.send('Hello World!')
})

app.get('./random-username', (req, res) => {
    const meaningful = generate.meaningful();
    const username = randomUsername.generate();
    res.json({
        meaningful: meaningful,
        ourOwn: username,
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})






