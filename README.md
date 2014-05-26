ECMAScript 6 Workshop
=====================
Browsers are not ES6 compatible at the moment, since ES6 currently only exists as an unfinished spec.
For this reason, we have to *transpile* our code to ES5.

Transpiling will be done using [Gulp][]
and [Browserify][] with the [es6ify][] transform.

es6ify uses Google's [traceur][] compiler to do the actual transformation,
check [their list of supported language features][features] to get going on ES6.


Installation
------------
The setup requires that you have Node.js installed.

 1. Install gulp globally using [npm][]: `npm install -g gulp`
 2. Install the build dependencies specific to this project: `npm install .`
 3. To do an initial transpile, and start a dev web server with livereload: `gulp`


Dev environment
---------------
You *could* use your editor of choice, but to make things a bit more interesting, 
we will try to do all development directly from the browser environment.
Chrome has something called *workspaces*, and Firefox has *scratchpad*.

Follwo the setup guides for [Chrome][] or [Firefox][].


[Gulp]: http://gulpjs.com/
[Browserify]: http://browserify.org/
[es6ify]: https://github.com/thlorenz/es6ify
[npm]: https://www.npmjs.org/
[traceur]: https://github.com/google/traceur-compiler
[features]: https://github.com/google/traceur-compiler/wiki/LanguageFeatures
[Chrome]: https://developer.chrome.com/devtools/docs/workspaces
[Firefox]: https://developer.mozilla.org/en-US/docs/Tools/Scratchpad
