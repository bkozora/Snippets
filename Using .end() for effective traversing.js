/*
Each traversal method in jQuery creates a new set which builds a stack. You can use .end() to reach the previous set.
*/

$(" 
<ul> 
<li> </li> 
</ul> 
 
") // li  
  .find("a") // a  
    .attr("href", "http://www.google.com/") // a  
    .html("Google!") // a  
  .end() // li  
  .appendTo("ul");
