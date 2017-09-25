
var board;
var player;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]]
var gameOver;


$(document).ready(function(){
  var x = "x";
  var o = "o";
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  $(".tic-tac-button").click(function(){

    if($("#one").hasClass("o") &&
      $("#two").hasClass("o") &&
      $("#three").hasClass("o") ||
      $("#four").hasClass("o") &&
      $("#five").hasClass("o") &&
      $("#six").hasClass("o") ||
      $("#seven").hasClass("o") &&
      $("#eight").hasClass("o") &&
      $("nine").hasClass("o") ||
      $("#one").hasClass('o') &&
      $("#four").hasClass('o') &&
      $("#seven").hasClass('o') ||
      $("#two").hasClass('o') &&
      $("#five").hasClass('o') &&
      $("#eight").hasClass('o') ||
      $("#three").hasClass('o') &&
      $("#six").hasClass('o') &&
      $("#nine").hasClass('o') ||
      $("#one").hasClass('o') &&
      $("#five").hasClass('o') &&
      $("#nine").hasClass('o') ||
      $("#three").hasClass('o') &&
      $("#five").hasClass('o') &&
      $("#seven").hasClass('o'))
        {
          alert('O is the winner! Click restart to play again.');
          $(".messageO").show();
          $(".tic-tac-button").text(" ");
          $(".tic-tac-button").removeClass("disable");
          $(".tic-tac-button").removeClass('o');
          $(".tic-tac-button").removeClass('x');
        }
    else if
      ($("#one").hasClass("x") &&
      $("#two").hasClass('x') &&
      $("#three").hasClass('x') ||
      $("#four").hasClass('x') &&
      $("#five").hasClass('x') &&
      $("#six").hasClass('x') ||
      $("#seven").hasClass('x') &&
      $("#eight").hasClass('x') &&
      $("#nine").hasClass('x') ||
      $("#one").hasClass('x') &&
      $("#four").hasClass('x') &&
      $("#seven").hasClass('x') ||
      $("#two").hasClass('x') &&
      $("#five").hasClass('x') &&
      $("#eight").hasClass('x') ||
      $("#three").hasClass('x') &&
      $("#six").hasClass('x') &&
      $("#nine").hasClass('x') ||
      $("#one").hasClass('x') &&
      $("#five").hasClass('x') &&
      $("#nine").hasClass('x') ||
      $("#three").hasClass('x') &&
      $("#five").hasClass('x') &&
      $("#seven").hasClass('x'))
        {
          alert('X wins is the winner! Click restart button to play again.');
          $(".messageX").show();
          $(".tic-tac-button").text(" ");
          $(".tic-tac-button").removeClass("disable");
          $(".tic-tac-button").removeClass('o');
          $(".tic-tac-button").removeClass('x');
          //put clear board function
        }
      else if (count === 9){
        alert("It's a tie. It will restart");
        $(".tic-tac-button").text(" ");
        $(".tic-tac-button").removeClass('disable');
        $(".tic-tac-button").removeClass('o');
        $(".tic-tac-button").removeClass('x');
        count = 0;
      }
      else if ($(this).hasClass('disable'))
        {
          alert("already selected")
        }
      else if (count%2 ===0){
        count++
        $(this).text(o);
        $(this).addClass("disable o");

        if($("#one").hasClass('o') &&
        $("#two").hasClass('o') &&
        $("#three").hasClass('o') ||
        $("#four").hasClass('o') &&
        $("#five").hasClass('o') &&
        $("#six").hasClass('o') ||
        $("#seven").hasClass('o') &&
        $("#eight").hasClass('o') &&
        $("#nine").hasClass('o') ||
        $("#one").hasClass('o') &&
        $("#four").hasClass('o') &&
        $("#seven").hasClass('o') ||
        $("#two").hasClass('o') &&
        $("#five").hasClass('o') &&
        $("#eight").hasClass('o') ||
        $("#three").hasClass('o') &&
        $("#six").hasClass('o') &&
        $("#nine").hasClass('o') ||
        $("#one").hasClass('o') &&
        $("#five").hasClass('o') &&
        $("#nine").hasClass('o') ||
        $("#three").hasClass('o') &&
        $("#five").hasClass('o') &&
        $("#seven").hasClass('o'))
        {
         alert('O wins');
         count = 0;
         o_win++;
         $('#o_win').text(o_win);
        }
      }
      else {
        count++
        $(this).text(x);
        $(this).addClass("disable x");
        if ($("#one").hasClass('x') &&
          $("#two").hasClass('x') &&
          $("#three").hasClass('x') ||
          $("#four").hasClass('x') &&
          $("#five").hasClass('x') &&
          $("#six").hasClass('x') ||
          $("#seven").hasClass('x') &&
          $("#eight").hasClass('x') &&
          $("#nine").hasClass('x') ||
          $("#one").hasClass('x') &&
          $("#four").hasClass('x') &&
          $("#seven").hasClass('x') ||
          $("#two").hasClass('x') &&
          $("#five").hasClass('x') &&
          $("#eight").hasClass('x') ||
          $("#three").hasClass('x') &&
          $("#six").hasClass('x') &&
          $("#nine").hasClass('x') ||
          $("#one").hasClass('x') &&
          $("#five").hasClass('x') &&
          $("#nine").hasClass('x') ||
          $("#three").hasClass('x') &&
          $("#five").hasClass('x') &&
          $("#seven").hasClass('x'))
            {
              alert("X wins");
              count = 0;
              x_win++
              $('#x_win').text(x_win)
            }
        }
     });

  $("#reset").click(function () {
    $(".tic-tac-button").text(" ");
    $("#game li").removeClass('disable');
    $("#game li").removeClass('o');
    $("#game li").removeClass('x');
    count = 0;
  });

});

//1st player clicks on a space
//an X appears
//2nd player clicks on a space
//an O appears
//this keeps going until someone gets a winCondition
//announces which player wins at the bottom
//adds a count to player's count
//clear board

// $(document).ready(function(){

//   var turn = true;

//   var player = function(id, symbol){
//     this.symbol = symbol;
//     this.id = id;



// $(document).ready(function(){
//     $(".tic-tac-button").each(function(){
//         $(".tic-tac-button").html("X");
//     });
// });


// var boxes = [...document.querySelectorAll('li')];
// console.log(boxes);

// boxes.forEach(function(box){
//   box.addEventListener('click', function(event){
//     box.innerText = "X";
//     console.log("yay! this works!");
//   })

// });

