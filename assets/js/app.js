// ! Globals
var apiKey = "4d56ace7";
var random = "https://owen-wilson-wow-api.herokuapp.com/wows/random";
var playBtn = document.querySelector("#playBtn");
var questionText = document.querySelector(".question");
var image = document.getElementById("movie-poster");
var title = document.getElementById("movie-title");
var playerOne = document.getElementById("player-1");
// var playerTwo = document.getElementById("player-2");
var answerBox = document.getElementById("answer");

var correctAnswer;
var progressBar = document.querySelector(".progress");
var timeEl = document.querySelector("#timerEL");
let currentQuestion = 0;
let score = 0;
let timeleft = 30;
var answer;
var timeArray = [];
// ! sound FX
var sfxRight = new Audio(
  "https://assets.ctfassets.net/bs8ntwkklfua/5G8TOg91f3Vq2vnykOWuU4/d5dd129dd15f1782054b07ae527b2833/Free_Birds_Wow_2.mp3"
);

// ! add event listener to use button
var submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function () {
  sfxRight.play();
  if (correctAnswer == playerOne.value) {
    playerOne.value = "";
    score++;

    timeleft = 30;
    answerBox.innerHTML = "";
    image.innerHTML = "";
    document.querySelector("#movieTitle").textContent = "";

    startGame();
  } else {
    endGame();
  }
});

playBtn.addEventListener("click", startGame);
playerOne.style.display = "none";
// playerTwo.style.display = "none";

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";

  const submitBtn = document.getElementById("box");
  sfxRight.play();
  box.style.display = "";
});

// ! start game function
function startGame() {
  progressBar.style.display = "block";
  playerOne.style.display = "block";
  // playerTwo.style.display = "block";
  image.style.display = "block";
  title.style.display = "block";

  let time = setInterval(function () {
    timeleft--;
    progressBar.setAttribute("value", timeleft);

    if (timeleft <= 0) {
      endGame();
    }
  }, 1000);
  timeArray.push(time);
  console.log(timeArray);

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

        answer = document.createElement("h2");
        answer.textContent = `${data[0].total_wows_in_movie}`;
        correctAnswer = data[0].total_wows_in_movie;
        answer.style.display = "none";
        console.log(correctAnswer);
        answerBox.append(answer);
        answer.style.color = "brown";
        answer.style.fontSize = "80px";

        fetch(`https://www.omdbapi.com/?apikey=4d56ace7&s=${data[0].movie}`)
          .then(function (response) {
            return response.json();
          })

          .then(function (data) {
            console.log(data);
            document.querySelector(
              "#movieTitle"
            ).textContent = `Title: ${data.Search[0].Title}`;
          });
      }
    });
}

// ! endGame function to restart game and time array. saves to lacal storage.
function endGame() {
  localStorage.setItem("score", score);
  console.log("high score:", score);
  location.reload();
  playerOne.style.display = "none";

  for (let index = 0; index < timeArray.length; index++) {
    window.clearInterval(timeArray[index]);
    console.log(timeArray[index]);
  }
  timeArray = [];
  answerBox.innerHTML = "";
  image.innerHTML = "";
  document.querySelector("#movieTitle").textContent = "";

  playBtn.style.display = "block"; //
  progressBar.style.display = "none";

  console.log("hi george");
}
