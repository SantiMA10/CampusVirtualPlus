var save = function() {

    var subjects = document.getElementsByClassName("subject");
    var subjects_names = [];

    for(var i = 0; i < subjects.length; i++){
        if(subjects[i].value){
            subjects_names.push(normalize(subjects[i].value))
        }
    }

    chrome.storage.sync.set({
        hide : subjects_names
    });
};

var add = function (value) {

    var p = document.createElement("p");
    p.style.margin = "2px";

    var input = document.createElement("input");
    input.type = "text";
    input.className = "subject";

    if(typeof value == "string"){
        input.value = value;
    }

    p.appendChild(input);
    document.getElementById("subjects").appendChild(p);

};

var restore_options = function () {

    chrome.storage.sync.get("hide", function (item) {

        if(item.hide){
            for(var i = 0; i < item.hide.length; i++){

                add(item.hide[i]);

            }
        }
        else{
            add();
        }

    });


};

var normalize = function(string){
    return string.replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save);
document.getElementById('add').addEventListener('click', add);