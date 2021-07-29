const mongoose = require ('mongoose')
const db_connection = ()=>{
    mongoose.connect('mongodb+srv://wiem:G!Siz7iukPs!WL*@cluster0.x2m2t.mongodb.net/resto?retryWrites=true&w=majority',
    {
     useNewUrlParser:true ,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify: true,
    }
    )

    .then(()=>{console.log('data base connected')})
    .catch(()=>{console.log('Error')})
}
module.exports = db_connection

