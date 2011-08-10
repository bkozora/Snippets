/*
Did you know that jQuery has great support for Callbacks? Here are two ways you can tell if a function has completed running.
*/

function runAlertNow ()  
{  
    $(this).html('I just ran this function!');  
}  
  
// both of these lines do the same thing  
$('#test').slideUp(400, runAlertNow);  
$('#test').slideUp(400, function ()  
{  
	$(this).html('I just ran the anonymous function!');  
});
