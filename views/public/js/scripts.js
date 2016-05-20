$('.notFooter').hide();
document.write("<div class='centered text-center' id='loading'><h1>Del</h1><br><p>Simple Messages that Self Destruct</p><div class='loader'></div></div>");

$(document).ready(function() {
   setTimeout(function() {
    $('#loading').addClass("animate");
    $("#loading").addClass("fadeOut");
    setTimeout(function() {
      $('#loading').hide();
      $('.notFooter').show();
  }, 500);
}, 1000); 
});