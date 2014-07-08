Learn the new Javascript features coming in EcmaScript 6
========================================================

EcmaScript 6 (ES6) is the future of JavaScript. It is highly anticipated and contains many useful features seen in other programming languages like Python and CoffeScript. At Iterate we had an internal ES6 workshop where we went through some of the new ES6 features. We wanted to share the work we did preparing the workshop in this blog post. We recommend that you do the tasks right after reading about each feature.

ES6 is not fully implemented in any browser yet, even the specifications are not finalized. Still there are a number of good options for how to use ES6 features today. We use [es6ify](https://github.com/thlorenz/es6ify) which relies on [Google's traceur](https://github.com/google/traceur-compiler). Together with [Browserify](http://browserify.org) and [Gulp](http://gulpjs.com) we transpile our ES6 code to ES5.

Our set up is availble in our [GitHub repo](https://github.com/iterate/es6-workshop) with helper methods for some of the tasks. There you can also find a [solutions](https://github.com/iterate/es6-workshop/tree/solutions) branch with suggestions for how to solve the tasks.

There is a long list of features and improvements in EcmaScript 6 (see the [ES6 draft](http://people.mozilla.org/~jorendorff/es6-draft.html) or the features [supported by Traceur](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)). In this workshop we made a selection of features to go through; template literals, default parameters, arrow functions, destructuring, rest parameters, spread operator and generators.

## Domain
To make the tasks less generic and a bit more interesting we use a registry of Reindeer earmarks. The reindeer registry is loaded into the registry var in app.js.

## Template literals
Template strings are one of the small, simple improvements in ES6, but it can still be of great help. With template literals, HTML templates can be defined directly in the javascript as strings with minimal effort since variables can be inserted anywhere in a string.

```javascript
var s = 'dog poo';
var a = 4;
var msg = `${3 * a} buckets full of ${s}`;
```

Template literals can also span several lines:

```javascript
var s = `a
  b
  c`;
assert(s === 'a\n  b\n  c');
```

### Task

Write a function that prints out a given name in a sentence, using template literals.


## Default parameters
Default parameters are used to supply defaults to arguments that can then be ommitted from function calls. For example we can set a default port number when starting a Node server.

```javascript
function startServer(port = 8080) {
  var server = http.createServer(handler);
  server.listen(port);
}
```

### Task:
Create a function that logs out the text for the Norwegian entry in the Eurovision Song Contest 1980, «[Sámiid Ædnan](http://no.wikipedia.org/wiki/S%C3%A1miid_%C3%A6dnan)», with the word “krutt” replaceable by an argument given to the function.

Call the function with different inputs, and no inputs.


## Arrow functions
Inspired by (among others) [CoffeScript](http://coffeescript.org), the arrow function is a much shorter syntax for defining functions in javascript.

```javascript
var log = function(msg) { console.log(msg) }
var log = (msg) => { console.log(msg) };

log("Hello");
```

The brackets `{}` are only necessary for functions that spans multiple lines.

Arrow functions are great for defining anonymous functions. For example in these array functions that we will use in the following task:

```javascript
[].map(fn);
[].filter(fn);
[].reduce(fn);
[].forEach(fn);
```

### Task:
Using the provided array of reindeer owners, find and show owners that has a firstName of “Mikkel”.


## Destructuring

Destructuring is used to assign elements in an array or object to separate variables.

```javascript
var [a, [b], c] = [
'hello', [', ', 'junk'], 'world'];
console.log(a + b + c); // "hello, world"

var pt = {x: 123, y: 222};
var {x, y} = pt; // x = 124, y = 222
```

Destructuring is especially powerful when used in function arguments. This greatly improves the readability of the code, since what you are using from an object is stated clearly in the function declaration.

In the example below we are iterating over an array of shopping item objects. We want to use the item and quantity values from the map and destruct them in the (arrow-)function definition. Then they can be used directly inside the function.

```javascript
var shoppingList = [
  {item: "Banana", quantity: 5},
  {item: "Bread", quantity: 1}];

var increasedShoppingList = shoppingList.map(
  ({item, quantity}) => {
    return {item: item, quantity: quantity + 1};
  }
);
```

### Task
Create a printOwner function.
It should print the full name of all reindeer owners.

Use destructuring (and forEach).


## Rest parameters
Rest parameters are useful when a function takes in a varying number of input parameters. When using the rest parameter syntax the parameters will be added to an array.

```javascript
function print(...items) {
  items.forEach(function(item) {
    console.log(item);
  });
}

print(1, 2, 3);
```

### Task:
Create a function that takes in any number of places (strings) as arguments and finds the reindeer owners in those places.


## Spread operator
The spread operator is the opposite of the rest parameter. It takes an array and spreads it out as single input arguments.

```javascript
var dateFields = [2013, 12, 24];
var myDate = new Date(...dateFields);

var evenMoreSpecificDate = [...dateFields, 18, 20];
```

### Task:
Add the two new Reindeer owners to the list of reindeer owners.

```javascript
// array push syntax:
array.push(element1, ..., elementN)
```

## Generators

Generators are used to create iterators that keep track of the state for you. A generator runs until it gets to a `yield` expression. It will pause at `yield` until `next()` is called on the generator. When `next()` is called the generator returns what is in the `yield` expression and continues to the next `yield`.

Generators can be used to create possibly infinite sequences. Generators are *lazy* meaning that the sequence is not evaluated before it is needed.

```javascript
function* idGenerator(){
  var i = 0;
  while(true){
    yield i++;
  }
}

var myGen = idGenerator();
myGen.next();   // { value: 0, done: false }
myGen.next();   // { value: 1, done: false }
```

### Task

Create a generator that returns numbers in the Fibonacci number sequence.

### Extra task

Create a “Mikkel” generator, returning owners with the firstName of Mikkel.
