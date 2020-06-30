const customExpress = require('./Config/CustomExpress')
const conexao =  require(`./Config/conexao`)
const tabala  = require(`./Config/Tabelas`)


conexao.connect((error)=>{
    if (error){
        console.log(error); 
    }else{
        console.log(`connect`);
        tabala.init(conexao)
        app = customExpress()

        app.listen(3000, () => console.log('Server running in port 3000'))
    }
})


