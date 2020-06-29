module.exports = app =>{
    app.get('/Atendimentos', (requisicao, resposta) =>{
        resposta.send('Atendimentos WORKS')
    })

    app.post('/Atendimentos',(requisicao, resposta)=>{
        console.log(requisicao.body);
        
        resposta.send('Post')
    })
}