$(document).ready(function() {

    // Create variables
    var targetScore = 0;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var red;
    var purple;
    var yellow;
    var green;
    
    // Display number of wins to the page
    $("#winsDisplay").text(wins);
    // Display number of losses to the page
    $("#lossesDisplay").text(losses);
    
    // Generating target score
    targetScore = Math.floor(Math.random() * 101) + 19;
    
    // Generating crystal random numbers
    red = Math.floor(Math.random() * 11) + 1
    purple = Math.floor(Math.random() * 11) + 1
    yellow = Math.floor(Math.random() * 11) + 1
    green = Math.floor(Math.random() * 11) + 1
    
    // Add targetScore to random number div
    $("#randomNumberDisplay").text(targetScore);
    
    // Add userScore to score-div
    $("#scoreDisplay").text(userScore);
    
    // Assign random values to the crystals
    $(".button").on("click", function () {
        var clickColor = $(this).data("color");
       if (clickColor === "red") {
            userScore += red
       } else if (clickColor === "purple") {
            userScore += purple
       } else if (clickColor === "yellow") {
           userScore += yellow
       } else if (clickColor === "green") {
           userScore += green
       }
       // Update the user's score on the screen
       $("#scoreDisplay").text(userScore);
           console.log(userScore);
        
       // Compare userScore to targetScore:
        // If userScore is larger than targetScore, then the user lost
       if (userScore > targetScore) {
           losses++;
           $("#lossesDisplay").text(losses);
           resetGame();
        // If userScore is the same as targetScore, then the user won
       } else if (userScore === targetScore) {
           wins++;
           $("#winsDisplay").text(wins);
           //resetGame();
    
       }
    
    });
    // /
    // Reset the variables for a new game (from Dennis)
    var resetGame = function() {
                targetScore = Math.floor(Math.random() * 101) + 19;
    console.log('This is a new number' + targetScore);
    
    }
    //      // Reset all variables:
    //         // Generate a new targetScore
    //         $("#randomNumberDisplay").text(targetScore)
    //         // Generate new crystal values
    //         red = red;
    //         purple = purple;
    //         yellow = yellow;
    //         green = green;
    //         clickColor = clickColor;
    //         // Clear userScore
    //         userScore = userScore;
    //     });
         
    });
    