$( document ).ready(function() {

/*
  alert("start map.");
*/

  /*
  * Set Options at Runtime.
  */

  var options = {
    width   : 300,
    height  : 225
  };

  /*
  * set Map Target.
  * Can be either as either a
  *
  * comma-separated {latitude,longitude} pair (e.g. "40.714728,-73.998672")
  *
  * or a
  *
  * string address (e.g. "city hall, new york, ny")
  *
  * identifying a unique location
  */

  var target = "catonsville, maryland";

  /*
  * Identify an HTML element to create the map in.
  */

  $( ".map" ).displayA11yGmap(target, options);

/*
  alert("end map.");
*/

});