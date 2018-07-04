// Never mind that this is continuously running or anything.
// 4 second delay between toggle.
setInterval(ctoggle,4000);

var slide = 0;
// This is weird. JS arrays are weird. Can we just go back to C already?
var img = ["./img/carpe-schedule.png","./img/snowshoes1.jpeg","./img/Isitfresh-cropped.png"];
var pname = ["Carpe","Snowshoes","Is it fresh?"];
var descrip = ["Social scheduling for individuals and businesses","Windows like you've never seen it before", "Your beautifully simple grocery guide"];
var a = ["./carpe.html","./snowshoes.html","./is-it-fresh.html"];
// Note: used variable name a, since we create a link object with <a> in html.

$(document).ready(function()
{
  // Use bgswitcher, from here:
  // https://github.com/rewish/jquery-bgswitcher#readme
  $("#content").bgswitcher({
      images: img,
      start: false
  });
});


function ctoggle() {

  if (slide < 2) {
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


  $("#content").bgswitcher("select", slide)

  // Adjusts name first.
  document.getElementById("project-name").innerHTML =
  "<a href="+a[slide]+">"+pname[slide]+"</a>";

  // Then, move on to the description once done with that.
  document.getElementById("project-description").innerHTML =
  "<h1>"+descrip[slide]+"</h1>";
}
