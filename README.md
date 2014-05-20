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

 1. Install gulp globally using [npm][]: `npm install -g gulp`
 2. Install the build dependencies specific to this project: `npm install .`
 3. To do an initial transpile, and start a dev web server with livereload: `gulp`



[Gulp]: http://gulpjs.com/
[Browserify]: http://browserify.org/
[es6ify]: https://github.com/thlorenz/es6ify
[npm]: https://www.npmjs.org/
[traceur]: https://github.com/google/traceur-compiler
[features]: https://github.com/google/traceur-compiler/wiki/LanguageFeatures

Installation issues
-------------
If you get the error `Error: No compatible version found: archy@'^0.0.2` when installing gulp
you should upgrade your version of node. 0.10.25 worked for me - Andy
