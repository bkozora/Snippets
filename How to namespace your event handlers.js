/*
Looking for a way to namespace your event handlers? This sample will show you his. It makes it easier to locate your namespace binding later on and easily remove the handler if needed.
*/

$("div").bind("click.plugin", someFn);  
$("div").bind("focus.plugin", otherFn);  
$("div").unbind(".plugin");
