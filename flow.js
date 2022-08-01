var imageTracker = "first";

/* Create Images */
function change() {
    var image = document.getElementById("Create");

    if (imageTracker = "first") {
        image.src = 'Assets/undraw_making_art_re_ee8w.svg';
        imageTracker = "second";
    }
    else {
        image.src = 'Assets/undraw_art_museum_-8-or4.svg';
        imageTracker = "first";
    }
}

var timer = setInterval('change()',5000);

function stop() {
    clearInterval(timer);
}