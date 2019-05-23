function photography() {
    document.getElementById("video").style.display = "none";
    document.getElementById("photos").style.display = "none";
    document.getElementById("photography").style.display = "block";
  }
  
function video() {
    document.getElementById("photos").style.display = "none";
    document.getElementById("photography").style.display = "none";
    document.getElementById("video").style.display = "block";
  }

function photos() {
    document.getElementById("video").style.display = "none";
    document.getElementById("photography").style.display = "none";
    document.getElementById("photos").style.display = "block";
  }

    var d = new Date();
    document.getElementById("copyright").innerHTML = "Copyright 2014 - " + d.getFullYear() + " @ DreamPhoto";
 