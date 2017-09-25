// JavaScript Document
$(document).ready(function() {
var x = "x"
var o = "o"
var count = 0;
var o_win = 0;
var x_win = 0;

$('#game li').click(function(){

  if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
   {
   alert('O has won the game. Start a new game')
   $("#game li").text("+");
  $("#game li").removeClass('disable')
  $("#game li").removeClass('o')
  $("#game li").removeClass('x')
  $("#game li").removeClass('btn-primary')
  $("#game li").removeClass('btn-info')
   }
  else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
  {
   alert('X wins has won the game. Start a new game')
   $("#game li").text("+");
  $("#game li").removeClass('disable')
  $("#game li").removeClass('o')
  $("#game li").removeClass('x')
  $("#game li").removeClass('btn-primary')
  $("#game li").removeClass('btn-info')
  }
  else if (count == 9)
  {
  alert('Its a tie. It will restart.')
  $("#game li").text("+");
  $("#game li").removeClass('disable')
  $("#game li").removeClass('o')
  $("#game li").removeClass('x')
  $("#game li").removeClass('btn-primary')
  $("#game li").removeClass('btn-info')
  count = 0
  }
  else if ($(this).hasClass('disable'))
  {
    alert('Already selected')
  }
  else if (count%2 == 0)
  {
    count++
    $(this).text(o)
      $(this).addClass('disable o btn-primary')
      if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
      {
     alert('O wins')
     count = 0
     o_win++
$('#o_win').text(o_win)
        }
  }
   else
  {
    count++
    $(this).text(x)
    $(this).addClass('disable x btn-info')
     if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
        {
   alert('X wins')
   count = 0
   x_win++
   $('#x_win').text(x_win)
        }
  }

   });

  $("#reset").click(function () {
  $("#game li").text("+");
  $("#game li").removeClass('disable')
  $("#game li").removeClass('o')
  $("#game li").removeClass('x')
  $("#game li").removeClass('btn-primary')
  $("#game li").removeClass('btn-info')
  count = 0

  });
});




// var eachBox = document.querySelectorAll('.col-md-4 box');
// var board = document.querySelectorAll('#board');


// function checkForWin(){
//   switch (){
//     case "";
//     message = ""
//   }
// }

//prompt users to pick X or O
//when player one chooses  prompt them to click on a box location
//when player clicks on a box, display user preference (say X inside box
//promt player 2 to click on a box. this click will display the other preference (say O)
//player 1 and player 2 take turns clicking
//when player 1 or player 2 achieve a 3 in a row

//HOW to check box filled (8 options) 1, 2, 3 horizonal, 4, 5, 6, horixonal, 7, 8, 9, horisonal,
//1, 4, 7 verticle, 2, 5, 8, verticle, 3, 6, 9 horizontal
//1, 5, 9 diagonal, 3, 5, 7 diagonal

//when player 2 or player 1 ahcieves win option,
//display "player _ won! do you want to play again?"

//refresh page? or clear board.

//tally box of winners to keep track of scores

//play again!


// $(document).ready(function){
//  eachBox.addEventListener("click", function(event){
//   //when you click on a box
//  })
// // });
// var boxClick = [...document.querySelectorAll(".col-md-4 box")]
//   eachBox.addEventListener('click', function(event){
//       if(please === "please"){
//         console.log("enjoy that!");
//       }
//       else{
//       event.preventDefault();
//       alert('YOU SHALL NOT PASS!');
//       }

//     })

// });

// function ticTacToe(){

// }




// // wait for the DOM to finish loading
// $(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function

// });


// var ticTacToe = [...document.querySelectorAll(".col-md-4 box")]

//  function play(){

//  }


//   tic.addEventListener('click', function(event){
//     start = prompt('Would you like to be X\'s or O\'s?');
//       if(start === "X"){
//         console.log("enjoy that!");
//       }
//       else if (start == "O"){

//       alert('YOU SHALL NOT PASS!');
//       }

//     })

// });

