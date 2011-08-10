/*
Function Grouping – jQuery supports binding functions so that they can all be defined within the same group. This can be useful for keeping your cody tidy among other things!
*/

jQuery('#foo').bind({  
    click: function() {  
        // do something  
    },  
    mouseover: function() {  
        // do something  
    },  
    mouseout: function() {  
        // do something  
    }  
})
