$(document).ready(function() {
  var Random = Math.floor(Math.random() * 101 + 19);
  $("#randomNumber").html("Random Number: " + Random);

  var numbersArray = [];
  var total = 0;
  var wins = 0;
  var losses = 0;
  $("#wins").html("Wins: " + wins);
  $("#losses").html("Losses: " + losses);

  function crystalNumber() {
    for (var i = 0; i < 4; i++) {
      var num = Math.floor(Math.random() * 12 + 1);
      numbersArray.push(num);
    }
  }
  crystalNumber();

  $("#blue").click(function() {
    total = total + numbersArray[0];
    $("#yourNumber").html("Your number: " + total);

    if (total == Random) {
      winner();
    } else if (total > Random) {
      loser();
    }
  });

  $("#green").click(function() {
    total = total + numbersArray[1];
    $("#yourNumber").html("Your number: " + total);

    if (total == Random) {
      winner();
    } else if (total > Random) {
      loser();
    }
  });

  $("#red").click(function() {
    total = total + numbersArray[2];
    $("#yourNumber").html("Your number: " + total);

    if (total == Random) {
      winner();
    } else if (total > Random) {
      loser();
    }
  });

  $("#yellow").click(function() {
    total = total + numbersArray[3];
    $("#yourNumber").html("Your number: " + total);

    if (total == Random) {
      winner();
    } else if (total > Random) {
      loser();
    }
  });

  function winner() {
    wins++;
    $("#wins").html("Wins: " + wins);
    resetGame();
  }

  function loser() {
    losses++;
    $("#losses").html("Losses: " + losses);
    resetGame();
  }

  function resetGame() {
    Random = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").html("Random Number: " + Random);
    numbersArray = [];
    crystalNumber();
    total = 0;
    $("#yourNumber").html("Your Number: " + total);
  }
});
