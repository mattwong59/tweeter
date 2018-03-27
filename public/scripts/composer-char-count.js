$ (document).ready(function() {
 $('textarea').on('keyup', function () {
    var count = this.textLength;
    var charCounter = $(this).parent().find(".counter");
    charCounter.text(140 - count);

    if(count > 140) {
      $(".counter").css("color", "tomato")
    } else {
      $(".counter").css("color", "black")
    }
 });
});
