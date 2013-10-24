(function( $ ) {
  $.fn.displayA11yGmap = function( options ) {

//    alert(options);

    //defaults
    var settings = $.extend({
      width   : 50,
      height  : 50,
    }, options );


    return this.each(function() {
      $(this).css("width", settings.width);
      $(this).css("height", settings.height);
    });

  };
}( jQuery ));
