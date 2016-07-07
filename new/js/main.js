function currentUrlContains(str) { return window.location.href.indexOf(str) > -1; }

document.addEventListener('DOMContentLoaded', function () {

    var navbar =
        '<nav> 																		\
		    <a id="logo" href="index.html"> indigo<span>Box</span></a> 				\
																					\
		  <ul class="menu">															\
		        <li id="home"><a href="index.html">Home</a></li> 	                \
		        <li id="about"><a href="about.html">About</a></li>			        \
		        <li id="projects"><a href="projects/index.html">Projects</a>        \
		            <ul>															\
		                <li><a href="snowshoes.html">Snowshoes</a></li>				\
						<li><a href="carpe.html">Carpe</a></li>						\
						<li><a href="scroll-stop.html">Scroll Stop</a></li>		    \
						<li><a href="lines.html">Lines</a></li>						\
		            </ul>															\
		        </li>																\
		        <li id="contact"><a href="contact.html">Contact</a></li>			\
		    </ul>																	\
		</nav>';

    // Prepends the navbar to the html page. This just helps us cut down on
    // redundant HTML code that may frequently change.
	document.body.insertAdjacentHTML('afterbegin', navbar);


    // In production mode we can strip off the .html from links.
    if(currentUrlContains("indigobox.us"))
    {
        var links = document.body.getElementsByTagName('a')

        for (var i = 0; i < links.length; i++) {
            links[i].href = links[i].href.replace(".html", "");
        }
    }


    // Map of page -> elementId pairs to decide what nav bar tab should be selected
    // based on the current URL name. Ideally we should abstract this away, but this
    // will do for now.
    var pageToTabId = {
        'index':         'home',
        'about':        'about',
        'contact':      'contact',
        'projects':     'projects',
        'snowshoes':    'projects',
        'carpe':        'projects',
        'scroll-stop':  'projects',
        'lines':        'projects'
    };

    for (var page in pageToTabId) {
        if (currentUrlContains(page)) {
            var selectedTab = document.getElementById(pageToTabId[page]);
            selectedTab.className += " selected";
        }
    }
});