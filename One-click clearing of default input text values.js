/*
How to easily and quickly add one-click clearing of default input text values from your fields
*/

(function($){  
    $.fn.clearDefault = function(){  
        return this.each(function(){  
            var default_value = $(this).val();  
            $(this).focus(function(){  
                if ($(this).val() == default_value)  
                              $(this).val("");  
            });  
            $(this).blur(function(){  
                if ($(this).val() == "")  
                              $(this).val(default_value);  
            });  
        });  
    };  
})(jQuery);  
  
// How to use it: $('input').clearDefault();
