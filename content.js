var normalize = function(string){
    return string.replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();
};

var hide = function(elements){

    var courses = document.getElementsByClassName("coursebox clearfix");
    var my = document.getElementsByClassName("box coursebox");
    var encuesta = document.getElementsByClassName("box generalbox");
    var popup = document.getElementsByClassName("yui3-button");

    if(courses){
        for(var i = 0; i < courses.length; i++){
            if(elements.indexOf(normalize(courses[i].childNodes[0].childNodes[0].childNodes[0].innerHTML)) != -1){
                courses[i].style["display"] = "none";
            }
        }
    }

    if(my){
        for(var i = 0; i < my.length; i++){
            if(elements.indexOf(normalize(my[i].childNodes[0].childNodes[0].childNodes[0].innerHTML)) != -1){
                my[i].style["display"] = "none";
            }
        }
    }

    if(encuesta){
        for(var i = 0; i < encuesta.length; i++){
            encuesta[i].style["display"] = "none";
        }
    }

    if(popup){
        for(var i = 0; i < popup.length; i++){
            popup[i].click();
        }
    }



};

chrome.storage.sync.get("hide", function (item) {
    if(item.hide){
        hide(item.hide);
    }
});
