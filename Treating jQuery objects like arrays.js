/*
Did you know that you can treat jQuery objects like arrays? Take a look at this example.
*/

/*Here's some sample HTML followed by some jQuery  
that allows us to access the values of any "box"  
by index.*/  
<div id="wrapper">  
<div class="box">Content #1!</div>  
<div class="box">Content #2!</div>  
<div class="box">Content #3!</div>  
<div class="box">Content #4!</div>  
</div>  
<div id="wrapper2">  
<div class="box">Content2 #1!</div>  
</div>

// returns 4  
$('#wrapper .box').length;  
  
// num is equal to 4  
var num = $('#wrapper .box');  
num = num.length;  
  
// text is equal to 'Content #2!'  
var text = $("#wrapper .box")[1];  
  
// text is equal to 'Content #1'  
var text = $("#wrapper .box")[0];  
  
// text is equal to 'Content2 #1'  
var text = $("#wrapper2 .box")[0];
