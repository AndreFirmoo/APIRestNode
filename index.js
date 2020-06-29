const express = require(`express`)

const app = express()

app.listen(3000, () => console.log('Server running in port 3000'))

app.get('/Atendimentos', (requisao, resposta) =>{
    resposta.send('Atendimentos WORKS')
})