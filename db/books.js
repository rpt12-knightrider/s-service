const mongoose = require('mongoose');


const bookSchema =  new mongoose.Schema ({ 
   _id: unique key,
   title: String,
   author: String,
   img_url: String, 
   publication_date: Number,
   rating_avg: Number,
   ratings_count: Number,
   summar : String,
   reading_status: String,
   reader_rating: String
})

const books = mongoose.model('Books', bookSchema);

module.exports = books;
  
 