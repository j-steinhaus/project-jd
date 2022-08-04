var apiKey = "4d56ace7";
var random = "https://owen-wilson-wow-api.herokuapp.com/wows/random";
var playBtn = document.querySelector("#playBtn");
var questionText = document.querySelector("question");
var image = document.getElementById("movie-poster");
var title = document.getElementById("movie-title");

// click button to start game
playBtn.addEventListener("click", startGame);

/////////////////////////
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
          var poster = data.poster;
          var posterImg = `http://www.omdbapi.com/?apikey=4d56ace7&s=${poster}.jpg`;
          console.log(data);

          var icon = document.createElement("img");
          icon.setAttribute("src", posterImg);
          image.append(icon);

          var title = document.createElement("h4");
          title.textContent = `title: ${data.movie}`;
        });
    });
}
