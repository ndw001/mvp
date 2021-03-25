const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Restroomrater', {useNewUrlParser: true });

mongoose.connection.once('open', function(){
  console.log('Connected to Mongodb DB')
}).on('error', function(error){
  console.log('The error is: ', error);
})


const locationSchema = new mongoose.locationSchema({

})
