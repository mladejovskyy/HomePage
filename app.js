
//google search
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
});




//time

const displayTime = document.querySelector('#current-time')

var d = new Date();
var n = d.toLocaleTimeString();
displayTime.innerHTML = n

setInterval(() => {
    var d = new Date();
    var n = d.toLocaleTimeString();
    displayTime.innerHTML = n
}, 1000);