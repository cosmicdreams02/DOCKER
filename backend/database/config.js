const mongoose = require("mongoose");
const connectionS = `mongodb://mongo:27018/compose`
mongoose.connect(connectionS,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
  .then(()=>{
    console.log('Mongo DataBase connected')
  })
  .catch( err => {
    console.error(err)
  })