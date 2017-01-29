
<img src="img/ibox-square.png?raw=true" align="right" width="100">
# indigoBox Website [![Build Status](https://travis-ci.org/IndigoBox/indigoBox-Website.svg?branch=gh-pages)](https://travis-ci.org/IndigoBox/indigoBox-Website)
The indigoBox Website is the home of indigoBox on the web, and is developed as our front facing presecence, and a way to communicate what we do. The indigoBox website details all of our projects, explains our purpose, and gives short bios of all of our members.

The indigoBox website is hosted on GitHub Pages and is powered by simple [Jekyll](http://jekyllrb.com), HTML, CSS, and jQuery. It uses the jQuery bgswitcher plugin to handle the homepage slider.

## Running the site
The indigoBox website runs off Jekyll. Per their website, you can install jekyll by running `gem install jekyll`, which installs the jekyll gem.

To run the website locally, clone it and in your local directory run `jekyll serve`. The website should then be available at `localhost:4000`.

## Continuous Integration
The indigoBox site uses continuous integration using Travis CI. You can click the Build Status badge at the top of this README to see if tests are currently passing. To run tests locally, run the command specified for HTML Proofer in the `.travis.yml` file which is:

`htmlproofer ./_site --assume-extension --allow-hash-href --file-ignore /old.*/`

This runs HTML Proofer on the built Jekyll site, so make sure to run it after running `jekyll build` or while a Jekyll server through `jekyll serve` is running, or your test results may be out of date.

A quick explanation of the HTML Proofer commands:
--assume-extension    - Fix needing the .html extension on links
--allow-hash-href     - Fix href="#" being marked as invalid
--file-ignore /old.*/ - Fix testing the site archives in /old and /old2

If you'd like to modify the testing run, find the relevant command from the [HTML Proofer GitHub](https://github.com/gjtorikian/html-proofer) and update the `.travis.yml` file and this README.
