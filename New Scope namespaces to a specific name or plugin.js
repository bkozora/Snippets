/*
jQuery supports namespacing and this includes namespacing data. You can scope your namespaces to a specific name or plugin and this can help you avoid conflicts with other code that might use the same data name.
*/

/* 
Why namespace? Namespacing ensures that your 
variables don't conflict with any others which 
happen to have the same name. This is important 
if you want to avoid your code breaking when 
other files or plugins are included in your 
page's architecture. See below for an example of 
namespacing data. 
*/  
  
$("div").data("events.plugin",  
{  
   //your data here  
});
