(function(){
    var menu = $('#collapseMenu');
    var btnMenu = $('#btnMenu');
    btnMenu.click(function(){
        // menu.toggle(500);
        if (menu.hasClass('active')) {
          menu.removeClass('active');
        } else {
          menu.addClass('active');
        }
    });
})();

$(document).ready(function () {
  $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $("#collapseMenu").hasClass("menuCT active");
      if (_opened === true && !clickover.hasClass("navbar-toggle")) {
          $("#btnMenu").click();
      }
  });
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });