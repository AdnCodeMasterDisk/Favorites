$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#linktable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

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

