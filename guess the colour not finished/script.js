var heading;
heading = document.getElementById('colorValue');
var buttons = document.getElementsByClassName('colourButton');
function setButtonColor(button,red,blue,green)
    {
        button.setAttribute('style','background-color:rgb('+red +', '+blue+','+green+');');
    }
function makeColorValue()
    {
       return Math.round(Math.random()*225);
    }  
    var red = makeColorValue();
    var blue = makeColorValue();
    var green = makeColorValue();
    for(var i = 0; i < buttons.length; i++)
    {
        var red = makeColorValue();
        var blue = makeColorValue();
        var green = makeColorValue();
        setButtonColor(buttons[i],red,blue,green);
    }