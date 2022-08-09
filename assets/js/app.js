var apiKey = "4d56ace7";
var random = "https://owen-wilson-wow-api.herokuapp.com/wows/random";
var playBtn = document.querySelector("#playBtn");
var questionText = document.querySelector("question");
var image = document.getElementById("movie-poster");
var title = document.getElementById("movie-title");
var playerOne = document.getElementById("player-1");
var playerTwo = document.getElementById("player-2");
var answerBox = document.getElementById("answer");

// click button to start game
playBtn.addEventListener("click", startGame);
playerOne.style.display = "none";
playerTwo.style.display = "none";
/////////////////////////
playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";

  const submitBtn = document.getElementById("box");
  box.style.display = "";
});

// movies owen wilson has been in
let question = [
  {
    questionText: "HOW MANY TIMES DID OWEN WILSON SAY -WOW-",
    options: ["", "", ""],
    correctAnswer: "",
  },
];

// starting the game
function startGame(event) {
  event.preventDefault();
  playerOne.style.display = "block";
  playerTwo.style.display = "block";
  //   fetch()
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     });

  fetch(random)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var icon = document.createElement("img");
      icon.setAttribute("src", data[0].poster);
      image.append(icon);
      if (icon && image.style) {
        icon.style.height = "400px";
        icon.style.width = "400px";
      }

      var answer = document.createElement("h2");
      answer.textContent = `${data[0].total_wows_in_movie}`;
      answerBox.append(answer);
      answer.style.color = "brown";
      answer.style.fontSize = "80px";

      fetch(`https://www.omdbapi.com/?apikey=4d56ace7&s=${data[0].movie}`)
        .then(function (response) {
          return response.json();
        })
        /////////////GEORGE
        .then(function (data) {
          console.log(data);
          var movieTitle = document.createElement("h2");
          movieTitle.textContent = `Title: ${data.Search[0].Title}`;
          title.append(movieTitle);
          //   movieTitle.style.margin = "-150px";
        });
    });
}

// todo: omdb api key: 4d56ace7

// todo: as a user i want to playa game with a freind THEN i read a descrition of the game and the rules of the game

// todo: i then press play which triggers me to go to the game page.

//! can we make optional 1 player or 2 - stretch goal -

// todo: when i get to the page a start button is present to me I then press it and the timer start the game.

// todo: once start is pressed it needs to pull data from ombd and display it at the bottom of the page----------- THEN using a call from the ramdom owen wilson movie provided by the owen wilson API

// todo: a question is presented "HOW MANY TIMES DID OWEN WILSON SAY WOW IN THE MOVIE __BLANK___... pulled from the data via the owen wilson API

// todo: timer is 10 seconds - conditionals - if timer reaches 10 secs game over - if not exact number you lose - else if timer not reached limit and your number is correct you won!!

// todo: if you lose game starts over

// todo : else

// todo: you keep playing

// todo: when game is won or lost you are presented with a sound. provided by the API

// todo: when you win you enter you name and highscore stores local storage

// ! can you think of anyting else to make this the coolest game ever? can we charge money?
