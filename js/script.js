console.log("You're viewing the console! Good job!");

var quotes = [
    "Here is a cool quote",
    "Here is another cool quote",
    "Here is yet another cool quote",
    "This is the 4th quote",
    "These are randomly picked",
    "Quote 5",
    "You can become a software developer",
    "Customize this site and make it your own!",
    "Software development is for everyone!"
];
var authors = [
    "Author 1",
    "Author 2",
    "Author 3",
    "The 4th Author",
    "Some Random Author",
    "Person 5",
    "Wise person",
    "Alan",
    "Someone"
];

var count = 1;

var numberOfClicks = 0;

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerHTML = "\"";
    document.getElementById("quoteText").innerHTML += quotes[randomNumber];
    document.getElementById("quoteText").innerHTML += "\"";
    document.getElementById("quoteAuthor").innerHTML = authors[randomNumber];
    count = count + 1;
    document.getElementById("quoteCount").innerHTML = "Number of quotes";
    document.getElementById("quoteCount").innerHTML += "shown: ";
    document.getElementById("quoteCount").innerHTML += count;
    console.log("newQuote() function was called");
}

function countClick() {
    numberOfClicks = numberOfClicks + 1;
    console.log("You have clicked the page " + numberOfClicks + " times.");
}

function exampleAlert() {
    alert("Here is a JavaScript alert!");
}
