const mongoose= require ('mongoose');

const connectdb = () => { 
    mongoose.connect(process.env.MONGO_URL,(err)=> err? console.log(err): console.log(`Database is connected`));
 };
 module.exports = connectdb;