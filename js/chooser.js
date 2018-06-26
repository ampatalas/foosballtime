$(function () {
    var unselectedPlayers = [];
    var selectedPlayers = [];

    $('#chooserInput').keypress(function(event) {
        if (event.keyCode == 13) {
            unselectedPlayers.push($(this).val());

            $(this).val("");

            displayUnselectedPlayers();
        }
    });

    $('#selectionButton').click(function () {
        if (unselectedPlayers.length === 0) return;

        unselectedPlayers = shuffle(unselectedPlayers);
        var player = unselectedPlayers.pop();
        selectedPlayers.push(player);

        displaySelectedPlayers();
        displayUnselectedPlayers();
    });

    function displayUnselectedPlayers()
    {
        unselectedPlayers = shuffle(unselectedPlayers);
        var unselectedContent = columnContent(unselectedPlayers);
        $('#unselectedColumn').html(unselectedContent);
    }
    
    function displaySelectedPlayers() {
        var selectedContent = columnContent(selectedPlayers);
        $('#selectedColumn').html(selectedContent);
    }

    function columnContent(array)
    {
        var generatedHtml = "";
        array.forEach(function (item) {
            generatedHtml += "<div class=\"entry rounded border\">" + item + "</div>";
        });
        return generatedHtml;
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

});
