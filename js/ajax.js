// sees the $ with the DOM (class with a dot or a # or an h1) can target based on element class or id. jquery
let $jokes = $("#jokes");

let jokeTemplate = "<p>{{value}}</p>";

function addJokes(joke) {
    // find not mustache render to just have one on there
    $jokes.append(Mustache.render(jokeTemplate, joke));
}

function addNewJoke(joke) {
    // dont use replace because it does it once. the hmtlkeeps the element and lets it cycle through
    $jokes.html(joke.value);
}

$(document).ready(function () {
    // let API_KEY = '7a6ea0cca8834a4374e45acf9f699f42'
    //This first get request gets one rando joke when the page first loads
    $.ajax({
        type: "GET",
        url: "https://api.chucknorris.io/jokes/random",
        // use .done and .fail
    })
        .done(function (joke) {
            addJokes(joke);
            console.log(joke);
        })
        .fail(function () {
            alert("yoU rAn IntO a PRoBlEm");
        });

    //when a user clicks this button, a new rando joke is fetched
    $("#tell-joke").on("click", function () {
        // let joke = {
        // 	joke: $jokes.val()
        // };
        $.ajax({
            type: "GET",
            url: "https://api.chucknorris.io/jokes/random",
        })
            .done(function (newJoke) {
                addNewJoke(newJoke);
            })
            .fail(function () {
                alert("eRRoR SaVInG ORdeR");
            });
    }); //end click event
});