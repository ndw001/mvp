const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Restroomrater', {useNewUrlParser: true, useUnifiedTopology: true});
// :27017
// mongoose.connection.once('open', function(){
//   console.log('Connected to Mongodb DB')
// }).on('error', function(error){
//   console.log('The error is: ', error);
// })

const reviewSchema = mongoose.Schema({
  name: String,
  safe: Number,
  access: Number,
  clean: Number
})

let Review = mongoose.model('review', reviewSchema);

let saveReview = (review) => {
  Review.insertMany(review)
  .then( (data) => {
    console.log('Review was saved');
  })
  .catch( (err) => {
    console.log('Error when saving review ', err)
  })
}
module.exports.saveReview = saveReview;

// saveReview({name:'cats', safe:2, access:5, clean: 6})
