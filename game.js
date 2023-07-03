
// adicionar quando clico no verde/vermelho/amarelo/azul -> som respectivo.
var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var blue = new Audio("sounds/blue.mp3");
var wrong = new Audio("sounds/wrong.mp3");
var colors = ['green','red', 'yellow', 'blue'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


$( ".btn" ).on( "click", function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
} );

// function clickHandler(){
//

//   $("#green").click(function(){
//       userChosenColour = 'green'
//       greenAnimation();
//     });

//     $("#red").click(function(){
//       userChosenColour = 'red'
//       redAnimation();
//     });

//     $("#yellow").click(function(){
//       userChosenColour = 'yellow'
//       yellowAnimation();
//     });

//     $("#blue").click(function(){
//       userChosenColour = 'blue'
//       blueAnimation();
//     });
// }

// $(document).keydown(function(event){
//   var keyPressed = event.key;
//   if (keyPressed == 's') {
//     nextSequence();
//     clickHandler();
//     // $("h1").text("Level " + level);
//     // startGame();
//   }
//   else {
//     $("h1").text("Press 's'!");
//     wrongButton();
//   }
// });


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = colors[randomNumber];
  playNextSequence(randomColor);
  gamePattern.push(randomColor);
  console.log(gamePattern);
  level++;
}

function playNextSequence(randomColor){
  switch (randomColor) {
    case "green":
      greenAnimation();
      break;
    case "red":
      redAnimation();
    break;
    case "yellow":
      yellowAnimation();
    break;
    case "blue":
      blueAnimation();
    break;
    default:
      break;
  }
}

function matchAnswer(){
  $(document).click("button", function(event){
    event
  })
}


function wrongButton(){
  $("body").addClass('game-over');
  wrong.play();

  setTimeout(function() {
    $("body").removeClass('game-over');
  }, 100);
}




function greenAnimation(){
  green.play();
  $("#green").addClass('pressed');

  setTimeout(function () {
    $("#green").removeClass('pressed');
  }, 100);
}

function redAnimation(){
  red.play();
  $("#red").addClass('pressed');

  setTimeout(function () {
    $("#red").removeClass('pressed');
  }, 100);
}

function yellowAnimation(){
  yellow.play();
  $("#yellow").addClass('pressed');

  setTimeout(function () {
    $("#yellow").removeClass('pressed');
  }, 100);
}

function blueAnimation(){
  blue.play();
  $("#blue").addClass('pressed');

  setTimeout(function () {
    $("#blue").removeClass('pressed');
  }, 100);
}


