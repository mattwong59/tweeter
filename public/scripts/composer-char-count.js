
$(function() {
 $('textarea').on('input', function (event) {
    var count = $(event.target).val().length;
    var charCounter = $(event.target).parent().find(".counter").text(140 - count);

    if(count > 140) {
      $(".counter").css("color", "tomato")
    } else {
      $(".counter").css("color", "black")
    }
 });
});
