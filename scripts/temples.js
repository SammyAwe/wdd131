
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
hamburger.addEventListener('click', function() {
    nav.classList.toggle('show');
    hamburger.classList.toggle('close');
});

var currentYear = new Date().getFullYear();
var lastModifiedDate = document.lastModified;
document.getElementById("currentYear").innerText = currentYear;
document.getElementById("lastModified").innerText = lastModifiedDate;