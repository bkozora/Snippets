/*
Very useful tip: Did you know that you can select elements within another element just by passing a second parameter to the jQuery initializer?
*/

/*
<div id="yourparent">  
<div id="mychild"> </div>  
</div>
*/

// Here are three ways to access an element within an element:

$('#yourparent').find('#mychild')  
//or even shorter:  
$('#mychild', $('#yourparent'))  
//or even shorter:  
$('#mychild', '#yourparent')
