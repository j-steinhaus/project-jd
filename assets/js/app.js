var apiKey = "4d56ace7";
var random = "https://owen-wilson-wow-api.herokuapp.com/wows/random";
var playBtn = document.querySelector("#playBtn");
var questionText = document.querySelector("#question");

// click button to start game
playBtn.addEventListener("click", startGame);

// const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";

  const submitBtn = document.getElementById("box");
  box.style.display = "block";
});

// movies owen wilson has been in
let question = [
  {
    questionText:
      "HOW MANY TIMES DID OWEN WILSON SAY WOW IN THE MOVIE __BLANK__",
    options: ["", "", ""],
    correctAnswer: "",
  },
];

/////////////////////DO WE NEED THIS BELOW?///////////////////

// var formSubmitHandler = function (event) {
//   event.preventDefault();
//   setLocalStorage();
//   var userInput = cityInputEl.value.trim();
//   var coordinates =
//     "http://api.openweathermap.org/geo/1.0/direct?q=" +
//     userInput +
//     "&appid=" +
//     apiKey;
// };

// starting the game
function startGame(event) {
  event.preventDefault();

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
      fetch(`http://www.omdbapi.com/?apikey=4d56ace7&s=${data[0].movie}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    });
}
