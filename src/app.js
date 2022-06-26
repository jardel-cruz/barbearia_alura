import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

const users = []

const caminho = path.posix.resolve('./') 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('./src/public/html'))
app.use('/css',express.static('./src/public/css'))
app.use('/img',express.static('./src/public/img'))

app.get('/', (req, res) => {
    res.status(200).sendFile(`${caminho}/src/public/html/index.html`)
})

app.get('/produtos', (req, res) => {
    res.status(200).sendFile(`${caminho}/src/public/html/produtos.html`)
})

app.get('/contatos', (req,res) => {
    res.status(200).sendFile(`${caminho}/src/public/html/contatos.html`)
})

app.post('/contatos', (req, res) => {
    const user = req.body
    users.push(user)
    res.redirect('/')
})

app.get('/users', (req, res) => {
    res.status(200).send(users[0])
})

export default app