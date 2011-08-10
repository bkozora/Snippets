/*
You can dynamically change the context of a function (if needed) using something similar to this. Since jQuery 1.4.* you’ve also been able to easily remove the proxied function.
*/

var obj = { method: function(){} };  
$("#foo").click( jQuery.proxy( obj, "method" ) );  
$("#foo").unbind( "click", obj.method );
