/*
Interested in creating a simple custom selector?. Creating your own selectors is easy and you can do this for your plugins if you would like some easy querying features.
*/

jQuery.expr[":"].myplugin = function(elem) {  
  return !!jQuery.data("myplugin");  
};
