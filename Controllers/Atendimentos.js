module.exports = app =>{
    app.get('/Atendimentos', (requisao, resposta) =>{
        resposta.send('Atendimentos WORKS')
    })
}