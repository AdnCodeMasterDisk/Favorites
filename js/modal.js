$(document).ready(function(){
    $('#btnmodal').click(function(){
        $('#modal').addClass("boxaddon");
        $('#blur').addClass('tableblur');
    });

    $('#exitmodal').click(function(){
        $('#modal').removeClass("boxaddon");
        $('#blur').removeClass('tableblur');
    });
});

