/*
Would you like to perform an action when an element or its contents gain focus? Here’s how to do it.
*/

jQuery('form')  
    .focusin(function(){  
        jQuery(this).addClass('focused');  
    });  
    .focusout(function(){  
        jQuery(this).removeClass('focused');  
    });  
  
//However, the preferred way to do this is using  
// .focus() and .blur()  
  
//For when an element loses it's focus use .blur()  
$('#target').blur(function() { 
  alert('Handler for .blur() called.'); 
}); 
 
//For when an element gains focus use .focus() 
$('#target').focus(function() { 
  alert('Handler for .focus() called.');  
});
