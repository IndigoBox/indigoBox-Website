$(document).ready( function()
{
	//Put in the header
	$("body").prepend(''
		+ '<nav>'
		    + '<a id="logo" href="index.html"> indigo<span>Box</span></a>'

		  + '<ul class="menu">'
		        + '<li id="home" class="selected"><a href="index.html">Home</a></li>'
		        + '<li id="about"><a href="about.html">About</a></li>'
		        + '<li id="projects"><a href="projects.html">Projects</a>'
		            + '<ul>'
		                + '<li><a href="snowshoes.html">Snowshoes</a></li>'
						+ '<li><a href="carpe.html">Carpe</a></li>'
						+ '<li><a href="scroll-stop.html">Scroll Stop</a></li>'
						+ '<li><a href="lines.html">Lines</a></li>'
		            + '</ul>'
		        + '</li>'
		        + '<li id="contact"><a href="contact.html">Contact</a></li>'
		    + '</ul>'
		+ '</nav>'
	+ '');

	if(window.location.href.indexOf("indigobox.us") > -1) //if production
	{
		$(".menu a").each(function()
		{
			var href = $(this).attr("href");
			$(this).attr("href", href.replace(".html",""));
		});
	}

	if(window.location.href.indexOf("about") > -1)
	{
		$(".menu li").removeClass("selected");
		$(".menu #about").addClass("selected");
	}
	else if(window.location.href.indexOf("projects") > -1)
	{
		$(".menu li").removeClass("selected");
		$(".menu #projects").addClass("selected");
	}
	else if(window.location.href.indexOf("contact") > -1)
	{
		$(".menu li").removeClass("selected");
		$(".menu #contact").addClass("selected");
	}
	else if(window.location.href.indexOf("sneak-peek") > -1)
	{
		$(".menu li").removeClass("selected");
		$(".menu #sneak-peek").addClass("selected");
	}
});
