(function( $ ) {
  $.fn.displayA11yGmap = function() {
    return this.filter( "a" ).each(function() {
      $( this ).append( " (" + $( this ).attr( "href" ) + ")" );
    });
  };
}( jQuery ));
