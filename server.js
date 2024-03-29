const express= require ('express');
const app = express();
app.use(express.json());
const dotenv= require('dotenv');
dotenv.config({path:'./config/.env'});

//connect database
const connectdb= require('./helpers/connectdb');
connectdb(); 

//! Routes
app.use('/api/user', require('./routes/userRoutes'))

const port = process.env.PORT;
app.listen(port,(err)=> err? console.log(err): console.log(`server is running on port ${port}`));
