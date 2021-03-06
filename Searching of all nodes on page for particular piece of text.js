/*
How do you search all the nodes on a page for a particular piece of text using jQuery?
*/

/*This useful extended function will allow you to 
pattern match a keyword across all the nodes in a 
page. See the example below for how GMail use something 
similar in concept for their search-keyword highlighting*/  
  
$.fn.egrep = function(pat) {  
 var out = [];  
 var textNodes = function(n) {  
  if (n.nodeType == Node.TEXT_NODE) {  
   var t = typeof pat == 'string' ?  
    n.nodeValue.indexOf(pat) != -1 :  
    pat.test(n.nodeValue);  
   if (t) {  
    out.push(n.parentNode);  
   }  
  }  
  else {  
   $.each(n.childNodes, function(a, b) {  
    textNodes(b);  
   });  
  }  
 };  
 this.each(function() {  
  textNodes(this);  
 });  
 return out;  
};  
  
// Here's an example of using this to highlight  
//all the nodes on the page that contain the keyword  
//'jQuery'  
$("#testbutton").click(function()  
{  
var n = $('body').egrep(/jquery/i); 
for (var i = 0; i < n.length; ++i) 
{ 
   void($(n[i]).css('background', 'yellow'));  
 }  
});
