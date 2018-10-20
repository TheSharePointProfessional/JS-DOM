// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
var button = document.getElementById("myButton");

button.addEventListener('click', function() {
    var x = document.getElementsByClassName("box");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "blue";
    }
})