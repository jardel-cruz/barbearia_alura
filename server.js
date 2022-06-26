import app from './src/app.js' 
import path from 'path'
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('rodando')
    console.log(path.posix.resolve('./') + 'server.js')
})