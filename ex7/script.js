// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp
var accordion = document.getElementById("accordion");
accordion.querySelector("h3").addEventListener('click', function() {
    var section = document.getElementById('section');
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
});