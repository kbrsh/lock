var count = 5;
document.getElementById("counter").innerHTML = count;

var interval = setInterval(function() {
    if(count === 0) {
        clearInterval(interval);
        document.getElementById("cover").classList.add("show");
        document.getElementById("content").innerHTML = "";
    } else {
        count--;
    }
    document.getElementById("counter").innerHTML = count;
}, 1000);