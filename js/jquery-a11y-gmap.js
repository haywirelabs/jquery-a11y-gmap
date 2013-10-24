(function( $ ) {
  $.fn.displayA11yGmap = function( target , options ) {

//    alert(target);
//    alert(options);

    //defaults
    var settings = $.extend({
      width         : 50,
      height        : 50,
      map_image_url : 'http://maps.googleapis.com/maps/api/staticmap?',
      zoom          : 12,
      sensor        : 'false'
    }, options );

    map_image_url = settings.map_image_url + 'center=' + target;
    map_image_url += '&zoom=' + settings.zoom;
    map_image_url += '&size=' + settings.width + 'x' + settings.height;
    map_image_url += '&sensor=' + settings.sensor;

    map_image_element = '<img src="' + map_image_url + '" alt="map-image" />';

    alert(map_image_url);

    return this.each(function() {
      $(this).css("width", settings.width);
      $(this).css("height", settings.height);
      $(this).html(map_image_element);
    });

  };
}( jQuery ));
