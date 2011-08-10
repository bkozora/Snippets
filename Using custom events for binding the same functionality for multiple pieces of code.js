/*
A good tip for complicated applications: Custom events are a useful way for multiple pieces of code to bind to the same functionality, so you trigger one event but lots of handlers can be executed.
*/

$("div").bind("remove.pluginA", someFn);  
$("div").bind("remove.pluginB", otherFn);  
$("div").trigger("remove");
