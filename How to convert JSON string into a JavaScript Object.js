/*
Have you ever wanted to convert your JSON string into a JavaScript Object? Rather than having to custom code your own function to do it, just use jQuery’s built in .parseJSON function to achieve this easily (jQuery 1.4.1 and above).
*/

var obj = jQuery.parseJSON(' 
    {"name":"Larry King", 
     "age": "5000" 
    }');  
alert( obj.name === "Larry King" ); //true  
alert (obj.age  === "50"); //false  
alert (obj.age  === "5000"); //true
