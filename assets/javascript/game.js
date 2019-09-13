    
    var targetScore = Math.floor(Math.random() * 102 + 19);

    $("#target-score").html(targetScore);

    var wins = 0;
    var roundScore = 0;
    var losses = 0;
    
    var randomNumbers = Math.floor(Math.random() * 12 + 1);

    
        crystal.addClass("crystal-images");
        crystal.attr("src", "assets/images/aqua-crystal.png");
        crystal.attr("data-crystalvalue" + randomNumbers);
        $("#crystals").append(crystal);
    }

    $(".crystal-images").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        roundScore += crystalValue;

        if (roundScore === targetScore) {
            wins++;
            resetGame();
        } else if (roundScore > targetScore) {
        losses++;
        resetGame();
        }
    
 
    
    function resetGame() {
        targetScore;
        wins = 0;
        losses = 0;
        roundScore = 0;
    }