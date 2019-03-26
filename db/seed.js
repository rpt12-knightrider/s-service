const db = require('./index.js');
const books = require('./books.js');
faker =  require(Faker);


//could be connection.model('Book', books);

const titles = [];
const i = 100;
while(i > 0) {
  [{ 
    _id: unique_key,
    //TODO: find right term for title 
    title: fake.title(),
    author: faker.fake("{{name.lastName}}, {{name.firstName}}"),
    //TODO: confirm the format of the call for the year is correct
    publication_year: faker.fake.year(),
    img_url: faker.fake("{{imageUrl}}"), 
    //TODO: find correct faker function to generate a number that is 3 digits and a '.'
    rating_avg: Number,
    //TODO: find correct faker fumction to generate a number that is 6 digits and one ','
    ratings_count: Number,
    summary : faker.fake("{{paragraph}}"),
    //TODO: generate a string randomly selected from [read,]
    reading_status: String,
    //TODO:
    reader_rating: Strings
  }].map(function(obj) {
      for(key in obj) {
        // obj(key) times something that randomizes it
      }
      titles.push(obj); 
      i--;
  });
  
}

fake.name();


