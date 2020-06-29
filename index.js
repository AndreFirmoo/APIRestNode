const customExpress = require('./Config/customExpress')

app = customExpress()

app.listen(3000, () => console.log('Server running in port 3000'))

