$(document).ready(function () {
    // Create variables
    var targetScore = 0;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var red;
    var purple;
    var yellow;
    var green;
    var gameWon;
    var gamePaused = false;
    var resultText = $('.gameResult');

    // Display number of wins to the page
    $('#winsDisplay').text(wins);
    // Display number of losses to the page
    $('#lossesDisplay').text(losses);

    // Generating target score
    targetScore = Math.floor(Math.random() * 101) + 19;

    // Generating crystal random numbers
    red = Math.floor(Math.random() * 11) + 1;
    purple = Math.floor(Math.random() * 11) + 1;
    yellow = Math.floor(Math.random() * 11) + 1;
    green = Math.floor(Math.random() * 11) + 1;

    // Add targetScore to random number div
    $('#randomNumberDisplay').text(targetScore);

    // Add userScore to score-div
    $('#scoreDisplay').text(userScore);

    // Assign random values to the crystals
    $('.button').on('click', function () {
        // Check to see if game is paused
        console.log('paused?', gamePaused);
        if (gamePaused) {
            return;
        }

        var clickColor = $(this).data('color');
        if (clickColor === 'red') {
            userScore += red;
        } else if (clickColor === 'purple') {
            userScore += purple;
        } else if (clickColor === 'yellow') {
            userScore += yellow;
        } else if (clickColor === 'green') {
            userScore += green;
        }
        // Update the user's score on the screen
        $('#scoreDisplay').text(userScore);
        console.log(userScore);

        // Compare userScore to targetScore:
        // If userScore is larger than targetScore, then the user lost
        if (userScore > targetScore) {
            losses++;
            $('#lossesDisplay').text(losses);
            // Update the game result variable
            gameWon = false;
            // Show win/lose text to the user
            toggleResultText();
            gamePaused = true;
            setTimeout(() => {
                resetGame();
            }, 3000);
            // If userScore is the same as targetScore, then the user won
        } else if (userScore === targetScore) {
            wins++;
            $('#winsDisplay').text(wins);
            gameWon = true;
            toggleResultText();
            gamePaused = true;
            setTimeout(() => {
                resetGame();
            }, 3000);
        }
    });

    // Reset the variables for a new game
    var resetGame = function () {
        // Generate a new targetScore
        targetScore = Math.floor(Math.random() * 101) + 19;
        $('#randomNumberDisplay').text(targetScore);
        // Generate new crystal values
        red = Math.floor(Math.random() * 11) + 1;
        purple = Math.floor(Math.random() * 11) + 1;
        yellow = Math.floor(Math.random() * 11) + 1;
        green = Math.floor(Math.random() * 11) + 1;
        // Clear userScore and show reset score on page
        userScore = 0;
        $('#scoreDisplay').text(userScore);
        toggleResultText();
        // Unpause the game
        gamePaused = false;
    };

    var toggleResultText = function () {
        // Check the result of the game, show appropriate text
        if (gameWon) {
            resultText.text('You Won');
        } else {
            resultText.text('You Lost');
        }
        resultText.toggleClass('showContent');
    };
});