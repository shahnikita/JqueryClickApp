$(function () {
    $('#success').hide();
    var score = 0;


    $('#clickimg').click(function () {
        if (score == 0) {
            $('#startover').hide();
        }
        score++;
        $('#score').text(score);
        $('#success').show('1000').fadeOut(2000);
    });


})