
$(document).ready(function(){

//Numbers dispalyed on screen
var wins = 0;
var losses = 0;
var yourNum = 0;
var compNum = Math.floor(Math.random() * 100);
var red = Math.floor(Math.random() * 15+2)
var green = Math.floor(Math.random() * 15+2)
var blue = Math.floor(Math.random() * 15+2)
var black = Math.floor(Math.random() * 15+2)


$("#redRock").on("click", function () {
    yourNum = yourNum + red;
    if (yourNum === compNum) {
        alert("Winner Winner, Chicken Dinner!");
        wins++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }
    else if (compNum < yourNum) {
        alert("Sorry. You busted. Try Again!")
        losses++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }

    $("#winsText").text(wins);
    $("#lossesText").text(losses);
    $("#playerScore").text(yourNum);
    $("#compScore").text(compNum);
});


$("#blueRock").on("click", function () {
    yourNum = yourNum + blue;
    if (yourNum === compNum) {
        alert("Winner Winner, Chicken Dinner!");
        wins++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }
    else if (compNum < yourNum) {
        alert("Sorry. You busted. Try Again!")
        losses++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }

    $("#winsText").text(wins);
    $("#lossesText").text(losses);
    $("#playerScore").text(yourNum);
    $("#compScore").text(compNum);
});


$("#greenRock").on("click", function () {
    yourNum = yourNum + green;
    if (yourNum === compNum) {
        alert("Winner Winner, Chicken Dinner!");
        wins++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }
    else if (compNum < yourNum) {
        alert("Sorry. You busted. Try Again!")
        losses++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }

    $("#winsText").text(wins);
    $("#lossesText").text(losses);
    $("#playerScore").text(yourNum);
    $("#compScore").text(compNum);
});


$("#blackRock").on("click", function () {
    yourNum = yourNum + black;
    if (yourNum === compNum) {
        alert("Winner Winner, Chicken Dinner!");
        wins++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }
    else if (compNum < yourNum) {
        alert("Sorry. You busted. Try Again!")
        losses++;
        yourNum = 0;
        compNum = Math.floor(Math.random() * 100);
        red = Math.floor(Math.random() * 15+2)
        green = Math.floor(Math.random() * 15+2)
        blue = Math.floor(Math.random() * 15+2)
        black = Math.floor(Math.random() * 15+2)
    }

    $("#winsText").text(wins);
    $("#lossesText").text(losses);
    $("#playerScore").text(yourNum);
    $("#compScore").text(compNum);
});
console.log (black)
console.log (red)
console.log (blue)
console.log (green)

$("#winsText").text(wins);
$("#lossesText").text(losses);
$("#playerScore").text(yourNum);
$("#compScore").text(compNum);
});