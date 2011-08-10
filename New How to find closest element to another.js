/*
You can easily find the closest element to another (beginning at the current element and moving up the DOM) using .closest(). See the below example:
*/

$(document).ready(function()  
{  
//Let's set the background color of the nearest  
//UL in this pseudo-menu  
$('li.subchild').closest('ul').css('background-color', 'red');  
});

// Example

/*
<ul>
<li>Parent Menu  
<ul>  
<li class="subchild">Child Item 1</li>  
<li class="subchild">Child Item 2</li>  
</ul>  
</li>  
</ul>
*/
