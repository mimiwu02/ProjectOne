document.addEventListener('DOMContentLoaded', function () {


  var images = ['img/be_happy.png','img/banana_split.png', 'img/bomb_shell.png',
                'img/drama_queen.png', 'img/drunk_in_love.png',
                'img/eye_candy.png', 'img/eye_of_the_tiger.png',
                'img/fly_fishing.png','img/happy_hour.png',
                'img/holy_crap.png', 'img/monkey_business.png',
                'img/new_york_minute.png','img/party_animal.png',
                'img/puppy_love.png', 'img/queen_bee.png',
                'img/rockstar.png', 'img/selfie.png', 'img/smoking_hot.png',
                'img/snow_bunny.png'],

      answers = ["be happy", "banana split", "bomb shell", "drama queen", "drunk in love",
                  "eye candy", "eye of the tiger" , "fly fishing" , "happy hour", "holy crap",
                  "monkey business", "new york minute", "party animal", "puppy love", "queen bee","rockstar",
                  "selfie", "smoking hot", "snow bunny"],
      i=0;
      a=0;

      // current: 0;
      //
      // playerOne = 0;
      // playerTwo = 1;
      // playerOneScore = 0;
      // playerTwoScore = 0;


  // change image on click
  // ternary shorthand of if/else statement used. Below describes what happens when a user has clicked over the number of images.
  //It will bring the user back to the first image.

document.getElementById('changeImage').addEventListener('click', function changeImage() {
                this.src = images[i >= images.length - 1 ? i = 0: ++i];
                this.src = images[a >= answers.length - 1 ? a = 0 : ++a]
            },false);



//check if there is a match
document.getElementById('userInput').addEventListener('keydown', function checkAnswer() {
    if (event.key === "Enter") {
      //console.log("I see enter");
    if (userInput.value == answers[a]) {
      alert("There is a match!");
  } else {
      alert("That's incorrect.");
    }
  }
});

//switch turns

// var turn = document.getElementById('changeImage').addEventListener('click', function changeTurn() {
//         if (i = images.length-1) {
//
//         }



//scoring
// var score = document.getElementById('player1Score');
//     if (userInput.value == answers[a]){
//     playerOneScore+=1;
//     scoreboard.innerHTML = playerOneScore;
//   }


//clears the input field
  var entry = document.getElementById("userInput"),
      clear = document.getElementById("clear");

  clear.addEventListener("click", function clearfield(){
      entry.value = "";
  }, false);



// compare(player1, player 2);




});
