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

  var map4options = {
    width        : 400,
    height       : 325,
	marker_color : 'red',
	zoom         : 15
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

  var targets = [
	"catonsville, maryland",
	"42.46441961300047, -87.84984078299965",
	"Des Plaines, IL",
	"800 Crystal Lake Blvd, Suite 111 Iron Mountain Mi 49801"
	];

  /*
  * Identify an HTML element to create the map in.
  */

  $( "#map1" ).displayA11yGmap(targets[0], options);
  $( "#map2" ).displayA11yGmap(targets[1]);
  $( "#map3" ).displayA11yGmap(targets[2], options);  
  $( "#map4" ).displayA11yGmap(targets[3], map4options);

/*
  alert("end map.");
*/

});