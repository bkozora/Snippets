/*
How do you handle access to elements with IDs that contain special characters in jQuery?
*/

$("$some[id]").show(); // won't work for this type of ID  
$("$some\\[id\\]").show() // works fine for the ID: some[id]
