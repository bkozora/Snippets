/*
Would you like to style only a particular range of elements within a list? jQuery’s .slice() function makes this possible through indices.
*/

/*
<ul>  
<li>Apples</li>  
<li>Pears</li>  
<li>Cherries</li>  
<li>Grapes</li>  
<li>Mangos</li>  
</ul>
*/

/*If we just want to set the background-color of 
  everything after element number two (pears) we 
  can do this using:*/  
  
$('li').slice(2).css('background-color', 'yellow');  
  
/*and if we want to set the bg-color of the elements 
  after two(pears), but only up to and including 4 
  (grapes), we can use:*/  
  $('li').slice(2, 4).css('background-color', 'green')
