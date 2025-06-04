const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors = require('cors')
//const authJwt = require('./helpers/jwt')

require('dotenv/config');
const api = process.env.API_URL;

const usersRoutes = require('./routes/users');
const placesRoutes = require('./routes/places');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
//app.use(authJwt);
app.use(cors())

//routers
app.use(`${api}/users`,usersRoutes);
app.use(`${api}/places`,placesRoutes);

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    dbname: 'tour_guide',
})
.then(()=>{
    console.log('Database connection is ready...')
})
.catch((err)=>{
    console.log(err);
}
)

app.listen(3001, ()=>{
    console.log(api);
    console.log('server is running http://localhost:3001')
})