/*
When styling a large number of elements, instead of using css() it is more efficient to append a style tag to the DOM as follows.
*/

$('
<style type="text/css"> div.class { color: red; } </style> 
 
')  
.appendTo('head');
