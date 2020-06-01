//* Automatic Slideshow - changes image every 3 seconds*//
const myIndex = 0;
carousel();

function carousel() {
  const i;
  const x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}