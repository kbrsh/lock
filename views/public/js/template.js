var count = 5;
document.getElementById("counter").innerHTML = count;

setTimeout(function() {
    document.getElementById("overlay").style.display = '';
}, 5000);

setInterval(function() {
    count--;
    document.getElementById("counter").innerHTML = count;
}, 1000);