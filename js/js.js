

var winner;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]]
var gameOver;
var counter;

// $(document).ready(function(){

  var boxes = [...document.getElementsByClassName('tic-tac-button')];

  // if winner === Player O start counter at 0
  if (winner === "Player O"){
    counter = 0;
  } else {
    counter = 1;
  }
  // else start counter at 1


  boxes.forEach(function(box){
    box.addEventListener('click', function(event){
      //add O's are when count is even and X when it's odd
      console.log(counter);
      if (counter % 2 === 0){
        box.innerText = "O";
        box.className += ' playerO';
      } else {
        box.innerText = "X";
        box.className += ' playerX';
      }
      // increase count by 1
      counter++;
    })
  });


  var x = "x";
  var o = "o";
  var count = 0; //O's are when count is even and X when it's odd
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
          $(".messageX").hide();
          $(".messageO").show();
          winner = "Player O";
          $(".tic-tac-button").text(" ");
          $(".tic-tac-button").removeClass("disable");
          $(".tic-tac-button").removeClass('o');
          $(".tic-tac-button").removeClass('x');
        }
    else if($("#one").hasClass("x") &&
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
          $(".messageO").hide();
          $(".messageX").show();
          $(".tic-tac-button").text(" ");
          $(".tic-tac-button").removeClass("disable");
          $(".tic-tac-button").removeClass('o');
          $(".tic-tac-button").removeClass('x');
        }
    else if (count === 9){
      $(".alert").show();
      $(".tic-tac-button").text(" ");
      $(".tic-tac-button").removeClass('disable');
      $(".tic-tac-button").removeClass('o');
      $(".tic-tac-button").removeClass('x');
      count = 0;
       }
    else if ($(this).hasClass('disable'))
      {
        $(".already").show();
      }
    else if (count%2 ===0){
      count++
      $(this).text(x);
      $(this).addClass("disable x");

        if($("#one").hasClass('x') &&
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
           $(".messageO").hide();
           $(".messageX").show();
           count = 0;
           x_win++;
           $('#x_win').text(x_win);
          }
    }
    else {
      count++
      $(this).text(o);
      $(this).addClass("disable o");
      if ($("#one").hasClass('o') &&
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
            $(".messageX").hide();
            $(".messageO").show();
            count = 0;
            o_win++
            $('#o_win').text(o_win)
            winner = "Player O"
            }
        }
     });

  $("#reset").click(function () {
    $(".tic-tac-button").text(" ");
    $(".tic-tac-button").removeClass('disable');
    $(".tic-tac-button").removeClass('o');
    $(".tic-tac-button").removeClass('x');
    $(".messageO").hide();
    $(".messageX").hide();
    $(".alert").hide();
    count = 0;
    counter = 0;
  });

// });

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






