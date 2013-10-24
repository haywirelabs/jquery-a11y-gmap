(function( $ ) {
  $.fn.displayA11yGmap = function( options ) {

    //defaults
    var settings = $.extend({
      width : "50px",
      height : "50px",
    }, options );


    return this.filter( "a" ).each(function() {
      $( this ).append( " (" + $( this ).attr( "href" ) + ")" );
    });


  };
}( jQuery ));
