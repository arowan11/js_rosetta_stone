// Solve your homework here.
console.log("Hello World!");

// Assign "Hello World" to a variable message
var message = "Hello World";

// Assign a different string to a different variable
var different = "a different string";

// Assign a number to a variable
var num = 5;

// Use string concatenation to display the number in a string.
console.log(num + " is a number");

// Make an array of your favorite movies or books or bands. Have at least 4 values.
var faveBooks = ["Ender's Game", "The Name of the Wind", "Me Talk Pretty One Day", "Lolita"];

// Turn a sentence into an Array, and select the words that are six characters long.
var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";

var sentenceArray = sentence.split(" ");

function sixCharString(string) {
  return string.length === 6;
}

var sixCharWords = sentenceArray.filter(sixCharString);

// Create an array of movies with budgets of less than 100 and another array of movies that starred Leonard DiCaprio.
var movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

function budgetLessThan100(movie) {
  return movie.budget < 100;
}
var cheapMovies = movies.filter(budgetLessThan100);

function starsLeo(movie) {
  return movie.stars.includes("Leonardo DiCaprio");
}

var moviesWithLeo = movies.filter(starsLeo);

var submitButton = document.getElementById("yell-submit");
submitButton.addEventListener("click", function() {
  alert(document.getElementById("yell-text").value);
});
