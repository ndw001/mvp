let path = require('path');
let cors = require('cors');
let axios = require('axios');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
let port = 3000;
let db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
  res.send('This is the server');
})

app.get('/myplaces', (req,res) => {
  axios.get('www.refugerestrooms.org/api/v1/restrooms/by_location?lat=34.108009009714664&lng=-118.05728536777977')
  .then(function(response){
    res.send(response.data);
  })
  .catch(function(error){
    res.send(error);
    console.log('in the server ',error);
  })

})

app.get('/reviews', (req,res) => {
  db.getReviews( (result) => {
    res.send(result);
  });
})


app.post('/reviews', (req, res) => {
  db.saveReview(req.body);
  // console.log(req.body);
})

app.listen(port, () => {
  console.log('Listening at 3000');
})
