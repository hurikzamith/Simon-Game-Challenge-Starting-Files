
// adicionar quando clico no verde/vermelho/amarelo/azul -> som respectivo.
var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var blue = new Audio("sounds/blue.mp3");

$(document).keydown(function(event){
  var keyPressed = event.key;
  if(keyPressed == 's')
    startGame();
    else {
      $("h1").text("try again");
    }
  });

// TODO: CRIAR animação do ERRO;
// TODO: Refatorar
// TODO: Logica do jogo
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


$("#green").click(function(){
  greenAnimation();
});

$("#red").click(function(){
  redAnimation();
});

$("#yellow").click(function(){
  yellowAnimation();
});

$("#blue").click(function(){
  blueAnimation();
});
// --------------------------------------------------------------------------



function startGame(){
  // execute
  $("h1").text("Game Starting");
}

function wrongAnswer(){
  $("h1").text("Wrong!");

}


  // else {
  //   wrongAnswer();
  //   // WRONG ANSWER
  //   // wrong sound + background color changes red for a sec
  // }

  // Será selecionado aleatoriamente uma das teclas, adicionar a sequencia modelo (que o usuario tentara acertar.)
// Ela irá tocar um som e exibir um estilo.

// AGUARDAR

// Verificar em qual das teclas o usuário irá clicar.
// Caso tenha clicado na mesma de antes. A sequência modelo, receberá o um novo aleatório.
// A sequencia será exibida.

// AGUARDAR ..

// segue o jogo até o usuário errar a sequência.


// Se não apertaram tecla, o jogo não começou

// logo terei, o som da tecla, o som de erro e efeitos visuais de erro. A mensagem será alterada para um caso de erro tb.
