const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Space = require('./Models/SpaceModel');
const multer = require('multer');
const upload = multer();
const port = process.env.PORT||3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rregti1:fiverr123@ds155934.mlab.com:55934/space').then(
  ()=>{console.log("connected successfully")},
  (err)=>{throw err}
);

const app = express();
app.use(morgan('combined'));
app.use(upload.array());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routers/adminRouter.js'))

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
});
