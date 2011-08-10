/*
Have you been trying to find a way to listen to events from a particular context? The delegate and undelegate methods make this possible (supported in jQuery 1.4.2 onwards). There’s also a very large performance gain got from switching over to .delegate()!
*/

$("table").delegate("td", "hover", function(){  
  $(this).toggleClass("active");  
});
