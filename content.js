var normalize = function(string){
    return string.replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();
};

var hide = function(elements){

    var courses = document.getElementsByClassName("coursebox clearfix");

    for(var i = 0; i < courses.length; i++){
        if(elements.indexOf(normalize(courses[i].childNodes[0].childNodes[0].childNodes[0].innerHTML)) != -1){
            courses[i].style["display"] = "none";
        }
    }

};

chrome.storage.sync.get("hide", function (item) {
    if(item.hide){
        hide(item.hide);
    }
});
