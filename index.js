  let myVid = document.getElementById(myVid);

  let goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      document.body.requestFullscreen(myVid);
  }, false);
  
