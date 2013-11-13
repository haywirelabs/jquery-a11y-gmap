(function( $ ) {
  $.fn.displayA11yGmap = function( target , options ) {



    //default settings
    var settings = $.extend({
      width         : 200,
      height        : 200,
      key           : 'AIzaSyAX-vPanPFJFKJNUlW7K2MWfg83piTNUPw',
      map_link_url  : 'https://maps.google.com/?q=',
      map_image_url : 'http://maps.googleapis.com/maps/api/staticmap?',
      marker_color  : 'blue',
      zoom          : 12,
      sensor        : 'false'
    }, options );

    return this.each(function() {
    
      /*
      *  If target is undefined, the target will try to
      *  set to the data-location attribute set in HTML
      */
      
      //alert(target);
      
      if( target === undefined ){
        target = $(this).attr("data-location");
      }

    
      map_image_url = settings.map_image_url + 'center=' + target;
      map_image_url += '&zoom=' + settings.zoom;
      map_image_url += '&size=' + settings.width + 'x' + settings.height;
      map_image_url += '&sensor=' + settings.sensor;
      map_image_url += '&markers=' + 'color:' + settings.marker_color + '%7C' + target;
      map_image_url += '&key=' + settings.key;

      if( target === undefined ){
        map_image_element = '';
      }
      else{  
        map_image_element = '<a href="' + settings.map_link_url + target + '"><img src="' + map_image_url + '" alt="Map of ' + target + '" title="Map of ' + target + '" /></a>';
      }
    
      $(this).css("width", settings.width);
      $(this).css("height", settings.height);
      $(this).html(map_image_element);
      
      target = undefined;
      
    });


  };
}( jQuery ));
