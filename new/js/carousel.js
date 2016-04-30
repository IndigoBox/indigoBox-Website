/* Alright, children, so this is a carousel.

 As of 4/29/2016, this only implements the bare bones of what we will use for the carousel.
 We'll talk about maybe bringing in JQuery for this later to make things look pretty,
 but we might not have to here.

*/


// Note to the reader: game-name and game-description tag names are preserved
// as those were the original names. We'll treat the carousel as something presenting
// projects, though, so calm yourself.

// Never mind that this is continuously running or anything.
// 3 second delay between toggle.
setInterval(ctoggle,3000);

var slide = 0;
// This is weird. JS arrays are weird. Can we just go back to C already?
var img = ["./img/InClouds-large.png","./img/snowshoes.png"];
var pname = ["Christmas In Clouds","Project Snowshoes"];
var descrip = ["An elegant flight game.","Windows like you've never seen before."];
var a = ["../projects/InClouds/index.html","../projects/snowshoes/index.html"];
// Note: used variable name a, since we create a link object with <a> in html.

function ctoggle() {

  if (slide != 1) {
    // If not at the end...
    slide++;
  }
  else {
    // Otherwise, at end, so start over here.
    slide = 0;
  }

  // Aka: Let's not use JQuery, but use innerHTML, and be careful of double quotes.
  // Adjusts name first.
  document.getElementById("game-name").innerHTML =
  "<a class='unskew' href="+a[slide]+">"+pname[slide]+"</a>";

  // Then, move on to the description once done with that.
  document.getElementById("game-description").innerHTML =
  "<h1 class='unskew'>"+descrip[slide]+"</h1>";
}
