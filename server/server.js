const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('/public'))


const { saveAnswer, deleteAnswer } = require('./controller')


app.post('/api/answer', saveAnswer)

app.delete('/api/answer/:index', deleteAnswer)


app.get('/', (req,res) => {
    
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}) 

app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})

app.get('/js', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
})




app.listen(4000, console.log('live on 4000'))