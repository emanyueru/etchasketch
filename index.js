$(document).ready(function() {

    $('button').on('click', generateGrid);

    $('#container').on('mouseover', '.grid-object', function() {

        $(this).addClass('coloured');
        console.log('event handler fired');

    });


});

function generateGrid() {

    $('#container').html("");

    var size = prompt("Enter grid size:");


    var gridX = 960 /size;
    var gridY = 960 /size;

    for (var y = 0; y < size; y++) {

        $('#container').append('<div class="row">');

        for (var x = 0; x < size; x++) {

            $('.row').last().append('<div class="grid-object"></div>');

            $('.grid-object').css({"width": gridX, "height": gridY});
        }

        $('#container').append('</div>');

    }

}
