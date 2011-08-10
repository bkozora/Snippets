/*
Attributes in jQuery – jQuery supports passing attributes for an object as the second argument to the jQuery function itself. This creates a new link on the page.
*/

$('', {  
    text: 'jQuery is awesome!',  
    href: 'http://www.jquery.com',  
    id: 'someAwesomeID',  
    rel: 'external',  
    title: 'This is a title'  
}).appendTo('body');
