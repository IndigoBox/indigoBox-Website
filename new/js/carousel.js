/* Alright, children, so this is a carousel.

 As of 4/29/2016, this only implements the bare bones of what we will use for the carousel.
 We'll talk about maybe bringing in JQuery for this later to make things look pretty,
 but we might not have to here.

*/


// Note to the reader: game-name and game-description tag names are preserved
// as those were the original names. We'll treat the carousel as something presenting
// projects, though, so calm yourself.

// Never mind that this is continuously running or anything.
// 5 second delay between toggle.
setInterval(ctoggle,4000);

var slide = 0;
// This is weird. JS arrays are weird. Can we just go back to C already?
var img = ["./img/carpe-schedule.png","./img/snowshoes.png"];
var pname = ["Carpe","Snowshoes"];
var descrip = ["Social scheduling for individuals and businesses","Windows like you've never seen it before"];
var a = ["./carpe.html","./snowshoes.html"];
// Note: used variable name a, since we create a link object with <a> in html.

$(document).ready(function()
{
  // Use bgswitcher, from here:
  // https://github.com/rewish/jquery-bgswitcher#readme
  $("#content").bgswitcher({
      images: img,
      interval: 4000
  });
});


function ctoggle() {

  if (slide != 1) {
    // If not at the end...
    slide++;
  }
  else {
    // Otherwise, at end, so start over here.
    slide = 0;
  }

  // Aka: Let's not use JQuery, but use innerHTML and other goodies, and be careful of double quotes.

  // Set the background image. Note: I modified the CSS for this one. It'll be alright, I swear.
  // document.getElementById("content").style.backgroundImage = "url("+img[slide]+")";




  // Adjusts name first.
  document.getElementById("project-name").innerHTML =
  "<a href="+a[slide]+">"+pname[slide]+"</a>";

  // Then, move on to the description once done with that.
  document.getElementById("project-description").innerHTML =
  "<h1>"+descrip[slide]+"</h1>";
}
