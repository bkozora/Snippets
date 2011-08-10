/*
It’s a feature that many developers forget exists within jQuery – data() – jQuery actually has an API for invisibly storing data on DOM nodes so you can easily store any information through JS and it’ll be available through the same central resource. Garbage collection of data stored can either be done through removeData() or via the remove() function after the element has been deleted.
*/

$("div").data("myName", 'addy');  
$("div").data("myName") === 'addy';

/* Here are two ways to remove all of the information 
bound to an element*/  
$("div").removeData();  
$("div").remove();
