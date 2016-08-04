function check(){ 
    String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); }; 
    var textAreaValue=document.getElementById('message').value; 
    var trimmedTextAreaValue=textAreaValue.trim(); 
    if(trimmedTextAreaValue!="") { 
        document.forms["form"].submit();
    } else {
        document.body.style.background = "#FF4365";
        document.body.style.color = "#FFFFF3";
        return false;
    }
} 