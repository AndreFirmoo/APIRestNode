const express = require(`express`)
const consign = require(`consign`)


module.exports = () => {
    const app = express()
    
    consign()
        .include('Controllers')
        .into(app)
    return app
}
